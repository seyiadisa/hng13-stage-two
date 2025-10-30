<script setup lang="ts">
import { useRouter } from "vue-router";
import TicketModal from "./TicketModal.vue";
import { createTicket } from "@ticketapp/shared";

defineProps<{
  onClose: () => void;
}>();

const router = useRouter();
const onSubmit = async (e: SubmitEvent) => {
  await createTicket(e);
  router.go(0);
};
</script>

<template>
  <TicketModal :onSubmit="onSubmit" :onClose="onClose" />
</template>
