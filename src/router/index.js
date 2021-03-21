import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Auth",
    component: () => import("@/views/Auth.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("@/views/Logout.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("@/views/Settings.vue")
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("@/views/Account.vue")
  },
  {
    path: "/verify_email",
    name: "VerifyEmail",
    component: () => import("@/views/VerifyEmail.vue")
  },
  {
    path: "/error/500",
    name: "InternalError",
    component: () => import("@/views/InternalError.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
