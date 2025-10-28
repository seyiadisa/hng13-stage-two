import { tickets } from "@ticketapp/shared";
import TicketCard from "../components/tickets/Card";

export default function TicketManagement() {
  return (
    <div className="ticket-body">
      <h1>Ticket Management</h1>
      <p>Create, edit, and manage your tickets</p>

      <button className="add-ticket-button">Add new ticket</button>

      <ul className="ticket-cards">
        {tickets.map((ticket, index) => (
          <TicketCard ticket={ticket} key={index} />
        ))}
      </ul>
    </div>
  );
}
