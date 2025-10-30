<script setup lang="ts">
import { onMounted, ref } from "vue";
import TicketCard from "../components/tickets/TicketCard.vue";
import CreateTicket from "../components/tickets/CreateTicket.vue";
import { getTickets, type Ticket } from "@ticketapp/shared";

const tickets = ref<Ticket[]>([]);
const openModal = ref(false);

onMounted(() => {
  async function readTickets() {
    tickets.value = await getTickets();
  }

  readTickets();
});
</script>

<template>
  <div class="ticket-body">
    <h1>Ticket Management</h1>
    <p>Create, edit, and manage your tickets</p>

    <button type="button" class="add-ticket-button" @click="openModal = true">
      Add new ticket
    </button>

    <ul class="ticket-cards">
      <TicketCard
        :key="index"
        v-for="(ticket, index) in tickets"
        :ticket="ticket"
      />
    </ul>
  </div>

  <CreateTicket
    v-if="openModal"
    :onClose="
      () => {
        openModal = false;
      }
    "
  />
</template>
