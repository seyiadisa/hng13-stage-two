import { Link } from "react-router";
import AppHeader from "./components/layouts/header";

function App() {
  return (
    <>
      <AppHeader />

      <section className="hero">
        <h1>
          Manage Tickets the <span className="higlight">Smarter Way</span>
        </h1>
        <p>
          Kanbanize streamlines your ticket management workflow. Organize,
          prioritize, and resolve issues faster with our intuitive platform.
        </p>

        <div className="cta">
          <Link to="/auth/login" className="login">
            Login
          </Link>
          <Link to="/auth/signup" className="signup">
            Get Started
          </Link>
        </div>

        <div className="wavy" />
        <div className="circle1" />
        <div className="circle2" />
      </section>

      <section className="features">
        <h1>Powerful Features for Your Team</h1>
        <p>
          Everything you need to manage tickets efficiently and keep your team
          aligned.
        </p>

        <ul className="landing-cards">
          <li className="landing-card">
            <h2>Easy tracking</h2>
            <p>Track ticket status from creation to resolution</p>
          </li>
          <li className="landing-card">
            <h2>Analytics</h2>
            <p>Get insights into your team's performance</p>
          </li>
          <li className="landing-card">
            <h2>Collaboration</h2>
            <p>Work together seamlessly with your team</p>
          </li>
          <li className="landing-card">
            <h2>Fast & Reliable</h2>
            <p>Lightning-quick performance you can count on</p>
          </li>
        </ul>
      </section>

      <section className="cta">
        <h1>Ready to streamline your workflow?</h1>
        <p>
          Join teams worldwide who are managing tickets smarter with Kanbanize.
        </p>
        <Link to="/auth/signup">Start free today</Link>
      </section>
    </>
  );
}

export default App;
