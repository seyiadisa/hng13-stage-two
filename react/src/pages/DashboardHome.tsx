import DashboardCard from "../components/dashboard/Card";
import { cards } from "../../../assets/js/cards";
import { NavLink } from "react-router";

export default function dashboard() {
  return (
    <div className="dashboard-body">
      <div>
        <p>Welcome back, Admin!</p>
        <nav>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/tickets">View Tickets</NavLink>
        </nav>
      </div>

      <section>
        <ul className="dashboard-cards">
          {cards.map((card, index) => (
            <DashboardCard
              key={index}
              title={card.title}
              amount={card.amount}
              color={card.color}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
