export const logout = () => {
  localStorage.removeItem("ticketapp_session");
  localStorage.removeItem("ticketapp_refresh");
};
