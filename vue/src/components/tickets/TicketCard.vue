<script setup lang="ts">
import { deleteTicket, type Ticket } from "@ticketapp/shared";
import { ref } from "vue";
import { useRouter } from "vue-router";
import EditTicket from "./EditTicket.vue";

const { ticket } = defineProps<{
  ticket: Ticket;
}>();

const router = useRouter();

const openModal = ref(false);
const openDeleteModal = ref(false);

const onDelete = async () => {
  await deleteTicket(ticket.id);
  router.go(0);
};
</script>

<template>
  <li class="ticket-card">
    <h2>{{ ticket.title }}</h2>
    <p>{{ ticket.description ?? "" }}</p>

    <div class="badges">
      <span :class="'ticket-status ' + ticket.status">
        {{ ticket.status }}
      </span>
      <span :class="'ticket-priority ' + ticket.priority">
        {{ ticket.priority ?? "" }}
      </span>
    </div>

    <div class="ticket-actions">
      <button
        class="btn-edit"
        @click="
          () => {
            openModal = true;
          }
        "
      >
        Edit
      </button>
      <button
        class="btn-delete"
        @click="
          () => {
            openDeleteModal = true;
          }
        "
      >
        Delete
      </button>
    </div>
  </li>

  <div v-if="openDeleteModal" class="modal-overlay">
    <dialog role="dialog" class="modal modal-ticket-delete">
      <h2>Are you sure you want to delete this ticket?</h2>

      <div class="actions">
        <button type="button" class="btn-primary" @click="onDelete">
          Delete
        </button>
        <button
          type="button"
          class="btn-secondary"
          @click="() => (openDeleteModal = false)"
        >
          Cancel
        </button>
      </div>
    </dialog>
  </div>

  <EditTicket
    v-if="openModal"
    :ticket="ticket"
    :onClose="() => (openModal = false)"
  />
</template>
