export type Ticket = {
  title: string;
  status: "open" | "in_progress" | "closed";
  description?: string;
  priority?: "high" | "medium" | "low";
};

export const tickets: Ticket[] = [
  {
    title: "Fix authentication bug",
    status: "open",
    description: "Users are unable to log in with correct credentials.",
    priority: "high",
  },
  {
    title: "Implement new dashboard feature",
    status: "in_progress",
    description: "Add a new section to the dashboard for analytics.",
    priority: "medium",
  },
  {
    title: "Update styling on homepage",
    status: "closed",
    description: "Adjust CSS to match new design specifications.",
    priority: "low",
  },
  {
    title: "Database migration for user data",
    status: "open",
    description: "Migrate existing user data to the new database schema.",
    priority: "high",
  },
  {
    title: "Refactor API endpoint for products",
    status: "in_progress",
    description: "Improve performance and readability of the product API.",
    priority: "medium",
  },
];
