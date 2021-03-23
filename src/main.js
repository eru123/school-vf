import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "@/firebase";

import "@firebase/auth";
import "@firebase/firestore";
import "@firebase/database";

if (process.env.NODE_ENV == "development" && location.hostname == "localhost") {
  console.log("ok from localhost");
  var auth = firebase.auth();
  var db = firebase.database();
  var fs = firebase.firestore();

  auth.useEmulator("http://localhost:9099");
  db.useEmulator("localhost", 9000);
  fs.useEmulator("localhost", 8080);
}

import mdi from "@/directives/mdi";
import GIcon from "@/components/GIcon.vue";
import Header from "@/components/Header.vue";
import AuthHeader from "@/components/AuthenticatedHeader.vue";

const vx = {
  created() {},
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
    },
    GlobalButtonHome() {
      this.$router.push({ name: "Home" });
    },
    GlobalButtonLogout() {
      if (confirm("Are you sure you want to Logout?")) {
        this.$router.push({ name: "Logout" });
      }
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
  .component("Header", Header)
  .component("AuthHeader", AuthHeader)
  .mount("#app");
