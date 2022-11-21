<template>
  <v-dialog v-model="examen_pro.estado">
    <v-card shaped>
      <v-footer color="primary">
        <h1 class="white--text">Examenes {{ examen_pro.name }}</h1>
      </v-footer>
      <v-container fluid class="fill-height">
        <v-row justify="center">
          <v-col cols="12">
            <v-row>
              <v-col cols="4">
                <v-text-field class="pt-4 pl-4" outlined dense v-model="search" label="Buscar" />
              </v-col>
              <v-col cols="8" class="text-end">
                <v-btn class="mt-4 mr-4" color="success" dark large @click="examenop.estado = true"> Crear examen </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <template>
              <v-data-table :search="search" :headers="headers" :items="examenes" item-key="id" :items-per-page="5" class="elevation-1">
                <template v-slot:[`item.actions`]="{ item }">
                  <v-icon small color="primary" class="mr-2" @click="verExamen(item)"> mdi-book </v-icon>
                  <v-icon small color="warning" class="mr-2" @click="editExamen(item)"> mdi-pencil </v-icon>
                </template>
              </v-data-table>
            </template>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <EXAMEN :examen="examen" v-if="examen.estado"></EXAMEN>
    <EXAMENOP :examen="examenop" v-if="examenop.estado"></EXAMENOP>
  </v-dialog>
</template>
<script>
import OpcionExamen from "../examenes/OpcionExamen.vue";
import popapExamen from "../examenes/CardExamenes.vue";
import { mapActions } from "vuex";

export default {
  components: {
    EXAMEN: popapExamen,
    EXAMENOP: OpcionExamen,
  },
  props: {
    examen_pro: Object,
  },
  data: () => ({
    search: "",
    headers: [
      {
        text: "Estado examen",
        align: "center",
        sortable: false,
        value: "state_exam",
      },
      {
        text: "Historia examen",
        align: "center",
        sortable: false,
        value: "history_exam",
      },
      {
        text: "Lectura examen",
        align: "center",
        sortable: false,
        value: "reading_test",
      },
      {
        text: "Fecha examen",
        align: "center",
        sortable: false,
        value: "exam_date",
      },
      {
        text: "Numero examenes",
        align: "center",
        sortable: false,
        value: "number_of_exams",
      },

      { text: "Actions", value: "actions", sortable: false },
    ],
    examen: {
      estado: false,
    },
    examenop: {
      estado: false,
    },
    examenes: [],
  }),
  async mounted() {
    this.examenes = await this._getExamenes();
    console.log(this.examenes);
  },
  methods: {
    ...mapActions({
      _getExamenes: "examenes/_getExamenes",
    }),
    editExamen(item) {
      this.examenop.state_exam = item.state_exam;
      this.examenop.history_exam = item.history_exam;
      this.examenop.reading_test = item.reading_test;
      this.examenop.exam_date = item.exam_date;
      this.examenop.number_of_exams = item.number_of_exams;
      this.examenop.id = item.id;

      this.examenop.estado = true;
      this.examenop.editar = true;
    },
    verExamen(item) {
      this.examen.estado_examen = item.state_exam;
      this.examen.historia_examen = item.history_exam;
      this.examen.lectura_examen = item.reading_test;
      this.examen.fecha_examen = item.exam_date;
      this.examen.numbero_examen = item.number_of_exams;

      this.examen.estado = true;
    },
  },
};
</script>
