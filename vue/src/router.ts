import { isAuthenticated } from "@ticketapp/shared";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  linkActiveClass: "active",
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./views/Home.vue"),
    },
    {
      path: "/auth/login",
      name: "login",
      component: () => import("./views/Login.vue"),
    },
    {
      path: "/auth/signup",
      component: () => import("./views/Signup.vue"),
    },
    {
      path: "/dashboard",
      component: () => import("./layout/DashboardLayout.vue"),
      children: [
        {
          path: "",
          component: () => import("./views/Dashboard.vue"),
          beforeEnter: (_, __) => {
            if (!isAuthenticated()) return { name: "login" };

            return true;
          },
        },
      ],
    },
    {
      path: "/tickets",
      component: () => import("./layout/DashboardLayout.vue"),
      children: [
        {
          path: "",
          component: () => import("./views/Tickets.vue"),
          beforeEnter: (_, __) => {
            if (!isAuthenticated()) return { name: "login" };

            return true;
          },
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});

export default router;
