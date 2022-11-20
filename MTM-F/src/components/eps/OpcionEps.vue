<template>
  <v-dialog v-model="eps.estado" max-width="900">
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>EPS {{ eps.name }}</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="eps.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
      </v-footer>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row justify="center" class="mt-4">
            <v-col cols="3" class="my-0 py-1">
              <v-text-field v-model="name" dense :rules="rules" label="Nombre" color="primary" id="state_exam" type="text" required outlined />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field v-model="nit" dense :rules="rules" label="NIT" color="primary" id="history_exam" type="text" required outlined />
            </v-col>

            <v-col cols="3" class="my-0 py-1">
              <v-text-field v-model="phone" dense :rules="rules" label="Celular" color="primary" id="condition" type="text" required outlined />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                v-model="mail"
                dense
                :rules="rules"
                label="Correo electronico"
                color="primary"
                id="exam_date"
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
        <v-btn class="mx-auto" color="primary" @click="eps.estado = false"> Cancelar </v-btn>
        <v-btn class="mx-auto ml-2" :disabled="!valid" color="success" @click="crearEps()"> Registrar </v-btn>
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
    eps: Object,
  },
  data() {
    return {
      valid: true,
      snackbar: {
        estado: false,
      },

      name: "",
      nit: "",
      phone: "",
      mail: "",

      id: "",
      rules: [(v) => !!v || "Este campo es requerido"],
    };
  },
  mounted() {
    if (this.eps.editar) {
      this.name = this.eps.name;
      this.nit = this.eps.nit;
      this.phone = this.eps.phone;
      this.mail = this.eps.mail;
      this.id = this.eps.id;
    }
  },
  destroyed() {
    this.eps.editar = false;
  },
  methods: {
    ...mapActions({
      _addEps: "eps/_addEps",
      _putEps: "eps/_putEps",
    }),
    msj(text, color) {
      this.snackbar.estado = true;
      this.snackbar.text = text;
      this.snackbar.color = color ? `${color} darken-2` : "red darken-3";
    },
    async editarEps() {
      const data = {
        name: this.name,
        nit: this.nit,
        phone: this.phone,
        mail: this.mail,
      };
      const id = this.id;

      if (this.$refs.form.validate()) {
        await this._putEps({ id, data });
        this.$refs.form.reset();
        this.msj("Eps editada", "green");
        setTimeout(() => {
          this.eps.estado = false;
        }, 1000);
      } else this.msj("Ocurrio un problema", "red");
    },
    async crearEps() {
      if (this.eps.editar) return this.editarEps();
      const data = {
        name: this.name,
        nit: this.nit,
        phone: this.phone,
        mail: this.mail,
    
      };
      if (this.$refs.form.validate()) {
        await this._addEps({ data });
        this.$refs.form.reset();
        this.msj("Eps registrada", "green");
        setTimeout(() => {
          this.eps.estado = false;
        }, 1000);
      } else this.msj("Ocurrio un problema", "red");
    },
  },
};
</script>

<style></style>
