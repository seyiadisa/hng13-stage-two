import { Database } from "bun:sqlite";

export const db = new Database("app.sqlite");

// Create tables if they don’t exist
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    passwordHash TEXT,
    name TEXT
  );
`);

db.run(`
  CREATE TABLE IF NOT EXISTS refresh_tokens (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    token TEXT,
    expires_at INTEGER
  );
`);

db.run(`
  CREATE TABLE IF NOT EXISTS tickets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT,
    status TEXT CHECK(status IN ('open', 'in_progress', 'closed')),
    priority TEXT,
    owner_id INTEGER,
    created_at INTEGER,
    updated_at INTEGER
  );
`);
