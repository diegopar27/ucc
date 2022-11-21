<template>
  <v-dialog v-model="opcion_padrino.estado">
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>Padrinos de {{ opcion_padrino.names }}</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="opcion_padrino.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
      </v-footer>
      <v-text-field class="pt-4 px-4" outlined dense v-model="search" label="Buscar" />
      <template>
        <v-data-table :search="search" :headers="headers" :items="padrinos" item-key="id" :items-per-page="5" class="elevation-1"> </v-data-table>
      </template>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapActions } from "vuex";

export default {
  props: {
    opcion_padrino: Object,
  },
  data: () => ({
    search: "",
    headers: [
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
        text: "Email",
        align: "center",
        sortable: false,
        value: "mail",
      },
      {
        text: "Genero",
        align: "center",
        sortable: false,
        value: "gender",
      },
      {
        text: "Teléfono",
        align: "center",
        sortable: false,
        value: "phone",
      },
      {
        text: "Dirección",
        align: "center",
        sortable: false,
        value: "direction",
      },
    ],
    padrinos: [],
  }),
  async mounted() {
    const id = this.opcion_padrino.id_paciente;
    let a = await this._getPadrinoXPaciente({ id });

    a.id_godfather.forEach(async (id, i) => {
      let res = await this._getPadrino({ id });
      this.padrinos.push(res);
    });
    console.log(a);
  },
  methods: {
    ...mapActions({
      _getPadrinoXPaciente: "padrinos/_getPadrinoXPaciente",
      _getPadrinos: "padrinos/_getPadrinos",
      _getPadrino: "padrinos/_getPadrino",
    }),
  },
};
</script>
