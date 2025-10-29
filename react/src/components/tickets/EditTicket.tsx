import { updateTicket, type Ticket } from "@ticketapp/shared";
import TicketModal from "./Modal";

export default function EditTicket({
  open,
  onClose,
  ticket,
}: {
  open: boolean;
  onClose: () => void;
  ticket: Ticket;
}) {
  if (!open) return null;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await updateTicket(e, ticket.id);
    window.location.reload();
  };

  return <TicketModal onSubmit={onSubmit} onClose={onClose} ticket={ticket} />;
}
