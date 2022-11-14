<template>
  <div>
    <div>
      <div>
        <h1>Pacientes</h1>
        <div cols="12" md="4" lg="3">
          <v-btn color="success" dark large> Crear paciente </v-btn>
        </div>
      </div>
      <div>
        <v-text-field cols="12" md="4" lg="3" v-model="search" label="Consultar por numero ID" class="purple-input" />
        <template>
          <v-data-table :search="search" :headers="headers" :items="pacientes" item-key="id" :items-per-page="5" class="elevation-1">
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon small color="primary" class="mr-2" @click="verPaciente(item)"> mdi-book </v-icon>
              <v-icon small color="warning" class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
              <v-icon small color="error" @click="deleteItem(item)"> mdi-delete </v-icon>
            </template>
          </v-data-table>
        </template>
      </div>
    </div>
    <PACIENTE :paciente="paciente" v-if="paciente.estado"></PACIENTE>
  </div>
</template>
<script>
import popapPaciente from "../components/pacientes/CardPacientes.vue";
import axios from "axios";
import { Global } from "../global";
import { mapActions } from "vuex";

export default {
  components: {
    PACIENTE: popapPaciente,
  },
  data: () => ({
    search: "",
    headers: [
      {
        text: "Nombre",
        align: "center",
        sortable: false,
        value: "nombre",
      },
      {
        text: "Apellido",
        align: "center",
        sortable: false,
        value: "apellido",
      },
      {
        text: "Tipo doc.",
        align: "center",
        sortable: false,
        value: "tipo_documento",
      },
      {
        text: "Numero doc.",
        align: "center",
        sortable: false,
        value: "cedula",
      },
      {
        text: "Genero",
        align: "center",
        sortable: false,
        value: "genero",
      },
      {
        text: "EPS",
        align: "center",
        sortable: false,
        value: "eps",
      },
      {
        text: "Edad",
        align: "center",
        sortable: false,
        value: "edad",
      },

      { text: "Actions", value: "actions", sortable: false },
    ],
    paciente: {
      estado: false,
      // nombre: "",
      // apellidos: "",
      // tipo_documento: "",
      // cedula: "",
      // edad: "",
      // correo: "",
      // eps: "",
      // genero,
    },
    pacientes: [
      {
        nombre: "Cristian David",
        apellido: "Hernandez Suarez",
        tipo_documento: "C.C",
        cedula: "1006689061",
        edad: "21",
        correo: "Cristian David",
        eps: "Cajacopi",
        genero: "Hombre",
      },
      {
        nombre: "Cristian David",
        apellido: "Hernandez Suarez",
        tipo_documento: "C.C",
        cedula: "1006689061",
        edad: "21",
        correo: "Cristian David",
        eps: "Cajacopi",
        genero: "Hombre",
      },
      {
        nombre: "Cristian David",
        apellido: "Hernandez Suarez",
        tipo_documento: "C.C",
        cedula: "1006689061",
        edad: "21",
        correo: "Cristian David",
        eps: "Cajacopi",
        genero: "Hombre",
      },
      {
        nombre: "Cristian David",
        apellido: "Hernandez Suarez",
        tipo_documento: "C.C",
        cedula: "1006689061",
        edad: "21",
        correo: "Cristian@18gmail.com",
        eps: "Cajacopi",
        genero: "Hombre",
      },
    ],
  }),
  async mounted() {},
  methods: {
    ...mapActions({}),
    verPaciente(item) {
      this.paciente.estado = true;
      this.paciente.nombre = item.nombre;
      this.paciente.apellidos = item.apellido;
      this.paciente.tipo_documento = item.tipo_documento;
      this.paciente.cedula = item.cedula;
      this.paciente.edad = item.edad;
      this.paciente.correo = item.correo;
      this.paciente.eps = item.eps;
      this.paciente.genero = item.genero;
    },
  },
};
</script>
