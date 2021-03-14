import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const vx = {
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
    }
  }
};

createApp(App)
  .use(store)
  .use(router)
  .mixin(vx)
  .mount("#app");
