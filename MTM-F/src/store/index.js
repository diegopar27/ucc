import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import padrinos from "./modules/padrinos"; 
import usuario from "./modules/usuario"; 
import examenes from "./modules/examenes"; 
import medicinas from "./modules/medicinas"; 
import pacientes from "./modules/pacientes"; 
import tratamiento from "./modules/tratamiento"; 
import patologias from "./modules/patologias"; 
import familiares from "./modules/familiares"; 
export default new Vuex.Store({ 
  state: {}, 
  getters: {}, 
  mutations: {}, 
  actions: {}, 
  modules: { 
    usuario, 
    padrinos, 
    familiares, 
    examenes, 
    medicinas, 
    pacientes, 
    tratamiento, 
    patologias, }, 
  });