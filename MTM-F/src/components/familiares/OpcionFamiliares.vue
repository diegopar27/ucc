<template>
  <v-dialog v-model="familiar.estado" max-width="900">
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>Familiar {{ familiar.nombre }}</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="familiar.estado = false">
          <v-icon color="white">mdi-exit-run</v-icon></v-btn
        >
      </v-footer>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row justify="center" class="mt-4">
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                v-model="names"
                dense
                :rules="rules"
                label="Nombres"
                color="primary"
                id="names"
                type="text"
                required
                outlined
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                v-model="suernames"
                dense
                :rules="rules"
                label="Apellidos"
                color="primary"
                id="suernames"
                type="text"
                required
                outlined
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                v-model="age"
                dense
                :rules="rules"
                label="Edad"
                color="primary"
                id="age"
                type="number"
                required
                outlined
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                v-model="birth_date"
                dense
                :rules="rules"
                label="Cumpleaños"
                color="primary"
                id="birth_date"
                type="date"
                required
                outlined
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-autocomplete
                :rules="rules"
                label="Genero"
                v-model="gender"
                :items="items"
                color="primary"
                id="gender"
                type="text"
                required
                outlined
                dense
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                v-model="mail"
                dense
                :rules="rules"
                label="Correo"
                color="primary"
                id="mail"
                type="email"
                required
                outlined
              />
            </v-col>
            <v-col cols="6" class="my-0 py-1">
              <v-text-field
                v-model="direction"
                dense
                :rules="rules"
                label="Dirección"
                color="primary"
                id="direction"
                type="text"
                required
                outlined
              />
            </v-col>
            <v-col cols="4" class="my-0 py-1">
              <v-text-field
                v-model="education_level"
                dense
                :rules="rules"
                label="Nivel educativo"
                color="primary"
                id="education_level"
                type="text"
                required
                outlined
              />
            </v-col>
            <v-col cols="4" class="my-0 py-1">
              <v-text-field
                v-model="phone"
                dense
                :rules="rules"
                label="Teléfono"
                color="primary"
                id="phone"
                type="number"
                required
                outlined
              />
            </v-col>
            <v-col cols="4" class="my-0 py-1">
              <v-text-field
                v-model="nui"
                dense
                :rules="rules"
                label="Nui"
                color="primary"
                id="nui"
                type="number"
                required
                outlined
              />
            </v-col>
            <v-col cols="4" class="my-0 py-1">
              <v-text-field
                v-model="marital_status"
                dense
                :rules="rules"
                label="Estado civil"
                color="primary"
                id="marital_status"
                type="text"
                required
                outlined
              />
            </v-col>
            <v-col cols="4" class="my-0 py-1">
              <v-text-field
                v-model="occupation"
                dense
                :rules="rules"
                label="Ocupacion"
                color="primary"
                id="occupation"
                type="text"
                required
                outlined
              />
            </v-col>
            <v-col cols="6" class="my-0 py-1">
              <v-textarea
                v-model="background"
                dense
                :rules="rules"
                rows="2"
                label="Antecedentes"
                color="primary"
                id="background"
                type="text"
                required
                outlined
              />
            </v-col>
            <v-col cols="6" class="my-0 py-1">
              <v-textarea
                v-model="comptetencies"
                dense
                :rules="rules"
                rows="2"
                label="Competencias"
                color="primary"
                id="comptetencies"
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
        <v-btn class="mx-auto" color="primary" @click="familiar.estado = false">
          Cancelar
        </v-btn>
        <v-btn
          class="mx-auto ml-2"
          :disabled="!valid"
          color="success"
          @click="crearFamiliar()"
        >
          Registrar
        </v-btn>
      </v-footer>
    </v-card>
    <v-snackbar
      v-model="snackbar.estado"
      :color="snackbar.color"
      :timeout="1500"
      bottom
      left
    >
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
    familiar: Object,
  },
  data() {
    return {
      valid: true,
      snackbar: {
        estado: false,
      },

      names: "",
      suernames: "",
      age: "",
      birth_date: "",
      direction: "",
      education_level: "",
      gender: "",
      mail: "",
      phone: "",
      nui: "",
      marital_status: "",
      occupation: "",
      background: "",
      comptetencies:"",
      id: "",

      items: [{ text: "Femenino" }, { text: "Masculino" }],

      rules: [(v) => !!v || "Este campo es requerido"],
    };
  },
  mounted() {
    if (this.familiar.editar) {
      this.names = this.familiar.names;
      this.suernames = this.familiar.suernames;
      this.age = this.familiar.age;
      this.birth_date = this.familiar.birth_date;
      this.direction = this.familiar.direction;
      this.education_level = this.familiar.education_level;
      this.gender = this.familiar.gender;
      this.mail = this.familiar.mail;
      this.phone = this.familiar.phone;
      this.nui = this.familiar.nui;
      this.marital_status = this.familiar.marital_status;
      this.occupation = this.familiar.occupation;
      this.comptetencies = this.familiar.comptetencies;

      this.id = this.familiar.id;
    }
  },
  destroyed() {
    this.familiar.editar = false;
  },
  methods: {
    ...mapActions({
      _addFamiliar: "familiares/_addFamiliar",
      _putFamiliar: "familiares/_putFamiliar",
    }),
    msj(text, color) {
      this.snackbar.estado = true;
      this.snackbar.text = text;
      this.snackbar.color = color ? `${color} darken-2` : "red darken-3";
    },
    async editarFamiliar() {
      const data = {
        names: this.names,
        suernames: this.suernames,
        ages: this.age,
        birth_date: this.birth_date,
        direction: this.direction,
        education_level: this.education_level,
        gender: this.gender,
        mail: this.mail,
        phone: this.phone,
        nui: this.nui,
        marital_status: this.marital_status,
        accupation: this.occupation,
        comptetencies: this.comptetencies

      };
      const id = this.id;

      if (this.$refs.form.validate()) {
        await this._putFamiliar({ id, data });
        this.$refs.form.reset();
        this.msj("Familiar editado", "green");
        setTimeout(() => {
          this.familiar.estado = false;
        }, 1000);
      } else this.msj("Ocurrio un problema", "red");
    },
    async crearFamiliar() {
      if (this.familiar.editar) return this.editarFamiliar();
      const data = {
        names: this.names,
        suernames: this.suernames,
        ages: this.age,
        birth_date: this.birth_date,
        direction: this.direction,
        education_level: this.education_level,
        gender: this.gender,
        mail: this.mail,
        phone: this.phone,
        nui: this.nui,
        marital_status: this.marital_status,
        accupation: this.occupation,
        comptetencies: this.comptetencies
      };
      if (this.$refs.form.validate()) {
        await this._addFamiliar({ data });
        this.$refs.form.reset();
        this.msj("Familiar registrado", "green");
        setTimeout(() => {
          this.familiar.estado = false;
        }, 1000);
      } else this.msj("Ocurrio un problema", "red");
    },
  },
};
</script>

<style></style>

   
   
    
    