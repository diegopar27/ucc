<template>
  <v-dialog v-model="sueños.estado" max-width="900">
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>Sueños</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="sueños.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
      </v-footer>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row justify="center" class="mt-4">
            <v-col cols="3" class="my-0 py-1">
              <v-text-field v-model="types" dense :rules="rules" label="Tipo patología" color="primary" id="types" type="text" required outlined />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field v-model="name" dense :rules="rules" label="Nombre" color="primary" id="name" type="text" required outlined />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                v-model="description"
                id="description"
                color="primary"
                :rules="rules"
                label="Tiempo"
                type="date"
                required
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
        <v-btn class="mx-auto" color="primary" @click="sueños.estado = false"> Cancelar </v-btn>
        <v-btn class="mx-auto ml-2" :disabled="!valid" color="success" @click="crearsueños()"> Registrar </v-btn>
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
    sueños: Object,
  },
  data() {
    return {
      valid: true,
      snackbar: {
        estado: false,
      },

      types: "",
      name: "",
      name: "",
      condition: "",
      cycle: "",

      id: "",
      rules: [(v) => !!v || "Este campo es requerido"],
    };
  },
  mounted() {
    if (this.sueños.editar) {
      this.types = this.sueños.types;
      this.name = this.sueños.name;
      this.name = this.sueños.name;
      this.condition = this.sueños.condition;
      this.cycle = this.sueños.cycle;
      this.id = this.sueños.id;
    }
  },
  destroyed() {
    this.sueños.editar = false;
  },
  methods: {
    ...mapActions({
      _addsueños: "sueñoss/_addsueños",
      _putsueños: "sueñoss/_putsueños",
    }),
    msj(text, color) {
      this.snackbar.estado = true;
      this.snackbar.text = text;
      this.snackbar.color = color ? `${color} darken-2` : "red darken-3";
    },
    async editarsueños() {
      const data = {
        types: this.types,
        name: this.name,
        name: this.name,
        condition: this.condition,
        cycle: this.cycle,
      };
      const id = this.id;

      if (this.$refs.form.validate()) {
        await this._putsueños({ id, data });
        this.$refs.form.reset();
        this.msj("Patología editada", "green");
        setTimeout(() => {
          this.sueños.estado = false;
        }, 1000);
      } else this.msj("Ocurrio un problema", "red");
    },
    async crearsueños() {
      if (this.sueños.editar) return this.editarsueños();
      const data = {
        types: this.types,
        name: this.name,
        name: this.name,
        condition: this.condition,
        cycle: this.cycle,
      };
      if (this.$refs.form.validate()) {
        await this._addsueños({ data });
        this.$refs.form.reset();
        this.msj("Patología registrada", "green");
        setTimeout(() => {
          this.sueños.estado = false;
        }, 1000);
      } else this.msj("Ocurrio un problema", "red");
    },
  },
};
</script>

<style></style>
