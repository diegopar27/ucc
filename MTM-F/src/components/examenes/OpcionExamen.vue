<template>
  <v-dialog v-model="examen.estado" max-width="900" persistent>
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>Examen</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="examen.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
      </v-footer>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row justify="center" class="mt-4">
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                v-model="state_exam"
                dense
                :rules="rules"
                label="Estado examen"
                color="primary"
                id="state_exam"
                type="text"
                required
                outlined
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                v-model="history_exam"
                dense
                :rules="rules"
                label="Historia examen"
                color="primary"
                id="history_exam"
                type="text"
                required
                outlined
              />
            </v-col>

            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                v-model="reading_test"
                dense
                :rules="rules"
                label="Lectura examen"
                color="primary"
                id="condition"
                type="text"
                required
                outlined
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                v-model="exam_date"
                dense
                :rules="rules"
                label="Fecha examen"
                color="primary"
                id="exam_date"
                type="date"
                required
                outlined
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                v-model="number_of_exams"
                dense
                :rules="rules"
                label="Numero examenes"
                color="primary"
                id="number_of_exams"
                type="text"
                required
                outlined
              />
            </v-col>
          </v-row>
        </v-form>
      </v-container>
      <v-divider class="mx-2 mt-2"></v-divider>
      <v-footer color="white" class="white--text py-3">
        <v-spacer></v-spacer>
        <v-btn class="mx-auto" color="primary" @click="examen.estado = false"> Cancelar </v-btn>
        <v-btn class="mx-auto ml-2" :disabled="!valid" color="success" @click="crearExamen()"> Registrar </v-btn>
      </v-footer>
    </v-card>
    <v-snackbar v-model="snackbar.estado" :color="snackbar.color" :timeout="1500" bottom left>
      {{ snackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn icon dark text @click="snackbar.estado = false" v-bind="attrs">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    examen: Object,
    examen_pro: Object, 
  },
  data() {
    return {
      valid: true,
      snackbar: {
        estado: false,
      },

      state_exam: "",
      history_exam: "",
      reading_test: "",
      exam_date: "",
      number_of_exams: "",

      id: "",
      rules: [(v) => !!v || "Este campo es requerido"],
    };
  },
  mounted() {
    if (this.examen.editar) {
      this.state_exam = this.examen.state_exam;
      this.history_exam = this.examen.history_exam;
      this.reading_test = this.examen.reading_test;
      this.exam_date = this.examen.exam_date;
      this.number_of_exams = this.examen.number_of_exams;
      this.id = this.examen.id;
    }
    console.log("dddd", this.examen_pro.id_paciente)
  },
  destroyed() {
    this.examen.editar = false;
  },
  methods: {
    ...mapActions({
      _addExamen: "examenes/_addExamen",
      _putExamen: "examenes/_putExamen",
      _getPatologiaXPaciente: "patologias/_getPatologiaXPaciente",
    }),
    msj(text, color) {
      this.snackbar.estado = true;
      this.snackbar.text = text;
      this.snackbar.color = color ? `${color} darken-2` : "red darken-3";
    },
    async editarExamen() {
      const data = {
        state_exam: this.state_exam,
        history_exam: this.history_exam,
        reading_test: this.reading_test,
        exam_date: this.exam_date,
        number_of_exams: this.number_of_exams,
      };
      const id = this.id;

      if (this.$refs.form.validate()) {
        await this._putExamen({ id, data });
        this.$refs.form.reset();
        this.msj("Examen editado", "green");
        setTimeout(() => {
          this.examen.estado = false;
        }, 1000);
      } else this.msj("Ocurrio un problema", "red");
    },
    async crearExamen() {
      if (this.examen.editar) return this.editarExamen();
      const data = {
        idpatient_x_pathology: this.id_paciente,
        state_exam: this.state_exam,
        history_exam: this.history_exam,
        reading_test: this.reading_test,
        exam_date: this.exam_date,
        number_of_exams: this.number_of_exams,
      };
      if (this.$refs.form.validate()) {
        await this._addExamen({ data });
        this.$refs.form.reset();
        this.msj("Examen registrado", "green");
        setTimeout(() => {
          this.examen.estado = false;
        }, 1000);
      } else this.msj("Ocurrio un problema", "red");
    },
  },
};
</script>

<style></style>
