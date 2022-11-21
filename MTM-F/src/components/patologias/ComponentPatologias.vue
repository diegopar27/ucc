<template>
  <v-dialog v-model="opcion_patologia.estado" max-width="800" persistent>
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>Patologia de {{ opcion_patologia.name }}</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="opcion_patologia.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
      </v-footer>
      <v-text-field class="pt-4 px-4" outlined dense v-model="search" label="Buscar" />
      <template>
        <v-data-table :search="search" :headers="headers" :items="patolgias" item-key="id" :items-per-page="5" class="elevation-1"> </v-data-table>
      </template>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapActions } from "vuex";

export default {
  props: {
    opcion_patologia: Object,
  },
  data: () => ({
    search: "",
    headers: [
      {
        text: "Tipo patologia",
        align: "center",
        sortable: false,
        value: "pathology_type",
      },
      {
        text: "Nombre",
        align: "center",
        sortable: false,
        value: "name",
      },
      {
        text: "Tiempo",
        align: "center",
        sortable: false,
        value: "time_pathology",
      },
      {
        text: "Condición",
        align: "center",
        sortable: false,
        value: "condition",
      },
      {
        text: "Ciclo",
        align: "center",
        sortable: false,
        value: "cycle",
      },
    ],
    patolgias: [],
  }),
  async mounted() {
    const id_patient = this.opcion_patologia.id_patient;
    console.log(id_patient);
    let a = await this._getPatologiaXPaciente({ id_patient });
    console.log(a, "xxxx");
    a.id_pathology.forEach(async (id) => {
      this.patolgias.push(await this._getPatologia({ id }));
    });
    const id = this.id_patient;

    // a.id_pathology.forEach(async (id, i) => {
    //   let res = await this._getPatologia({ id });
    //   this.patolgias.push(res);
    // });
    console.log(a);
  },
  methods: {
    ...mapActions({
      _getPatologiaXPaciente: "patologias/_getPatologiaXPaciente",
      _getPatologia: "patologias/_getPatologia",
    }),
  },
};
</script>
