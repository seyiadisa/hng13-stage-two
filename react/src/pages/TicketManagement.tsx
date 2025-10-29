import TicketCard from "../components/tickets/Card";
import { useEffect, useState } from "react";
import CreateTicket from "../components/tickets/CreateTicket";
import { getTickets, type Ticket } from "@ticketapp/shared";

export default function TicketManagement() {
  const [openModal, setOpenModal] = useState(false);
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    async function readTickets() {
      setTickets(await getTickets());
    }

    readTickets();
  }, []);

  return (
    <>
      <div className="ticket-body">
        <h1>Ticket Management</h1>
        <p>Create, edit, and manage your tickets</p>

        <button
          type="button"
          className="add-ticket-button"
          onClick={() => setOpenModal(true)}
        >
          Add new ticket
        </button>

        <ul className="ticket-cards">
          {tickets.map((ticket, index) => (
            <TicketCard ticket={ticket} key={index} />
          ))}
        </ul>
      </div>

      <CreateTicket open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}
