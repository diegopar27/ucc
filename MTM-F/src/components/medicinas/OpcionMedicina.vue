<template>
  <v-dialog v-model="medicina.estado" max-width="900">
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>Medicina {{ medicina.nombre }}</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="medicina.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
      </v-footer>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row justify="center" class="mt-4">
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                v-model="medication_name"
                dense
                :rules="rules"
                label="Nombres medicina"
                color="primary"
                id="medication_name"
                type="text"
                required
                outlined
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                v-model="medication_formula"
                dense
                :rules="rules"
                label="Formula"
                color="primary"
                id="medication_formula"
                type="text"
                required
                outlined
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                v-model="amount"
                dense
                :rules="rules"
                label="Cantidad"
                color="primary"
                id="medication_formula"
                type="number"
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
        <v-btn class="mx-auto" color="primary" @click="medicina.estado = false"> Cancelar </v-btn>
        <v-btn class="mx-auto ml-2" :disabled="!valid" color="success" @click="crearMedicina()"> Registrar </v-btn>
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
    medicina: Object,
  },
  data() {
    return {
      valid: true,
      snackbar: {
        estado: false,
      },

      medication_name: "",
      medication_formula: "",
      amount: "",
      id: "",
      rules: [(v) => !!v || "Este campo es requerido"],

    };
  },
  mounted() {
    if (this.medicina.editar) {
      this.medication_name = this.medicina.medication_name;
      this.medication_formula = this.medicina.medication_formula;
      this.amount = this.medicina.amount;
      this.id = this.medicina.id;
    }
  },
  destroyed() {
    this.medicina.editar = false;
  },
  methods: {
    ...mapActions({
      _addMedicina: "medicinas/_addMedicina",
      _putMedicina: "medicinas/_putMedicina",
    }),
    msj(text, color) {
      this.snackbar.estado = true;
      this.snackbar.text = text;
      this.snackbar.color = color ? `${color} darken-2` : "red darken-3";
    },
    async editarPaciente() {
      const data = {
        medication_name: this.medication_name,
        medication_formula: this.medication_formula,
        amount: this.amount,
      };
      const id = this.id;
      console.log(id)

      if (this.$refs.form.validate()) {
        await this._putMedicina({ id, data });
        this.$refs.form.reset();
        this.msj("Medicina editado", "green");
        setTimeout(() => {
          this.medicina.estado = false;
        }, 1000);
      } else this.msj("Ocurrio un problema", "red");
    },
    async crearMedicina() {
      if (this.medicina.editar) return this.editarPaciente();
      const data = {
        medication_name: this.medication_name,
        medication_formula: this.medication_formula,
        amount: this.amount,
      };
      if (this.$refs.form.validate()) {
        await this._addMedicina({ data });
        this.$refs.form.reset();
        this.msj("Medicina registrado", "green");
        setTimeout(() => {
          this.medicina.estado = false;
        }, 1000);
      } else this.msj("Ocurrio un problema", "red");
    },
  },
};
</script>

<style></style>
