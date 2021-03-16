import { createStore } from "vuex";

export default createStore({
  state: {
    usr: {},
    loaded: false,
    loading: false,
    loadingMessage: "",
    appGlobal: {
      name: "School App",
      version: "1.0-alpha"
    }
  },
  mutations: {
    usr(state, value) {
      state.usr = value;
    },
    loading(state, value, msg = "") {
      state.loading = Boolean(value);
      state.loadingMessage = msg;
    },
    loaded(state, value) {
      state.loaded = Boolean(value);
    }
  },
  actions: {},
  modules: {}
});
