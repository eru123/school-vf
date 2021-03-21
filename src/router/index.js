import { createRouter, createWebHashHistory } from "vue-router";


import Auth from "@/views/Auth.vue"
import Home from "@/views/Home.vue"
import Logout from "@/views/Logout.vue"
import Settings from "@/views/Settings.vue"
import Account from "@/views/Account.vue"
import VerifyEmail from "@/views/VerifyEmail.vue"
import InternalErrorPage from "@/views/InternalError.vue"

const routes = [
  {
    path: "/",
    name: "Auth",
    component: Auth
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings
  },
  {
    path: "/account",
    name: "Account",
    component: Account
  },
  {
    path: "/verify_email",
    name: "VerifyEmail",
    component: VerifyEmail
  },
  {
    path: "/error/500",
    name: "InternalError",
    component: InternalErrorPage
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
