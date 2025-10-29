export default function DashboardCard({
  title,
  amount,
}: {
  title: string;
  amount: number;
}) {
  return (
    <li className="dashboard-card">
      <h2>{title}</h2>
      <p>{amount}</p>
    </li>
  );
}
