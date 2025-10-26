export default function DashboardCard({
  title,
  amount,
  color,
}: {
  title: string;
  amount: number;
  color: string;
}) {
  return (
    <li className={"dashboard-card " + color}>
      <h2>{title}</h2>
      <p>{amount}</p>
    </li>
  );
}
