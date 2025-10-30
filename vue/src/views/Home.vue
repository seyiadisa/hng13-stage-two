<script setup lang="ts">
import AppHeader from "../components/layouts/AppHeader.vue";
</script>

<template>
  <AppHeader />

  <section class="hero">
    <h1>Manage Tickets the <span class="higlight">Smarter Way</span></h1>
    <p>
      Kanbanize streamlines your ticket management workflow. Organize,
      prioritize, and resolve issues faster with our intuitive platform.
    </p>

    <div class="cta">
      <RouterLink to="/auth/login" class="login"> Login </RouterLink>
      <RouterLink to="/auth/signup" class="signup"> Get Started </RouterLink>
    </div>

    <div class="wavy"></div>
    <div class="circle1"></div>
    <div class="circle2"></div>
  </section>

  <section class="features">
    <h1>Powerful Features for Your Team</h1>
    <p>
      Everything you need to manage tickets efficiently and keep your team
      aligned.
    </p>

    <ul class="landing-cards">
      <li class="landing-card">
        <h2>Easy tracking</h2>
        <p>Track ticket status from creation to resolution</p>
      </li>
      <li class="landing-card">
        <h2>Analytics</h2>
        <p>Get insights into your team's performance</p>
      </li>
      <li class="landing-card">
        <h2>Collaboration</h2>
        <p>Work together seamlessly with your team</p>
      </li>
      <li class="landing-card">
        <h2>Fast & Reliable</h2>
        <p>Lightning-quick performance you can count on</p>
      </li>
    </ul>
  </section>

  <section class="cta">
    <h1>Ready to streamline your workflow?</h1>
    <p>Join teams worldwide who are managing tickets smarter with Kanbanize.</p>
    <RouterLink to="/auth/signup">Start free today</RouterLink>
  </section>
</template>
