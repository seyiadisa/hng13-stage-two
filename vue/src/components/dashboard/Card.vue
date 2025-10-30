<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
});
</script>

<template>
  <li class="dashboard-card">
    <h2>{{ title }}</h2>
    <p>{{ amount }}</p>
  </li>
</template>
