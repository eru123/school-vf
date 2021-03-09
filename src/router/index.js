import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Auth",
    component: () => import("@/views/Auth.vue")
  },
  {
    path: "/about",
    name: "Home",
    component: function () {
      return import("../views/About.vue");
    }
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => (import("@/views/Logout.vue"))
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
