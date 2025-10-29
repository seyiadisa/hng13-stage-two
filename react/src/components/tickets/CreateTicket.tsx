import { createTicket } from "@ticketapp/shared";
import TicketModal from "./Modal";

export default function CreateTicket({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await createTicket(e);
    window.location.reload();
  };

  return <TicketModal onSubmit={onSubmit} onClose={onClose} />;
}
