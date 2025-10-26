import { Link } from "react-router";

export default function AppHeader() {
  return (
    <header className="app-header">
      <div>
        <Link to="/">
          <img
            src="/images/icon.webp"
            alt="Brand logo"
            className="brand-image"
          />
        </Link>
        <h1>Kanbanize</h1>
      </div>
    </header>
  );
}
