<template>
  <v-row>
    <v-col cols="12">
      <h1>Padrinos</h1>
    </v-col>
    <v-col cols="12">
      <v-btn color="success" @click="paciente.estado = true" dark large> Registrar padrino </v-btn>
    </v-col>
    <v-col cols="4" class="pr-10"> </v-col>
    <v-col cols="12" class="pr-10">
      <v-card class="mb-2">
        <v-col cols="4">
          <v-text-field width="30" dense v-model="search" outlined label="Consultar" class="purple-input" />
        </v-col>
        <v-data-table :search="search" :headers="headers" :items="padrinos" item-key="id" :items-per-page="5" class="elevation-1"></v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapActions } from "vuex";

export default {
  components: {},
  data: () => ({
    search: "",
    headers: [
      {
        text: "ID",
        align: "center",
        sortable: false,
        value: "id",
      },
      {
        text: "Nombre",
        align: "center",
        sortable: false,
        value: "name",
      },
      {
        text: "Apellido",
        align: "center",
        sortable: false,
        value: "surname",
      },
      {
        text: "Numero celular",
        align: "center",
        sortable: false,
        value: "phone",
      },

      {
        text: "Genero",
        align: "center",
        sortable: false,
        value: "gender",
      },

      {
        text: "Correo",
        align: "center",
        sortable: false,
        value: "mail",
      },
    ],
    paciente: {
      estado: false,
    },
    padrinos: [],
  }),
  async mounted() {
    this.padrinos = await this._getPadrinos();

    console.log("array padrinos", this.padrinos);
    // this.getServicios();
  },
  methods: {
    ...mapActions({
      getPacientes: "pacientes_api/getPacientes",
      getPaciente: "paciente/getPaciente",
      _getPadrinos: "padrinos/_getPadrinos",
    }),
    async obtenerPaciente() {
      const id = this.search;
      // let res = await this.getPaciente({ id });
    },
  },
};
</script>
<style scoped>
.border {
  border-left: 4px solid #0ba518;
}
</style>
