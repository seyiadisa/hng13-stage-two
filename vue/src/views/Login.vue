<script setup lang="ts">
import { handleLogin, validateLoginInput } from "@ticketapp/shared";
import { useRouter } from "vue-router";

const router = useRouter();

const onSubmit = async (e: SubmitEvent) => {
  const status = await handleLogin(e);

  if (status?.success) {
    router.push("/dashboard");
  }
};
</script>

<template>
  <main>
    <section class="form-section">
      <div>
        <h1>Welcome Back</h1>
        <p>Sign in to your Kanbanize account</p>

        <form
          @submit="onSubmit($event)"
          @input="validateLoginInput($event)"
          @blur="validateLoginInput($event)"
        >
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
              minLength="{8}"
              placeholder="••••••••"
            />
            <span class="error error-password"></span>
          </div>

          <button type="submit">Sign In</button>

          <div class="or-text">
            <span>or</span>
          </div>

          <p>
            Don't have an account?
            <RouterLink to="/auth/signup">Sign Up</RouterLink>
          </p>
        </form>
      </div>
    </section>
  </main>
</template>
