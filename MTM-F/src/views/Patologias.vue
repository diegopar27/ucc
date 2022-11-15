<template>
  <v-container fluid class="fill-height">
    <v-row justify="center">
      <v-card shaped width="900">
        <v-footer color="primary">
          <h1 class="white--text">Patologías</h1>
        </v-footer>
        <v-row>
          <v-col cols="4">
            <v-text-field class="pt-4 pl-4" outlined dense v-model="search" label="Buscar" />
          </v-col>
          <v-col cols="8" class="text-end">
            <v-btn class="mt-4 mr-4" color="success" dark large @click="patologiaop.estado = true"> Crear patología </v-btn>
          </v-col>
        </v-row>

        <template>
          <v-data-table :search="search" :headers="headers" :items="patologias" item-key="id" :items-per-page="5" class="elevation-1">
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon small color="primary" class="mr-2" @click="verPatologia(item)"> mdi-book </v-icon>
              <v-icon small color="warning" class="mr-2" @click="editPatologia(item)"> mdi-pencil </v-icon>
            </template>
          </v-data-table>
        </template>
      </v-card>
    </v-row>
    <PATOLOGIA :patologia="patologia" v-if="patologia.estado"></PATOLOGIA>
    <PATOLOGIAOP :patologia="patologiaop" v-if="patologiaop.estado"></PATOLOGIAOP>
  </v-container>
</template>
<script>
import popapPatologia from "../components/patologias/CardPatologias.vue";
import OpcionPatologia from "../components/patologias/OpcionPatologia.vue";
import { mapActions } from "vuex";

export default {
  components: {
    PATOLOGIA: popapPatologia,
    PATOLOGIAOP: OpcionPatologia,
  },
  data: () => ({
    search: "",
    headers: [
      {
        text: "Tipo de patologia",
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
        text: "Condoción",
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

      { text: "Actions", value: "actions", sortable: false },
    ],
    patologia: {
      estado: false,
    },
    patologiaop: {
      estado: false,
    },
    patologias: [],
  }),
  async mounted() {
    this.patologias = await this._getPatologias();
    console.log(this.patologias);
  },
  methods: {
    ...mapActions({
      _getPatologias: "patologias/_getPatologias",
    }),
    editPatologia(item) {
      this.patologiaop.pathology_type = item.pathology_type;
      this.patologiaop.name = item.name;
      this.patologiaop.time_pathology = item.time_pathology;
      this.patologiaop.condition = item.condition;
      this.patologiaop.cycle = item.cycle;
      this.patologiaop.id = item.id;

      this.patologiaop.estado = true;
      this.patologiaop.editar = true;
    },
    verPatologia(item) {
      this.patologia.tipo_patologia = item.pathology_type;
      this.patologia.nombre = item.name;
      this.patologia.tiempo = item.time_pathology;
      this.patologia.condicion = item.condition;
      this.patologia.ciclo = item.cycle;

      this.patologia.estado = true;
    },
  },
};
</script>
