import { Link } from "react-router";

export default function Signup() {
  return (
    <main>
      <section className="form-section">
        <div>
          <h1>Sign up</h1>
          <p>Join Kanbanize and start managing tickets</p>

          <form>
            <div className="form-field">
              <label htmlFor="name">Full Name</label>
              <input id="name" name="name" required placeholder="John Doe" />
            </div>
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
            <div className="form-field">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                required
                placeholder="••••••••"
              />
            </div>

            <button type="submit">Create Account</button>

            <div className="or-text">
              <span>or</span>
            </div>

            <p>
              Already have an account? <Link to="/auth/login">Sign In</Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
