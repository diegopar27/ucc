<template>
  <v-dialog v-model="paciente.estado" max-width="900" persistent>
    <v-card>
      <v-footer color="primary" class="white--text">
        <h1>Paciente {{ paciente.names }}</h1>
        <v-icon class="ml-2" color="white" size="35">mdi-book</v-icon>
        <v-spacer> </v-spacer>
        <v-btn icon @click="paciente.estado = false"> <v-icon color="white">mdi-exit-run</v-icon></v-btn>
      </v-footer>
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row justify="center" class="mt-4">
            <v-col cols="4" class="my-0 py-1">
              <v-text-field v-model="names" dense :rules="rules" label="Nombres" color="primary" id="names" type="text" required outlined />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field v-model="suernames" dense :rules="rules" label="Apellidos" color="primary" id="suernames" type="text" required outlined />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                label="Fecha de nacimiento"
                v-model="birth_date"
                format="DD-MM-YYYY"
                color="primary"
                :rules="rules"
                id="suernames"
                type="date"
                required
                outlined
                dense
              />
            </v-col>
            <v-col cols="2" class="my-0 py-1">
              <v-text-field v-model="age" dense :rules="rules" disabled label="Edad" color="primary" id="suernames" type="number" required outlined />
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
              <v-autocomplete
                :items="items_condicion"
                v-model="condition"
                label="Condición"
                item-value="id"
                item-text="name"
                color="primary"
                id="suernames"
                type="text"
                outlined
                dense
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-autocomplete
                :items="items_eps"
                v-model="eps"
                item-value="id"
                item-text="name"
                color="primary"
                id="suernames"
                type="text"
                label="Eps"
                outlined
                dense
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-autocomplete
                :rules="rules"
                label="Genero"
                v-model="gender"
                :items="items"
                color="primary"
                id="suernames"
                type="text"
                required
                outlined
                dense
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field
                v-model="admission_date"
                label="Fecha de ingreso"
                color="primary"
                id="suernames"
                :rules="rules"
                type="date"
                required
                outlined
                dense
              />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
              <v-text-field v-model="mail" dense :rules="rules" label="Correo" color="primary" id="suernames" type="email" required outlined />
            </v-col>
            <v-col cols="3" class="my-0 py-1">
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

            <v-col cols="3" class="my-0 py-1" v-if="paciente.editar">
              <v-autocomplete
                :items="items_familiares"
                label="Asignar familiar"
                item-text="surnames"
                v-model="familiar"
                color="primary"
                item-value="id"
                id="suernames"
                type="text"
                outlined
                dense
              />
            </v-col>
            <v-col cols="6" class="my-0 py-1" v-if="paciente.editar">
              <v-autocomplete
                label="Asignar padrino"
                v-model="padrino"
                :items="items_padrinos"
                color="primary"
                item-text="surname"
                item-value="id"
                id="suernames"
                type="text"
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
import moment from "moment";

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
      admission_date: "",
      age: "",
      birth_date: "",
      direction: "",
      education_level: "",
      condition: "",
      eps: "",
      funeral_insurance: "",
      gender: "",

      mail: "",
      names: "",
      phone: "",
      nui: "",
      suernames: "",
      familiar: "",
      padrino: "",

      id: "",

      items_padrinos: [],
      items_familiares: [],
      items_condicion: [],
      items_eps: [],

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

    if (this.paciente.editar) {
      this.names = this.paciente.names;
      this.suernames = this.paciente.suernames;
      this.Family_nucleus = "desert";
      this.treatment_start_date = this.paciente.treatment_start_date;

      this.admission_date = this.paciente.admission_date;
      this.age = this.paciente.age;
      this.birth_date = this.paciente.birth_date;

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

    const id = this.id;

    this.items_familiares = await this._getFamiliares();
    this.items_condicion = await this._getConditions();
    this.items_padrinos = await this._getPadrinos();
    this.items_eps = await this._getEps();
  },
  destroyed() {
    this.paciente.editar = false;
  },
  methods: {
    ...mapActions({
      _getFamiliares: "familiares/_getFamiliares",
      _addPaciente: "pacientes/_addPaciente",
      _putPaciente: "pacientes/_putPaciente",

      _getPadrinos: "padrinos/_getPadrinos",

      _getConditions: "condicion/_getConditions",
      _getEps: "eps/_getEps",
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
        treatment_start_date: this.treatment_start_date,
        admission_date: this.admission_date,
        birth_date: this.birth_date,
        nui: this.nui,
        direction: this.direction,
        education_level: this.education_level,
        funeral_insurance: this.funeral_insurance,
        gender: this.gender,
        mail: this.mail,
        phone: this.phone,
        suernames: this.suernames,
        condition: this.condition,
        eps: this.eps,
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
        treatment_start_date: this.treatment_start_date,
        admission_date: this.admission_date,
        birth_date: this.birth_date,
        nui: this.nui,
        direction: this.direction,
        education_level: this.education_level,
        funeral_insurance: this.funeral_insurance,
        gender: this.gender,
        mail: this.mail,
        phone: this.phone,
        suernames: this.suernames,
        condition: this.condition,
        eps: this.eps,
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
