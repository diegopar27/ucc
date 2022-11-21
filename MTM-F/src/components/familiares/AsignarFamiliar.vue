<template>
  <v-dialog v-model="asignar_familiar.estado" max-width="900" persistent>
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>Asginar familiar a {{ asignar_familiar.names }}</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="asignar_familiar.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
      </v-footer>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row justify="center" class="mt-4">
            <v-col cols="3">
              <v-autocomplete
                :items="items_familiares"
                label="Asinar familiar"
                v-model="id_family"
                item-value="id"
                item-text="names"
                color="primary"
                id="suernames"
                type="text"
                outlined
                dense
              />
            </v-col>
            <v-col cols="3">
              <v-text-field outlined dense v-model="relationship" label="Relación con paciente" />
            </v-col>
            <v-col cols="3">
              <v-text-field outlined dense v-model="family_nucleus" label="Nucleo" />
            </v-col>
            <v-col cols="3">
              <v-checkbox outlined dense v-model="carer" label="Buscar" />
            </v-col>
          </v-row>
        </v-form>
      </v-container>
      <v-divider class="mx-2 mt-2"></v-divider>
      <v-footer color="white" class="white--text py-3">
        <v-spacer></v-spacer>
        <v-btn class="mx-auto" color="primary" @click="asignar_familiar.estado = false"> Cancelar </v-btn>
        <v-btn class="mx-auto ml-2" :disabled="!valid" color="success" @click="crearPacienteXFamilia()"> Registrar </v-btn>
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
    asignar_familiar: Object,
  },
  data() {
    return {
      valid: true,
      snackbar: {
        estado: false,
      },

      id: "",
      relationship: "",
      family_nucleus: "",
      id_family: "",
      carer: false,
      id_patient: "",
      items_familiares: [],
      rules: [(v) => !!v || "Este campo es requerido"],
      fecha_hoy: "",
    };
  },
  watch: {
    birth_date() {
      let hoy = this.fecha_hoy.slice(6);
      let edad = this.fecha_hoy.slice(6) - this.birth_date.slice(0, 4);
      let mes = Number(this.fecha_hoy.slice(3, 5)) - Number(this.birth_date.slice(3, 5));

      if (mes < 0 || (mes === 0 && Number(this.fecha_hoy.slice(0, 2)) < Number(this.birth_date.slice(8)))) {
        edad--;
      }
      this.age = edad;
    },
  },

  async mounted() {
    let fecha_actual = moment().locale("es");
    this.fecha_hoy = fecha_actual.format("DD-MM-YYYY");

    this.items_familiares = await this._getFamiliares();
  },

  methods: {
    ...mapActions({
      _addPacientexFamily: "pacientes/_addPacientexFamily",
      _getFamiliares: "familiares/_getFamiliares",
    }),
    msj(text, color) {
      this.snackbar.estado = true;
      this.snackbar.text = text;
      this.snackbar.color = color ? `${color} darken-2` : "red darken-3";
    },

    async crearPacienteXFamilia() {
      const data = {
        id_family: this.id_family,
        relationship: this.relationship,
        family_nucleus: this.family_nucleus,
        carer: this.carer,
        id_patient: this.asignar_familiar.id,
      };
      if (this.$refs.form.validate()) {
        await this._addPacientexFamily({ data });
        this.$refs.form.reset();
        this.msj("Familiar no asignado", "green");
        setTimeout(() => {
          this.asignar_familiar.estado = false;
        }, 1000);
      } else this.msj("Ocurrio un problema", "red");
    },
  },
};
</script>

<style></style>
