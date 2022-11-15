<template>
  <v-container fluid class="fill-height">
    <v-row justify="center">
      <v-card shaped width="900">
        <v-footer color="primary">
          <h1 class="white--text">Padrinos</h1>
        </v-footer>
        <v-row>
          <v-col cols="4">
            <v-text-field class="pt-4 pl-4" outlined dense v-model="search" label="Buscar" />
          </v-col>
          <v-col cols="8" class="text-end">
            <v-btn class="mt-4 mr-4" color="success" dark large @click="padrinoop.estado = true"> Crear padrino </v-btn>
          </v-col>
        </v-row>

        <template>
          <v-data-table :search="search" :headers="headers" :items="padrinos" item-key="id" :items-per-page="5" class="elevation-1">
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon small color="primary" class="mr-2" @click="verPadrino(item)"> mdi-book </v-icon>
              <v-icon small color="warning" class="mr-2" @click="editPadrino(item)"> mdi-pencil </v-icon>
            </template>
          </v-data-table>
        </template>
      </v-card>
    </v-row>
    <PADRINO :padrino="padrino" v-if="padrino.estado"></PADRINO>
    <PADRINOOP :padrino="padrinoop" v-if="padrinoop.estado"></PADRINOOP>
  </v-container>
</template>
<script>
import popapPadrino from "../components/padrinos/CardPadrinos.vue";
import OpcionPadrino from "../components/padrinos/OpcionPadrino.vue";
import { mapActions } from "vuex";

export default {
  components: {
    PADRINO: popapPadrino,
    PADRINOOP: OpcionPadrino,
  },
  data: () => ({
    search: "",
    headers: [
      {
        text: "Nombre",
        align: "center",
        sortable: false,
        value: "name",
      },
      {
        text: "Apellido",
        align: "center",
        sortable: false,
        value: "surname",
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
    padrino: {
      estado: false,
    },
    padrinoop: {
      estado: false,
    },
    padrinos: [],
  }),
  async mounted() {
    this.padrinos = await this._getPadrinos();
  },
  methods: {
    ...mapActions({
      _getPadrinos: "padrinos/_getPadrinos",
    }),
    editPadrino(item) {
      this.padrinoop.age = item.age;
      this.padrinoop.city = item.city;
      this.padrinoop.date_joined = item.date_joined;
      this.padrinoop.department = item.department;
      this.padrinoop.direction = item.direction;
      this.padrinoop.education_level = item.education_level;
      this.padrinoop.gender = item.gender;
      this.padrinoop.godfather_type = item.godfather_type;
      this.padrinoop.mail = item.mail;
      this.padrinoop.name = item.name;
      this.padrinoop.phone = item.phone;
      this.padrinoop.stratum = item.stratum;
      this.padrinoop.surname = item.surname;
      this.padrinoop.time_sponsoring = item.time_sponsoring;

      this.padrinoop.id = item.id;

      this.padrinoop.estado = true;
      this.padrinoop.editar = true;
    },
    verPadrino(item) {
      this.padrino.department = item.department;
      this.padrino.ingreso = item.admission_date;
      this.padrino.edad = item.age;
      this.padrino.city = item.city;
      this.padrino.historia_clinica = item.clinic_history;
      this.padrino.direccion = item.direction;
      this.padrino.educacion = item.education_level;
      this.padrino.seguro = item.funeral_insurance;
      this.padrino.genero = item.gender;
      this.padrino.correo = item.mail;
      this.padrino.nombre = item.name;
      this.padrino.telefono = item.phone;
      this.padrino.apellidos = item.surname;

      this.padrino.estado = true;
    },
  },
};
</script>
