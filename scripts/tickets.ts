export type Ticket = {
  id: number;
  title: string;
  status: "open" | "in_progress" | "closed";
  description?: string;
  priority?: "high" | "medium" | "low";
};

export const createTicket = async (
  e:
    | SubmitEvent
    | (typeof import("react") extends Record<string, any>
        ? import("react").FormEvent<HTMLFormElement>
        : never),
) => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const title = form.querySelector("#title") as HTMLInputElement;
  const description = form.querySelector("#description") as HTMLInputElement;
  const priority = form.querySelector("#priority") as HTMLInputElement;

  const ticket: Ticket = {
    id: -1, // doesn't matter; DB creates its own ID
    title: title.value,
    status: "open",
    description: description.value,
    priority: priority.value as "high" | "medium" | "low",
  };

  const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/tickets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("ticketapp_session")}`,
    },
    body: JSON.stringify(ticket),
  });

  const data = await res.json();

  return data;
};

export const getTickets = async () => {
  const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/tickets", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("ticketapp_session")}`,
    },
  });
  const data = await res.json();
  return data as Ticket[];
};

export const updateTicket = async (
  e:
    | SubmitEvent
    | (typeof import("react") extends Record<string, any>
        ? import("react").FormEvent<HTMLFormElement>
        : never),
  id: number,
) => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const title = form.querySelector("#title") as HTMLInputElement;
  const description = form.querySelector("#description") as HTMLInputElement;
  const status = form.querySelector("#status") as HTMLInputElement;
  const priority = form.querySelector("#priority") as HTMLInputElement;

  const ticket: Ticket = {
    id: id,
    title: title.value,
    status: status.value as "open" | "in_progress" | "closed",
    description: description.value,
    priority: priority.value as "high" | "medium" | "low",
  };

  const res = await fetch(import.meta.env.VITE_BACKEND_URL + `/tickets/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("ticketapp_session")}`,
    },
    body: JSON.stringify(ticket),
  });
  const data = await res.json();
  return data;
};

export const deleteTicket = async (id: number) => {
  const res = await fetch(import.meta.env.VITE_BACKEND_URL + `/tickets/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("ticketapp_session")}`,
    },
  });
  const data = await res.json();
  return data;
};
