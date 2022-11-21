import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirec: "/",
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: function () {
      return import("../views/Dashboard.vue");
    },
  },
  {
    path: "/Login",
    name: "login",
    component: function () {
      return import("../views/Login.vue");
    },
  },

  {
    path: "/paciente",
    name: "paciente",
    component: function () {
      return import("../views/Pacientes.vue");
    },
  },
  {
    path: "/medicinas",
    name: "medicinas",
    component: function () {
      return import("../views/Medicinas.vue");
    },
  },
  {
    path: "/padrinos",
    name: "padrinos",
    component: function () {
      return import("../views/Padrinos.vue");
    },
  },
  {
    path: "/patologias",
    name: "patologias",
    component: function () {
      return import("../views/Patologias.vue");
    },
  },

  {
    path: "/familiares",
    name: "familiares",
    component: function () {
      return import("../views/Familiares.vue");
    },
  },

  {
    path: "/eps",
    name: "eps",
    component: function () {
      return import("../views/Eps.vue");
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
