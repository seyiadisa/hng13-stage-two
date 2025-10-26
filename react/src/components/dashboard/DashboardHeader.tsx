import { useLocation } from "react-router";

export default function DashboardHeader() {
  const pathname = useLocation().pathname;

  return (
    <header className="dashboard-header">
      <div>
        <img src="/images/icon.webp" alt="Brand logo" />
        <h1>{pathname === "/dashboard" ? "Dashboard" : "Ticket Management"}</h1>
      </div>
    </header>
  );
}
