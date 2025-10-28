export const isAuthenticated = () => {
  const accessToken = localStorage.getItem("ticketapp_session");

  if (!accessToken) return false;

  return true;
};
