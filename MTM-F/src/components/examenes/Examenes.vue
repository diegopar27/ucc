<template>
  <v-dialog v-model="examen_pro.estado" max-width="800" persistent >
    <v-card shaped>
      <v-footer color="primary" class="white--text">
        <h1>Examenes {{ examen_pro.name }}</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="examen_pro.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
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
              <v-data-table :search="search" :headers="headers" :items="examenes_paci" item-key="id" :items-per-page="5" class="elevation-1">
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
    examenes_paci: [],
  }),
  async mounted() {
    console.log("rrr", this.examen_pro.id_paciente);
    // this.examenes_paci = await this._getExamen(this.examen_pro.id_paciente);
    // id_patient
    // this.examenes_paci = await this._getPatologiaXPaciente(this.examen_pro.id_paciente);
    console.log("sss", this.examenes_paci);

    const id_patient = this.examen_pro.id_paciente;
    let a = await this._getPatologiaXPaciente({id_patient});
    console.log("patologiaxpaciente", a);
  },
  methods: {
    ...mapActions({
      _getPatologiaXPaciente: "patologias/_getPatologiaXPaciente",
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
