<script setup lang="ts">
import { updateTicket, type Ticket } from "@ticketapp/shared";
import TicketModal from "./TicketModal.vue";
import { useRouter } from "vue-router";

const { ticket } = defineProps<{
  onClose: () => void;
  ticket: Ticket;
}>();

const router = useRouter();
const onSubmit = async (e: SubmitEvent) => {
  await updateTicket(e, ticket.id);
  router.go(0);
};
</script>

<template>
  <TicketModal :onSubmit="onSubmit" :onClose="onClose" :ticket="ticket" />
</template>
