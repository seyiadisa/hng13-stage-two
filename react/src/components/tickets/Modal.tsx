import type { Ticket } from "@ticketapp/shared";

export default function TicketModal({
  onSubmit,
  onClose,
  ticket,
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
  ticket?: Ticket;
}) {
  return (
    <div className="modal-overlay">
      <form
        role="dialog"
        onSubmit={onSubmit}
        className="modal modal-ticket-form"
      >
        <h2>Create Ticket</h2>
        <div className="form-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={ticket?.title}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            defaultValue={ticket?.description}
            name="description"
          ></textarea>
        </div>
        <div className="form-field">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            defaultValue={ticket?.status}
            required
          >
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            defaultValue={ticket?.priority}
            required
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-primary">
            {ticket ? "Update" : "Create"}
          </button>
          <button type="button" onClick={onClose} className="btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
