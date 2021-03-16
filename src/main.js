import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "@/firebase";

import mdi from "@/directives/mdi";
import GIcon from "@/components/GIcon.vue";

const vx = {
  methods: {
    reusr() {
      if (firebase.auth().currentUser) {
        firebase.auth().currentUser.reload();
        this.$store.commit("usr", firebase.auth().currentUser);
        return this.$store.state.usr;
      }
    },
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  },
  computed: {
    loaded() {
      return this.$store.state.loaded;
    },
    usr() {
      if (this.$store.state.usr) {
        if (Object.keys(this.$store.state.usr).length === 0) {
          return false;
        } else return this.$store.state.usr;
      } else return false;
    },
    loading() {
      return this.$store.state.loading;
    },
    loadingMessage() {
      return this.$store.state.loadingMessage;
    },
    appGlobal() {
      return this.$store.state.appGlobal;
    }
  }
};

createApp(App)
  .use(store)
  .use(router)
  .mixin(vx)
  .directive("mdi", mdi)
  .directive("icon", mdi)
  .component("Icon", GIcon)
  .mount("#app");
