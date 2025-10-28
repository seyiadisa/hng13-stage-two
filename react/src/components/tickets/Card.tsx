import { type Ticket } from "@ticketapp/shared";

export default function TicketCard({ ticket }: { ticket: Ticket }) {
  return (
    <li className="ticket-card">
      <h2>{ticket.title}</h2>
      <p>{ticket.description ?? ""}</p>

      <div className="badges">
        <span className={`ticket-status ` + ticket.status}>
          {ticket.status}
        </span>
        <span className={`ticket-priority ` + ticket.priority}>
          {ticket.priority ?? ""}
        </span>
      </div>

      <div className="buttons">
        <button type="button" className="btn-edit">
          <span className="icon-pen" />
          Edit
        </button>
        <button type="button" className="btn-delete">
          <span className="icon-trash" />
          Delete
        </button>
      </div>
    </li>
  );
}
