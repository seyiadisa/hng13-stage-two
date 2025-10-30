<script setup lang="ts">
import { logout } from "@ticketapp/shared";
import { useRoute, useRouter } from "vue-router";

const pathname = useRoute().path;
const router = useRouter();

const handleLogout = () => {
  logout();
  router.go(0);
};
</script>

<template>
  <header class="dashboard-header">
    <div>
      <RouterLink to="/">
        <img src="/images/icon.webp" alt="Brand logo" class="brand-image" />
      </RouterLink>
      <h1>
        {{ pathname === "/dashboard" ? "Dashboard" : "Ticket Management" }}
      </h1>
    </div>

    <button aria-label="Logout" @click="handleLogout()">
      <span class="icon-logout"></span>
      <span class="text">Logout</span>
    </button>
  </header>
  <nav>
    <RouterLink to="/dashboard">Dashboard</RouterLink>
    <RouterLink to="/tickets">View Tickets</RouterLink>
  </nav>
</template>
