<template>
  <v-dialog v-model="paciente.estado" max-width="900">
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>Paciente {{ paciente.nombre }}</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="paciente.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
      </v-footer>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row justify="center" class="mt-4">
            <v-col cols="3" class="my-0 py-1">
              <v-text-field v-model="names" dense :rules="rules" label="Nombres" color="primary" id="names" type="text" required outlined />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field v-model="suernames" dense :rules="rules" label="Apellidos" color="primary" id="suernames" type="text" required outlined />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field v-model="age" dense :rules="rules" label="Edad" color="primary" id="suernames" type="number" required outlined />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                v-model="birth_date"
                dense
                :rules="rules"
                label="Cumpleaños"
                color="primary"
                id="suernames"
                type="date"
                required
                outlined
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                label="Fecha inicio de tratamiento"
                v-model="treatment_start_date"
                color="primary"
                id="suernames"
                type="date"
                required
                outlined
                dense
                :rules="rules"
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-checkbox
                v-model="funeral_insurance"
                label="Seguro funerario"
                color="primary"
                id="suernames"
                type="text"
                required
                outlined
                dense
                :rules="rules"
              ></v-checkbox>
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                v-model="Family_nucleus"
                dense
                :rules="rules"
                label="Nucleo familiar"
                color="primary"
                id="suernames"
                type="text"
                required
                outlined
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field v-model="gender" dense :rules="rules" label="Genero" color="primary" id="suernames" type="text" required outlined />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                v-model="admission_date"
                dense
                :rules="rules"
                label="Fecha de ingreso"
                color="primary"
                id="suernames"
                type="date"
                required
                outlined
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field v-model="mail" dense :rules="rules" label="Correo" color="primary" id="suernames" type="email" required outlined />
            </v-col>
            <v-col cols="6" class="my-0 py-1">
              <v-text-field v-model="direction" dense :rules="rules" label="Dirección" color="primary" id="suernames" type="text" required outlined />
            </v-col>
            <v-col cols="4" class="my-0 py-1">
              <v-text-field
                v-model="education_level"
                dense
                :rules="rules"
                label="Nivel educativo"
                color="primary"
                id="suernames"
                type="text"
                required
                outlined
              />
            </v-col>
            <v-col cols="4" class="my-0 py-1">
              <v-text-field v-model="phone" dense :rules="rules" label="Teléfono" color="primary" id="suernames" type="number" required outlined />
            </v-col>
            <v-col cols="4" class="my-0 py-1">
              <v-text-field v-model="nui" dense :rules="rules" label="Nui" color="primary" id="suernames" type="number" required outlined />
            </v-col>

            <v-col cols="12" class="my-0 py-1">
              <v-textarea
                v-model="clinic_history"
                dense
                :rules="rules"
                rows="3"
                label="Historia clinica"
                color="primary"
                id="suernames"
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
        <v-btn class="mx-auto" color="primary" @click="paciente.estado = false"> Cancelar </v-btn>
        <v-btn class="mx-auto ml-2" :disabled="!valid" color="success" @click="crearPaciente()"> Registrar </v-btn>
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
    paciente: Object,
  },
  data() {
    return {
      valid: true,
      snackbar: {
        estado: false,
      },

      names: "",
      suernames: "",
      Family_nucleus: "",
      treatment_start_date: "",
      clinic_history: "",
      admission_date: "",
      age: "",
      birth_date: "",
      clinic_history: "",
      direction: "",
      education_level: "",
      funeral_insurance: "",
      gender: "",
      mail: "",
      names: "",
      phone: "",
      nui: "",
      suernames: "",

      id: "",

      rules: [(v) => !!v || "Este campo es requerido"],
    };
  },
  mounted() {
    if (this.paciente.editar) {
      this.names = this.paciente.names;
      this.suernames = this.paciente.suernames;
      this.Family_nucleus = this.paciente.Family_nucleus;
      this.treatment_start_date = this.paciente.treatment_start_date;
      this.clinic_history = this.paciente.clinic_history;
      this.admission_date = this.paciente.admission_date;
      this.age = this.paciente.age;
      this.birth_date = this.paciente.birth_date;
      this.clinic_history = this.paciente.clinic_history;
      this.direction = this.paciente.direction;
      this.education_level = this.paciente.education_level;
      this.funeral_insurance = this.paciente.funeral_insurance;
      this.gender = this.paciente.gender;
      this.mail = this.paciente.mail;
      this.names = this.paciente.names;
      this.nui = this.paciente.nui;
      this.phone = this.paciente.phone;
      this.suernames = this.paciente.suernames;
      this.id = this.paciente.id;
    }
  },
  destroyed() {
    this.paciente.editar = false;
  },
  methods: {
    ...mapActions({
      _addPaciente: "pacientes/_addPaciente",
      _putPaciente: "pacientes/_putPaciente",
    }),
    msj(text, color) {
      this.snackbar.estado = true;
      this.snackbar.text = text;
      this.snackbar.color = color ? `${color} darken-2` : "red darken-3";
    },
    async editarPaciente() {
      const data = {
        names: this.names,
        suernames: this.suernames,
        Family_nucleus: this.Family_nucleus,
        treatment_start_date: this.treatment_start_date,
        clinic_history: this.clinic_history,
        admission_date: this.admission_date,
        age: this.age,
        birth_date: this.birth_date,
        clinic_history: this.clinic_history,
        direction: this.direction,
        education_level: this.education_level,
        funeral_insurance: this.funeral_insurance,
        gender: this.gender,
        mail: this.mail,
        names: this.names,
        nui: this.nui,
        phone: this.phone,
        suernames: this.suernames,
      };
      const id = this.id;

      if (this.$refs.form.validate()) {
        await this._putPaciente({ id, data });
        this.$refs.form.reset();
        this.msj("Paciente editado", "green");
        setTimeout(() => {
          this.paciente.estado = false;
        }, 1000);
      } else this.msj("Ocurrio un problema", "red");
    },
    async crearPaciente() {
      if (this.paciente.editar) return this.editarPaciente();
      const data = {
        names: this.names,
        suernames: this.suernames,
        Family_nucleus: this.Family_nucleus,
        treatment_start_date: this.treatment_start_date,
        clinic_history: this.clinic_history,
        admission_date: this.admission_date,
        age: this.age,
        birth_date: this.birth_date,
        clinic_history: this.clinic_history,
        direction: this.direction,
        education_level: this.education_level,
        funeral_insurance: this.funeral_insurance,
        gender: this.gender,
        mail: this.mail,
        names: this.names,
        nui: this.nui,
        phone: this.phone,
        suernames: this.suernames,
      };
      if (this.$refs.form.validate()) {
        await this._addPaciente({ data });
        this.$refs.form.reset();
        this.msj("Paciente registrado", "green");
        setTimeout(() => {
          this.paciente.estado = false;
        }, 1000);
      } else this.msj("Ocurrio un problema", "red");
    },
  },
};
</script>

<style></style>
