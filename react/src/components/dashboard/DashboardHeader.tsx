import { Link, useLocation } from "react-router";
import { NavLink } from "react-router";

export default function DashboardHeader() {
  const pathname = useLocation().pathname;

  return (
    <>
      <header className="dashboard-header">
        <div>
          <Link to="/">
            <img
              src="/images/icon.webp"
              alt="Brand logo"
              className="brand-image"
            />
          </Link>
          <h1>
            {pathname === "/dashboard" ? "Dashboard" : "Ticket Management"}
          </h1>
        </div>

        <button aria-label="Logout">
          <span className="icon-logout" />
          <span>Logout</span>
        </button>
      </header>
      <nav>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/tickets">View Tickets</NavLink>
      </nav>
    </>
  );
}
