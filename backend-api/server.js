import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import cors from "cors";
import { db } from "./database.js";
import { randomUUID } from "crypto";

const app = express();
app.use(express.json());
app.use(cors());

const SECRET = process.env.JWT_SECRET;
const ACCESS_EXP = process.env.ACCESS_EXP || "1h";
const REFRESH_EXP_SECONDS = parseInt(
  process.env.REFRESH_EXP_SECONDS || "604800",
);

// Helper: sign JWT
function signAccessToken(user) {
  return jwt.sign(
    { userId: user.id, email: user.email, role: user.role },
    SECRET,
    { expiresIn: ACCESS_EXP },
  );
}

// Middleware to verify JWT
function requireAuth(req, res, next) {
  const auth = req.headers.authorization || "";
  const token = auth.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Missing token" });

  try {
    const payload = jwt.verify(token, SECRET);
    req.user = payload;
    next();
  } catch {
    res.status(401).json({ error: "Invalid or expired token" });
  }
}

// REGISTER
app.post("/auth/register", (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "Email and password required" });

  const existing = db.query("SELECT * FROM users WHERE email = ?").get(email);
  if (existing) return res.status(409).json({ error: "User already exists" });

  const passwordHash = bcrypt.hashSync(password, 10);
  const stmt = db.prepare(
    "INSERT INTO users (email, passwordHash, name) VALUES (?, ?, ?)",
  );
  stmt.run(email, passwordHash, name || "");

  const user = db.query("SELECT * FROM users WHERE email = ?").get(email);
  const accessToken = signAccessToken(user);
  const refreshToken = randomUUID();
  db.prepare(
    "INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES (?, ?, ?)",
  ).run(user.id, refreshToken, Date.now() + REFRESH_EXP_SECONDS * 1000);

  res.json({
    accessToken,
    refreshToken,
    user: { id: user.id, email: user.email, name: user.name },
  });
});

// LOGIN
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;
  const user = db.query("SELECT * FROM users WHERE email = ?").get(email);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  if (!bcrypt.compareSync(password, user.passwordHash))
    return res.status(401).json({ error: "Invalid credentials" });

  const accessToken = signAccessToken(user);
  const refreshToken = randomUUID();
  db.prepare(
    "INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES (?, ?, ?)",
  ).run(user.id, refreshToken, Date.now() + REFRESH_EXP_SECONDS * 1000);

  res.json({
    accessToken,
    refreshToken,
    user: { id: user.id, email: user.email, name: user.name },
  });
});

// REFRESH
app.post("/auth/refresh", (req, res) => {
  const { refreshToken } = req.body;
  const row = db
    .query("SELECT * FROM refresh_tokens WHERE token = ?")
    .get(refreshToken);
  if (!row || row.expires_at < Date.now())
    return res.status(401).json({ error: "Invalid refresh token" });

  const user = db.query("SELECT * FROM users WHERE id = ?").get(row.user_id);
  const newAccess = signAccessToken(user);
  res.json({ accessToken: newAccess });
});

// LOGOUT
app.post("/auth/logout", (req, res) => {
  const { refreshToken } = req.body;
  db.prepare("DELETE FROM refresh_tokens WHERE token = ?").run(refreshToken);
  res.json({ ok: true });
});

// Protected: Tickets CRUD
app.get("/tickets", requireAuth, (req, res) => {
  const tickets = db
    .query("SELECT * FROM tickets WHERE owner_id = ?")
    .all(req.user.userId);
  res.json(tickets);
});

app.post("/tickets", requireAuth, (req, res) => {
  const { title, description, status = "open", priority = "medium" } = req.body;
  const now = Date.now();
  db.prepare(
    `
    INSERT INTO tickets (title, description, status, priority, owner_id, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `,
  ).run(title, description, status, priority, req.user.userId, now, now);

  res.status(201).json({ ok: true });
});

app.get("/api/dashboard", requireAuth, (req, res) => {
  const total = db
    .query("SELECT COUNT(*) AS count FROM tickets WHERE user_id = ?")
    .get(req.user.id).count;

  const open = db
    .query(
      "SELECT COUNT(*) AS count FROM tickets WHERE user_id = ? AND status = 'open'",
    )
    .get(req.user.id).count;

  const in_progress = db
    .query(
      "SELECT COUNT(*) AS count FROM tickets WHERE user_id = ? AND status = 'in_progress'",
    )
    .get(req.user.id).count;

  const closed = db
    .query(
      "SELECT COUNT(*) AS count FROM tickets WHERE user_id = ? AND status = 'closed'",
    )
    .get(req.user.id).count;

  res.json({
    total_tickets: total,
    open_tickets: open,
    in_progress_tickets: in_progress,
    resolved_tickets: closed,
  });
});

app.listen(process.env.PORT || 4000);
