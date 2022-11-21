<template>
  <v-dialog v-model="padrino.estado" max-width="900">
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>Padrino {{ padrino.nombre }}</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="padrino.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
      </v-footer>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row justify="center" class="mt-4">
            <v-col cols="3" class="my-0 py-1">
              <v-text-field v-model="name" dense :rules="rules" label="Nombres" color="primary" id="name" type="text" required outlined />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field v-model="surname" dense :rules="rules" label="Apellidos" color="primary" id="surname" type="text" required outlined />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field v-model="stratum" dense :rules="rules" label="Extrato" color="primary" id="surname" type="number" required outlined />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                label="Fecha inicio"
                v-model="date_joined"
                color="primary"
                id="surname"
                type="date"
                required
                outlined
                dense
                :rules="rules"
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                label="Tiempo de patrocinio"
                v-model="time_sponsoring"
                color="primary"
                id="surname"
                type="date"
                required
                outlined
                dense
                :rules="rules"
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                label="Departamento"
                v-model="department"
                color="primary"
                :rules="rules"
                id="surname"
                type="text"
                required
                outlined
                dense
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field label="Municipio" v-model="city" color="primary" id="surname" type="text" required outlined dense :rules="rules" />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-autocomplete
                :rules="rules"
                label="Genero"
                v-model="gender"
                :items="items"
                color="primary"
                id="surname"
                type="text"
                required
                outlined
                dense
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-autocomplete
                v-model="godfather_type"
                label="Tipo de padrino"
                :items="items_type"
                color="primary"
                :rules="rules"
                id="surname"
                type="text"
                required
                outlined
                dense
              />
            </v-col>

            <v-col cols="3" class="my-0 py-1">
              <v-text-field v-model="mail" dense :rules="rules" label="Correo" color="primary" id="surname" type="email" required outlined />
            </v-col>
            <v-col cols="6" class="my-0 py-1">
              <v-text-field v-model="direction" dense :rules="rules" label="Dirección" color="primary" id="surname" type="text" required outlined />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                v-model="education_level"
                label="Nivel educativo"
                color="primary"
                :rules="rules"
                id="surname"
                type="text"
                required
                outlined
                dense
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field v-model="phone" dense :rules="rules" label="Teléfono" color="primary" id="surname" type="number" required outlined />
            </v-col>
          </v-row>
        </v-form>
      </v-container>
      <v-divider class="mx-2 mt-2"></v-divider>
      <v-footer color="white" class="white--text py-3">
        <v-spacer></v-spacer>
        <v-btn class="mx-auto" color="primary" @click="padrino.estado = false"> Cancelar </v-btn>
        <v-btn class="mx-auto ml-2" :disabled="!valid" color="success" @click="crearPadrino()"> Registrar </v-btn>
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
    padrino: Object,
  },
  data() {
    return {
      valid: true,
      snackbar: {
        estado: false,
      },

      id: "",
      date_joined: "",
      name: "",
      surname: "",
      godfather_type: "",
      gender: "",
      education_level: "",
      phone: "",
      direction: "",
      city: "",
      department: "",
      mail: "",
      time_sponsoring: "",
      stratum: "",
      create_at: "",

      items: [{ text: "Femenino" }, { text: "Masculino" }, { text: "Otro" }],
      items_type: [{ text: "Natural" }, { text: "Juridico" }],

      rules: [(v) => !!v || "Este campo es requerido"],
    };
  },
  mounted() {
    console.log("padrino", this.padrino);
    if (this.padrino.editar) {
      this.id = this.padrino.id;
      this.date_joined = this.padrino.date_joined;
      this.name = this.padrino.name;
      this.surname = this.padrino.surname;
      this.godfather_type = this.padrino.godfather_type;
      this.gender = this.padrino.gender;
      this.education_level = this.padrino.education_level;
      this.phone = this.padrino.phone;
      this.direction = this.padrino.direction;
      this.city = this.padrino.city;
      this.department = this.padrino.department;
      this.mail = this.padrino.mail;
      this.time_sponsoring = this.padrino.time_sponsoring;
      this.stratum = this.padrino.stratum;
      this.create_at = this.padrino.create_at;
    }
  },
  destroyed() {
    this.padrino.editar = false;
  },
  methods: {
    ...mapActions({
      _addPadrino: "padrinos/_addPadrino",
      _putPadrino: "padrinos/_putPadrino",
    }),
    msj(text, color) {
      this.snackbar.estado = true;
      this.snackbar.text = text;
      this.snackbar.color = color ? `${color} darken-2` : "red darken-3";
    },
    async editarPadrino() {
      const data = {
        city: this.city,
        date_joined: this.date_joined,
        department: this.department,
        direction: this.direction,
        education_level: this.education_level,
        gender: this.gender,
        godfather_type: this.godfather_type,
        mail: this.mail,
        name: this.name,
        phone: this.phone,
        stratum: this.stratum,
        surname: this.surname,
        time_sponsoring: this.time_sponsoring,
      };
      const id = this.padrino.id;

      if (this.$refs.form.validate()) {
        await this._putPadrino({ id, data });
        this.$refs.form.reset();
        this.msj("Padrino editado", "green");
        setTimeout(() => {
          this.padrino.estado = false;
        }, 1000);
      } else this.msj("Ocurrio un problema", "red");
    },
    async crearPadrino() {
      if (this.padrino.editar) return this.editarPadrino();
      const data = {
        city: this.city,
        date_joined: this.date_joined,
        department: this.department,
        direction: this.direction,
        education_level: this.education_level,
        gender: this.gender,
        godfather_type: this.godfather_type,
        mail: this.mail,
        name: this.name,
        phone: this.phone,
        stratum: this.stratum,
        surname: this.surname,
        time_sponsoring: this.time_sponsoring,
      };
      if (this.$refs.form.validate()) {
        await this._addPadrino({ data });
        this.$refs.form.reset();
        this.msj("Padrino registrado", "green");
        setTimeout(() => {
          this.padrino.estado = false;
        }, 1000);
      } else this.msj("Ocurrio un problema", "red");
    },
  },
};
</script>

<style></style>
