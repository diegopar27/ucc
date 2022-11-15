<template>
  <v-container fluid class="fill-height">
    <v-row justify="center">
      <v-card shaped width="900">
        <v-footer color="primary">
          <h1 class="white--text">Medicina</h1>
        </v-footer>
        <v-row>
          <v-col cols="4">
            <v-text-field class="pt-4 pl-4" outlined dense v-model="search" label="Buscar" />
          </v-col>
          <v-col cols="8" class="text-end">
            <v-btn class="mt-4 mr-4" color="success" dark large @click="medicinaop.estado = true"> Crear medicina </v-btn>
          </v-col>
        </v-row>

        <template>
          <v-data-table :search="search" :headers="headers" :items="medicinas" item-key="id" :items-per-page="5" class="elevation-1">
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon small color="primary" class="mr-2" @click="verMedicina(item)"> mdi-book </v-icon>
              <v-icon small color="warning" class="mr-2" @click="editMedicina(item)"> mdi-pencil </v-icon>
            </template>
          </v-data-table>
        </template>
      </v-card>
    </v-row>
    <MEDICINA :medicina="medicina" v-if="medicina.estado"></MEDICINA>
    <MEDICINAOP :medicina="medicinaop" v-if="medicinaop.estado"></MEDICINAOP>
  </v-container>
</template>
<script>
import popapMedicina from "../components/medicinas/CardMedicinas.vue";
import OpcionMedicina from "../components/medicinas/OpcionMedicina.vue";
import { mapActions } from "vuex";

export default {
  components: {
    MEDICINA: popapMedicina,
    MEDICINAOP: OpcionMedicina,
  },
  data: () => ({
    search: "",
    headers: [
      {
        text: "Nombre",
        align: "center",
        sortable: false,
        value: "medication_name",
      },
      {
        text: "Formula",
        align: "center",
        sortable: false,
        value: "medication_formula",
      },
      {
        text: "Cantidad",
        align: "center",
        sortable: false,
        value: "amount",
      },

      { text: "Actions", value: "actions", sortable: false },
    ],
    medicina: {
      estado: false,
    },
    medicinaop: {
      estado: false,
    },
    medicinas: [],
  }),
  async mounted() {
    this.medicinas = await this._getMedicinas();
  },
  methods: {
    ...mapActions({
      _getMedicinas: "medicinas/_getMedicinas",
    }),
    editMedicina(item) {
      this.medicinaop.amount = item.amount;
      this.medicinaop.date_joined = item.date_joined;
      this.medicinaop.medication_formula = item.medication_formula;
      this.medicinaop.medication_name = item.medication_name;
      this.medicinaop.id = item.id;
      this.medicinaop.estado = true;
      this.medicinaop.editar = true;
    },
    verMedicina(item) {
      this.medicina.amount = item.amount;
      this.medicina.date_joined = item.date_joined;
      this.medicina.medication_formula = item.medication_formula;
      this.medicina.medication_name = item.medication_name;

      this.medicina.estado = true;
    },
  },
};
</script>
