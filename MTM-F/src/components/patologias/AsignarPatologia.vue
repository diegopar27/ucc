<template>
  <v-dialog v-model="asignar_patologia.estado" max-width="900" persistent>
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>Asginar patologia a {{ asignar_patologia.names }}</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="asignar_patologia.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
      </v-footer>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row justify="center" class="mt-4">
            <v-col cols="3" class="my-0 py-1">
              <v-autocomplete
                :items="items_patologias"
                v-model="id_pathology"
                label="Asignar patologia"
                item-value="id"
                item-text="name"
                color="primary"
                id="suernames"
                type="text"
                multiple
                outlined
                dense
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-autocomplete
                :items="items_medicamentos"
                v-model="id_medicine"
                label="Medicamento"
                item-value="id"
                item-text="medication_name"
                color="primary"
                id="suernames"
                type="text"
                outlined
                dense
              />
            </v-col>
          </v-row>
        </v-form>
      </v-container>
      <v-divider class="mx-2 mt-2"></v-divider>
      <v-footer color="white" class="white--text py-3">
        <v-spacer></v-spacer>
        <v-btn class="mx-auto" color="primary" @click="asignar_padrino.estado = false"> Cancelar </v-btn>
        <v-btn class="mx-auto ml-2" :disabled="!valid" color="success" @click="crearPatologiaXPaciente()"> Registrar </v-btn>
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
import moment from "moment";

export default {
  props: {
    asignar_patologia: Object,
  },
  data() {
    return {
      valid: true,
      snackbar: {
        estado: false,
      },

      id: "",
      id_godfather: "",

      items_patologias: [],
      items_medicamentos: [],

      items: [{ text: "Femenino" }, { text: "Masculino" }, { text: "Otro" }],

      rules: [(v) => !!v || "Este campo es requerido"],
      fecha_hoy: "",
    };
  },


  async mounted() {
    let fecha_actual = moment().locale("es");
    this.fecha_hoy = fecha_actual.format("DD-MM-YYYY");

    this.items_patologias = await this._getPatologias();
    this.items_medicamentos = await this._getMedicinas();
    console.log("pat", this.items_patologias);
    console.log("pat", this.items_medicamentos);
  },

  methods: {
    ...mapActions({
      _addPatologiaXPaciente: "patologias/_addPatologiaXPaciente",
      _getPatologias: "patologias/_getPatologias",
      _getMedicinas: "medicinas/_getMedicinas",
    }),
    msj(text, color) {
      this.snackbar.estado = true;
      this.snackbar.text = text;
      this.snackbar.color = color ? `${color} darken-2` : "red darken-3";
    },

    async crearPatologiaXPaciente() {
      const data = {
        id_patient: this.asignar_patologia.id,
        id_pathology: this.id_pathology,
        id_medicine: this.id_medicine,
        date: moment().format("YYYY-MM-DD")


      };
      if (this.$refs.form.validate()) {
        await this._addPatologiaXPaciente({ data });
        this.$refs.form.reset();
        this.msj("Patologia no asignado", "green");
        setTimeout(() => {
          this.asignar_patologia.estado = false;
        }, 1000);
      } else this.msj("Ocurrio un problema", "red");
    },
  },
};
</script>

<style></style>
