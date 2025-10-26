import DashboardCard from "../components/dashboard/Card";
import { cards } from "../../../assets/js/cards";

export default function dashboard() {
  return (
    <div className="dashboard-body">
      <p>Welcome back, Admin!</p>

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
