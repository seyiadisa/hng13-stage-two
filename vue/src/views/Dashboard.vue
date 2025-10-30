<script setup lang="ts">
import { onMounted, ref } from "vue";
import Card from "../components/dashboard/Card.vue";
import { getDashboardStats } from "@ticketapp/shared";

const stats = ref({});

onMounted(() => {
  async function getStats() {
    stats.value = await getDashboardStats();
  }

  getStats();
});
</script>

<template>
  <div class="dashboard-body">
    <p>Welcome back, Admin!</p>

    <section>
      <ul class="dashboard-cards">
        <Card
          :key="index"
          v-for="([title, amount], index) in Object.entries(stats)"
          :title="(title as string).split('_').join(' ')"
          :amount="(amount as number)"
        />
      </ul>
    </section>
  </div>
</template>
