export const getDashboardStats = async () => {
  const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/dashboard", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("ticketapp_session")}`,
    },
  });

  const data = await res.json();

  return data;
};
