import { deleteTicket, type Ticket } from "@ticketapp/shared";
import { useState } from "react";
import EditTicket from "./EditTicket";

export default function TicketCard({ ticket }: { ticket: Ticket }) {
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const onDelete = async () => {
    await deleteTicket(ticket.id);
    window.location.reload();
  };

  return (
    <>
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
          <button
            type="button"
            className="btn-edit"
            onClick={() => setOpenModal(true)}
          >
            <span className="icon-pen" />
            Edit
          </button>
          <button
            type="button"
            className="btn-delete"
            onClick={() => setOpenDeleteModal(true)}
          >
            <span className="icon-trash" />
            Delete
          </button>
        </div>
      </li>

      {openDeleteModal && (
        <div className="modal-overlay">
          <dialog role="dialog" className="modal modal-ticket-delete">
            <h2>Are you sure you want to delete this ticket?</h2>

            <div className="actions">
              <button type="button" className="btn-primary" onClick={onDelete}>
                Delete
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setOpenDeleteModal(false)}
              >
                Cancel
              </button>
            </div>
          </dialog>
        </div>
      )}

      <EditTicket
        ticket={ticket}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}
