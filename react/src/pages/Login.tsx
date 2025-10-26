import { Link } from "react-router";

export default function Login() {
  return (
    <main>
      <section className="form-section">
        <div>
          <h1>Welcome Back</h1>
          <p>Sign in to your Kanbanize account</p>

          <form>
            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="example@email.com"
              />
            </div>
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="••••••••"
              />
            </div>

            <button type="submit">Sign In</button>

            <div className="or-text">
              <span>or</span>
            </div>

            <p>
              Don't have an account? <Link to="/auth/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
