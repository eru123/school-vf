import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Auth",
    component: () => (import('@/views/Auth.vue'))
  },
  {
    path: "/about",
    name: "About",
    component: function () {
      return import("../views/About.vue");
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
