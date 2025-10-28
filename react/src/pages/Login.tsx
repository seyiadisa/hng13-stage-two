import { Link, useNavigate } from "react-router";
import { handleLogin, validateLoginInput } from "@ticketapp/shared";

export default function Login() {
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const status = await handleLogin(e);

    if (status?.success) {
      navigate("/dashboard");
    }
  };

  return (
    <main>
      <section className="form-section">
        <div>
          <h1>Welcome Back</h1>
          <p>Sign in to your Kanbanize account</p>

          <form
            onSubmit={onSubmit}
            onInput={validateLoginInput}
            onBlur={validateLoginInput}
          >
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
                minLength={8}
                placeholder="••••••••"
              />
              <span className="error error-password"></span>
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
