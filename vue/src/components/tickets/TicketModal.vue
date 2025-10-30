<script setup lang="ts">
import type { Ticket } from "@ticketapp/shared";
import { ref } from "vue";

const props = defineProps<{
  onSubmit: (e: SubmitEvent) => void;
  onClose: () => void;
  ticket?: Ticket;
}>();

const title = ref<string>(props.ticket?.title ?? "");
const description = ref<string>(props.ticket?.description ?? "");
const status = ref<string>(props.ticket?.status ?? "open");
const priority = ref<string>(props.ticket?.priority ?? "low");
</script>

<template>
  <div class="modal-overlay">
    <form
      role="dialog"
      @submit="onSubmit($event)"
      class="modal modal-ticket-form"
    >
      <h2>Create Ticket</h2>
      <div class="form-field">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" v-model="title" required />
      </div>
      <div class="form-field">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          v-model="description"
          name="description"
        ></textarea>
      </div>
      <div class="form-field">
        <label htmlFor="status">Status</label>
        <select id="status" name="status" v-model="status" required>
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>
      </div>
      <div class="form-field">
        <label htmlFor="priority">Priority</label>
        <select id="priority" name="priority" v-model="priority" required>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div class="form-actions">
        <button type="submit" class="btn-primary">
          {{ ticket ? "Update" : "Create" }}
        </button>
        <button type="button" @click="onClose" class="btn-secondary">
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>
