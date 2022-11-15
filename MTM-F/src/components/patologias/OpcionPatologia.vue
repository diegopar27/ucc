<template>
  <v-dialog v-model="patologia.estado" max-width="900">
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>patologia</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="patologia.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
      </v-footer>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row justify="center" class="mt-4">
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                v-model="pathology_type"
                dense
                :rules="rules"
                label="Tipo patología"
                color="primary"
                id="pathology_type"
                type="text"
                required
                outlined
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field v-model="name" dense :rules="rules" label="Nombre" color="primary" id="name" type="text" required outlined />
            </v-col>

            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                v-model="time_pathology"
                dense
                :rules="rules"
                label="Tiempo"
                color="primary"
                id="time_pathology"
                type="date"
                required
                outlined
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field v-model="condition" dense :rules="rules" label="Condición" color="primary" id="condition" type="text" required outlined />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field v-model="cycle" dense :rules="rules" label="Ciclo" color="primary" id="cycle" type="text" required outlined />
            </v-col>
          </v-row>
        </v-form>
      </v-container>
      <v-divider class="mx-2 mt-2"></v-divider>
      <v-footer color="white" class="white--text py-3">
        <v-spacer></v-spacer>
        <v-btn class="mx-auto" color="primary" @click="patologia.estado = false"> Cancelar </v-btn>
        <v-btn class="mx-auto ml-2" :disabled="!valid" color="success" @click="crearPatologia()"> Registrar </v-btn>
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
    patologia: Object,
  },
  data() {
    return {
      valid: true,
      snackbar: {
        estado: false,
      },

      pathology_type: "",
      name: "",
      time_pathology: "",
      condition: "",
      cycle: "",

      id: "",
      rules: [(v) => !!v || "Este campo es requerido"],
    };
  },
  mounted() {
    if (this.patologia.editar) {
      this.pathology_type = this.patologia.pathology_type;
      this.name = this.patologia.name;
      this.time_pathology = this.patologia.time_pathology;
      this.condition = this.patologia.condition;
      this.cycle = this.patologia.cycle;
      this.id = this.patologia.id;
    }
  },
  destroyed() {
    this.patologia.editar = false;
  },
  methods: {
    ...mapActions({
      _addPatologia: "patologias/_addPatologia",
      _putPatologia: "patologias/_putPatologia",
    }),
    msj(text, color) {
      this.snackbar.estado = true;
      this.snackbar.text = text;
      this.snackbar.color = color ? `${color} darken-2` : "red darken-3";
    },
    async editarPatologia() {
      const data = {
        pathology_type: this.pathology_type,
        name: this.name,
        time_pathology: this.time_pathology,
        condition: this.condition,
        cycle: this.cycle,
      };
      const id = this.id;

      if (this.$refs.form.validate()) {
        await this._putPatologia({ id, data });
        this.$refs.form.reset();
        this.msj("Patología editada", "green");
        setTimeout(() => {
          this.patologia.estado = false;
        }, 1000);
      } else this.msj("Ocurrio un problema", "red");
    },
    async crearPatologia() {
      if (this.patologia.editar) return this.editarPatologia();
      const data = {
        pathology_type: this.pathology_type,
        name: this.name,
        time_pathology: this.time_pathology,
        condition: this.condition,
        cycle: this.cycle,
      };
      if (this.$refs.form.validate()) {
        await this._addPatologia({ data });
        this.$refs.form.reset();
        this.msj("Patología registrada", "green");
        setTimeout(() => {
          this.patologia.estado = false;
        }, 1000);
      } else this.msj("Ocurrio un problema", "red");
    },
  },
};
</script>

<style></style>
