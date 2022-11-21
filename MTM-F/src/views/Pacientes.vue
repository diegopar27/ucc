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
          <v-col cols="8" class="text-center">
            <v-btn height="30" class="mt-4 mr-4" color="success" dark large @click="conditionop.estado = true"> agregar condición </v-btn>
            <v-btn height="30" class="mt-4 mr-4" color="success" dark large @click="suenosop.estado = true"> Crear sueño </v-btn>
            <v-btn height="30" class="mt-4 mr-4" color="success" dark large @click="pacienteop.estado = true"> Crear paciente </v-btn>
          </v-col>
        </v-row>

        <template>
          <v-data-table :search="search" :headers="headers" :items="pacientes" item-key="id" :items-per-page="5" class="elevation-1">
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon small color="primary" class="mr-2" @click="verPaciente(item)"> mdi-book </v-icon>
              <v-icon small color="warning" class="mr-2" @click="editPaciente(item)"> mdi-pencil </v-icon>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon small color="second" class="mr-2" v-bind="attrs" v-on="on" @click="asignarPaciente(item)"> mdi-account-group </v-icon>
                </template>
                <span>Asignar Padrino</span>
              </v-tooltip>
            </template>
          </v-data-table>
        </template>
      </v-card>
    </v-row>
    <PACIENTE :paciente="paciente" v-if="paciente.estado"></PACIENTE>
    <PACIENTEOP :paciente="pacienteop" v-if="pacienteop.estado"></PACIENTEOP>
    <SUENOS :suenos="suenosop" v-if="suenosop.estado"></SUENOS>
    <CONDITION :condicion="conditionop" v-if="conditionop.estado"></CONDITION>
    <ASIGNARPADRINO :asignar_padrino="asignar_padrino" v-if="asignar_padrino.estado"></ASIGNARPADRINO>
  </v-container>
</template>
<script>
import OpcionCondicion from "../components/pacientes/OpcionCondicion.vue";
import popapPaciente from "../components/pacientes/CardPacientes.vue";
import OpcionPaciente from "../components/pacientes/OpcionPaciente.vue";
import OpcionSueños from "../components/pacientes/OpcionSueños.vue";
import asignarPadrino from "../components/padrinos/AsignarPadrino.vue";
import { mapActions } from "vuex";

export default {
  components: {
    PACIENTE: popapPaciente,
    PACIENTEOP: OpcionPaciente,
    SUENOS: OpcionSueños,
    CONDITION: OpcionCondicion,
    ASIGNARPADRINO: asignarPadrino,
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
    asignar_padrino: {
      estado: false,
    },
    paciente: {
      estado: false,
    },
    pacienteop: {
      estado: false,
    },
    suenosop: {
      estado: false,
    },
    conditionop: {
      estado: false,
    },
    pacientes: [],
  }),
  async mounted() {
    this.pacientes = await this._getPacientes();
  },
  methods: {
    ...mapActions({
      _getPacientes: "pacientes/_getPacientes",
    }),
    asignarPaciente(item) {
      this.asignar_padrino.id = item.id;
      this.asignar_padrino.names = item.names;
      this.asignar_padrino.estado = true;
    },
    editPaciente(item) {
      this.pacienteop = {
        admission_date: item.admission_date,
        birth_date: item.birth_date,
        condition: item.condition,
        create_at: item.create_at,
        direction: item.direction,
        education_level: item.education_level,
        eps: item.eps,
        estado: item.estado,
        funeral_insurance: item.funeral_insurance,
        gender: item.gender,
        id: item.id,
        mail: item.mail,
        names: item.names,
        nui: item.nui,
        phone: item.phone,
        suernames: item.suernames,
        treatment_start_date: item.treatment_start_date,
        editar: true,
      };
      this.pacienteop.estado = true;
    },
    verPaciente(item) {
      this.paciente = {
        admission_date: item.admission_date,
        birth_date: item.birth_date,
        condition: item.condition,
        create_at: item.create_at,
        direction: item.direction,
        education_level: item.education_level,
        eps: item.eps,
        estado: item.estado,
        funeral_insurance: item.funeral_insurance,
        gender: item.gender,
        id: item.id,
        mail: item.mail,
        names: item.names,
        nui: item.nui,
        phone: item.phone,
        suernames: item.suernames,
        treatment_start_date: item.treatment_start_date,
      };
      this.paciente.estado = true;
    },
  },
};
</script>
