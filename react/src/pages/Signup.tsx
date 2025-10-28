import { handleSignup, validateSignupInput } from "@ticketapp/shared";
import { Link, useNavigate } from "react-router";

export default function Signup() {
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const status = await handleSignup(e);

    if (status?.success) {
      navigate("/dashboard");
    }
  };

  return (
    <main>
      <section className="form-section">
        <div>
          <h1>Sign up</h1>
          <p>Join Kanbanize and start managing tickets</p>

          <form
            onSubmit={onSubmit}
            onInput={validateSignupInput}
            onBlur={validateSignupInput}
          >
            <div className="form-field">
              <label htmlFor="name">Full Name</label>
              <input id="name" name="name" required placeholder="John Doe" />
              <span className="error error-name"></span>
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
              <span className="error error-email"></span>
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
              <span className="error error-password"></span>
            </div>
            <div className="form-field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                placeholder="••••••••"
              />
              <span className="error error-confirmPassword"></span>
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
