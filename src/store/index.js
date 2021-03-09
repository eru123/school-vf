import { createStore } from "vuex";

export default createStore({
  state: {
    usr: {}
  },
  mutations: {
    usr(state, value) {
      state.usr = value;
    }
  },
  actions: {},
  modules: {}
});
