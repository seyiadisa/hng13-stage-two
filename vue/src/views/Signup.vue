<script setup lang="ts">
import { handleSignup, validateSignupInput } from "@ticketapp/shared";
import { useRouter } from "vue-router";

const router = useRouter();

const onSubmit = async (e: SubmitEvent) => {
  const status = await handleSignup(e);

  if (status?.success) {
    router.push("/dashboard");
  }
};
</script>

<template>
  <main>
    <section class="form-section">
      <div>
        <h1>Sign up</h1>
        <p>Join Kanbanize and start managing tickets</p>

        <form
          @submit="onSubmit($event)"
          @input="validateSignupInput($event)"
          @blur="validateSignupInput($event)"
        >
          <div class="form-field">
            <label htmlFor="name">Full Name</label>
            <input id="name" name="name" required placeholder="John Doe" />
            <span class="error error-name"></span>
          </div>
          <div class="form-field">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="example@email.com"
            />
            <span class="error error-email"></span>
          </div>
          <div class="form-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="••••••••"
            />
            <span class="error error-password"></span>
          </div>
          <div class="form-field">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              placeholder="••••••••"
            />
            <span class="error error-confirmPassword"></span>
          </div>

          <button type="submit">Create Account</button>

          <div class="or-text">
            <span>or</span>
          </div>

          <p>
            Already have an account?
            <RouterLink to="/auth/login">Sign In</RouterLink>
          </p>
        </form>
      </div>
    </section>
  </main>
</template>
