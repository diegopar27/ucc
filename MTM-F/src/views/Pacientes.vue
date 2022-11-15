<template>
  <v-container fluid class="fill-height">
    <v-row justify="center">
      <v-card shaped width="900">
        <v-footer color="primary">
          <h1 class="white--text">Pacientes</h1>
        </v-footer>
        <v-row>
          <v-col cols="4">
            <v-text-field class="pt-4 pl-4" outlined dense v-model="search" label="Buscar" />
          </v-col>
          <v-col cols="8" class="text-end">
            <v-btn class="mt-4 mr-4" color="success" dark large @click="pacienteop.estado = true"> Crear paciente </v-btn>
          </v-col>
        </v-row>

        <template>
          <v-data-table :search="search" :headers="headers" :items="pacientes" item-key="id" :items-per-page="5" class="elevation-1">
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon small color="primary" class="mr-2" @click="verPaciente(item)"> mdi-book </v-icon>
              <v-icon small color="warning" class="mr-2" @click="editPaciente(item)"> mdi-pencil </v-icon>
            </template>
          </v-data-table>
        </template>
      </v-card>
    </v-row>
    <PACIENTE :paciente="paciente" v-if="paciente.estado"></PACIENTE>
    <PACIENTEOP :paciente="pacienteop" v-if="pacienteop.estado"></PACIENTEOP>
  </v-container>
</template>
<script>
import popapPaciente from "../components/pacientes/CardPacientes.vue";
import OpcionPaciente from "../components/pacientes/OpcionPaciente.vue";
import { mapActions } from "vuex";

export default {
  components: {
    PACIENTE: popapPaciente,
    PACIENTEOP: OpcionPaciente,
  },
  data: () => ({
    search: "",
    headers: [
      {
        text: "Nombre",
        align: "center",
        sortable: false,
        value: "names",
      },
      {
        text: "Apellido",
        align: "center",
        sortable: false,
        value: "suernames",
      },
      {
        text: "Edad",
        align: "center",
        sortable: false,
        value: "age",
      },
      {
        text: "Email",
        align: "center",
        sortable: false,
        value: "mail",
      },
      {
        text: "Genero",
        align: "center",
        sortable: false,
        value: "gender",
      },
      {
        text: "Teléfono",
        align: "center",
        sortable: false,
        value: "phone",
      },
      {
        text: "Dirección",
        align: "center",
        sortable: false,
        value: "direction",
      },

      { text: "Actions", value: "actions", sortable: false },
    ],
    paciente: {
      estado: false,
    },
    pacienteop: {
      estado: false,
    },
    pacientes: [],
  }),
  async mounted() {
    this.pacientes = await this._getPacientes();
    console.log(this.pacientes);
  },
  methods: {
    ...mapActions({
      _getPacientes: "pacientes/_getPacientes",
    }),
    editPaciente(item) {
      this.pacienteop.names = item.names;
      this.pacienteop.suernames = item.suernames;
      this.pacienteop.Family_nucleus = item.Family_nucleus;
      this.pacienteop.treatment_start_date = item.treatment_start_date;
      this.pacienteop.clinic_history = item.clinic_history;
      this.pacienteop.admission_date = item.admission_date;
      this.pacienteop.age = item.age;
      this.pacienteop.birth_date = item.birth_date;
      this.pacienteop.clinic_history = item.clinic_history;
      this.pacienteop.direction = item.direction;
      this.pacienteop.education_level = item.education_level;
      this.pacienteop.funeral_insurance = item.funeral_insurance;
      this.pacienteop.gender = item.gender;
      this.pacienteop.mail = item.mail;
      this.pacienteop.names = item.names;
      this.pacienteop.nui = item.nui;
      this.pacienteop.phone = item.phone;
      this.pacienteop.suernames = item.suernames;
      this.pacienteop.id = item.id;

      this.pacienteop.estado = true;
    },
    verPaciente(item) {
      this.paciente.familia = item.Family_nucleus;
      this.paciente.ingreso = item.admission_date;
      this.paciente.edad = item.age;
      this.paciente.cumpleanos = item.birth_date;
      this.paciente.historia_clinica = item.clinic_history;
      this.paciente.direccion = item.direction;
      this.paciente.educacion = item.education_level;
      this.paciente.seguro = item.funeral_insurance;
      this.paciente.genero = item.gender;
      this.paciente.correo = item.mail;
      this.paciente.nombre = item.names;
      this.paciente.telefono = item.phone;
      this.paciente.apellidos = item.suernames;

      this.paciente.estado = true;
    },
  },
};
</script>
