import { createStore } from "vuex";

export default createStore({
  state: {
    usr: {},
    loaded: false,
    loading: false,
    loadingMessage: ""
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
