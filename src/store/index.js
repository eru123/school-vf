import { createStore } from "vuex";

export default createStore({
  state: {
    usr: {},
    loaded: false,
    loading: false,
    loadingMessage: "",
    appGlobal: {
      name: "SchoolNatin",
      version: "1.0-alpha"
    }
  },
  mutations: {
    usr(state, value) {
      state.usr = value;
    },
    loading(state, value) {
      state.loading = Boolean(value);
    },
    loadingMessage(state, msg) {
      state.loadingMessage = String(msg);
    },
    loaded(state, value) {
      state.loaded = Boolean(value);
    }
  },
  actions: {},
  modules: {}
});
