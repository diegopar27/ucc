<template>
  <v-dialog v-model="asignar_padrino.estado" max-width="900" persistent>
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>Asginar padrino a {{ asignar_padrino.names }}</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="asignar_padrino.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
      </v-footer>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row justify="center" class="mt-4">
            <v-col cols="3" class="my-0 py-1">
              <v-autocomplete
                :items="items_padrinos"
                v-model="id_godfather"
                label="Asinar padrino"
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
          </v-row>
        </v-form>
      </v-container>
      <v-divider class="mx-2 mt-2"></v-divider>
      <v-footer color="white" class="white--text py-3">
        <v-spacer></v-spacer>
        <v-btn class="mx-auto" color="primary" @click="asignar_padrino.estado = false"> Cancelar </v-btn>
        <v-btn class="mx-auto ml-2" :disabled="!valid" color="success" @click="crearPacienteXPadrino()"> Registrar </v-btn>
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
    asignar_padrino: Object,
  },
  data() {
    return {
      valid: true,
      snackbar: {
        estado: false,
      },

      id: "",
      id_godfather: "",

      items_padrinos: [],

      items: [{ text: "Femenino" }, { text: "Masculino" }, { text: "Otro" }],

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

    this.items_padrinos = await this._getPadrinos();
  },

  methods: {
    ...mapActions({
      _addPadrinoXPaciente: "padrinos/_addPadrinoXPaciente",
      _getPadrinos: "padrinos/_getPadrinos",
    }),
    msj(text, color) {
      this.snackbar.estado = true;
      this.snackbar.text = text;
      this.snackbar.color = color ? `${color} darken-2` : "red darken-3";
    },

    async crearPacienteXPadrino() {
      const data = {
        id_godfather: this.id_godfather,
        id_patient: this.asignar_padrino.id,
      };
      if (this.$refs.form.validate()) {
        await this._addPadrinoXPaciente({ data });
        this.$refs.form.reset();
        this.msj("Padrino no asignado", "green");
        setTimeout(() => {
          this.asignar_padrino.estado = false;
        }, 1000);
      } else this.msj("Ocurrio un problema", "red");
    },
  },
};
</script>

<style></style>
