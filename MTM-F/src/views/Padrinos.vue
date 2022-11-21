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
      this.padrinoop.id = item.id;
      this.padrinoop.date_joined = item.date_joined;
      this.padrinoop.name = item.name;
      this.padrinoop.surname = item.surname;
      this.padrinoop.godfather_type = item.godfather_type;
      this.padrinoop.gender = item.gender;
      this.padrinoop.education_level = item.education_level;
      this.padrinoop.phone = item.phone;
      this.padrinoop.direction = item.direction;
      this.padrinoop.city = item.city;
      this.padrinoop.department = item.department;
      this.padrinoop.mail = item.mail;
      this.padrinoop.time_sponsoring = item.time_sponsoring;
      this.padrinoop.stratum = item.stratum;
      this.padrinoop.create_at = item.create_at;

      this.padrinoop.editar = true;
      this.padrinoop.estado = true;
    },
    verPadrino(item) {
      this.padrino.id = item.id;
      this.padrino.date_joined = item.date_joined;
      this.padrino.name = item.name;
      this.padrino.surname = item.surname;
      this.padrino.godfather_type = item.godfather_type;
      this.padrino.gender = item.gender;
      this.padrino.education_level = item.education_level;
      this.padrino.phone = item.phone;
      this.padrino.direction = item.direction;
      this.padrino.city = item.city;
      this.padrino.department = item.department;
      this.padrino.mail = item.mail;
      this.padrino.time_sponsoring = item.time_sponsoring;
      this.padrino.stratum = item.stratum;
      this.padrino.create_at = item.create_at;

      this.padrino.estado = true;
    },
  },
};
</script>
