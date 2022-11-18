<template>
  <nav>
    <v-app-bar color="primary" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="">Fundación mujeres trabajando por el meta</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon left>mdi-reorder-horizontal</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list flat>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route" active-class="border">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text @click="salir()">
        <span>Salir</span>
        <v-icon right>mdi-exit-run</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" dark app class="primary">
      <v-list flat>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route" active-class="border">
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data: () => ({
    drawer: true,
    links: [
      { text: "Inicio", route: "/dashboard" },
      { text: "Pacientes", route: "/paciente" },
      { text: "Examenes", route: "/examenes" },
      { text: "Medicinas", route: "/medicinas" },
      { text: "Patologias", route: "/patologias" },
      { text: "Padrinos", route: "/padrinos" },
      { text: "tratamientos", route: "/tratamientos" },
    ],
  }),
  methods: {
    salir() {
      this.$router.push("/Login");
    },
  },
  components: {},
};
</script>
<style scoped>
.border {
  border-left: 4px solid #0ba518;
}
</style>
