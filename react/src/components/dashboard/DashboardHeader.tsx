import { logout } from "@ticketapp/shared";
import { Link, useLocation, useNavigate } from "react-router";
import { NavLink } from "react-router";

export default function DashboardHeader() {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(0);
  };

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

        <button aria-label="Logout" onClick={handleLogout}>
          <span className="icon-logout" />
          <span className="text">Logout</span>
        </button>
      </header>
      <nav>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/tickets">View Tickets</NavLink>
      </nav>
    </>
  );
}
