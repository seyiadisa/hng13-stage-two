import { useEffect, useState } from "react";
import DashboardCard from "../components/dashboard/Card";
import { getDashboardStats } from "@ticketapp/shared";

export default function Dashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    async function getStats() {
      setStats(await getDashboardStats());
    }

    getStats();
  }, []);

  return (
    <div className="dashboard-body">
      <p>Welcome back, Admin!</p>

      <section>
        <ul className="dashboard-cards">
          {Object.entries(stats).map(([title, amount], index) => (
            <DashboardCard
              title={(title as string).split("_").join(" ")}
              amount={amount as number}
              key={index}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
