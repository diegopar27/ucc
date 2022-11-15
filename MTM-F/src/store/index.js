import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import padrinos from "./modules/padrinos";
import usuario from "./modules/usuario";

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    usuario,
    padrinos,
  },
});
