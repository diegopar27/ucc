<template>
  <v-dialog v-model="condicion.estado" max-width="900">
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>CONDICIÓN</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="condicion.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
      </v-footer>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row justify="center" class="mt-4">
            <v-col cols="3" class="my-0 py-1">
              <v-text-field v-model="name" dense :rules="rules" label="Nombre" color="primary" id="name" type="text" required outlined />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field v-model="description" id="description" color="primary" :rules="rules" label="Descripción" required outlined dense />
            </v-col>
          </v-row>
        </v-form>
      </v-container>
      <v-divider class="mx-2 mt-2"></v-divider>
      <v-footer color="white" class="white--text py-3">
        <v-spacer></v-spacer>
        <v-btn class="mx-auto" color="primary" @click="condicion.estado = false"> Cancelar </v-btn>
        <v-btn class="mx-auto ml-2" :disabled="!valid" color="success" @click="crearCondicion()"> Registrar </v-btn>
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
    condicion: Object,
  },
  data() {
    return {
      valid: true,
      snackbar: {
        estado: false,
      },
      types: "",
      name: "",
      description: "",
      condition: "",

      id: "",

      rules: [(v) => !!v || "Este campo es requerido"],
    };
  },
  mounted() {
    if (this.condicion.editar) {
      this.types = this.condicion.types;
      this.name = this.condicion.name;
      this.description = this.condicion.description;
      this.condition = this.condicion.condition;
      this.cycle = this.condicion.cycle;
      this.id = this.condicion.id;
    }
  },
  destroyed() {
    this.condicion.editar = false;
  },
  methods: {
    ...mapActions({
      _addCondition: "condicion/_addCondition",
      _putCondition: "condicion/_putCondition",
    }),
    msj(text, color) {
      this.snackbar.estado = true;
      this.snackbar.text = text;
      this.snackbar.color = color ? `${color} darken-2` : "red darken-3";
    },

    async crearCondicion() {
      const data = {
        name: this.name,
        description: this.description,
      };
      if (this.$refs.form.validate()) {
        await this._addCondition({ data });
        this.$refs.form.reset();
        this.msj("Sueño registrada", "green");
        setTimeout(() => {
          this.condicion.estado = false;
        }, 1000);
      } else this.msj("Ocurrio un problema", "red");
    },
  },
};
</script>

<style></style>
