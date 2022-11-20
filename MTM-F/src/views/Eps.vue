<template>
  <v-container fluid class="fill-height">
    <v-row justify="center">
      <v-card shaped width="900">
        <v-footer color="primary">
          <h1 class="white--text">Eps</h1>
        </v-footer>
        <v-row>
          <v-col cols="4">
            <v-text-field class="pt-4 pl-4" outlined dense v-model="search" label="Buscar" />
          </v-col>
          <v-col cols="8" class="text-end">
            <v-btn class="mt-4 mr-4" color="success" dark large @click="epsop.estado = true"> Crear EPS </v-btn>
          </v-col>
        </v-row>

        <template>
          <v-data-table :search="search" :headers="headers" :items="items_eps" item-key="id" :items-per-page="5" class="elevation-1">
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon small color="primary" class="mr-2" @click="verEps(item)"> mdi-book </v-icon>
              <v-icon small color="warning" class="mr-2" @click="editEps(item)"> mdi-pencil </v-icon>
            </template>
          </v-data-table>
        </template>
      </v-card>
    </v-row>
    <EPS :eps="eps" v-if="eps.estado"></EPS>
    <EPSOP :eps="epsop" v-if="epsop.estado"></EPSOP>
  </v-container>
</template>
<script>
import OpcionEps from "../components/eps/OpcionEps.vue";
import popapEps from "../components/eps/CardEps.vue";
import { mapActions } from "vuex";

export default {
  components: {
    EPS: popapEps,
    EPSOP: OpcionEps,
  },
  data: () => ({
    search: "",
    headers: [
      {
        text: "NIT",
        align: "center",
        sortable: false,
        value: "nit",
      },
      {
        text: "Nombre",
        align: "center",
        sortable: false,
        value: "name",
      },
      {
        text: "Celular",
        align: "center",
        sortable: false,
        value: "phone",
      },
      {
        text: "Correo electronico",
        align: "center",
        sortable: false,
        value: "mail",
      },

      { text: "Actions", value: "actions", sortable: false },
    ],
    eps: {
      estado: false,
    },
    epsop: {
      estado: false,
    },
    items_eps: [],
  }),
  async mounted() {
    this.items_eps = await this._getEps();
    console.log(this.items_eps);
  },
  methods: {
    ...mapActions({
      _getEps: "eps/_getEps",
    }),
    editEps(item) {
      this.epsop.name = item.name;
      this.epsop.nit = item.nit;
      this.epsop.phone = item.phone;
      this.epsop.mail = item.mail;
      this.epsop.id = item.id;

      this.epsop.estado = true;
      this.epsop.editar = true;
    },
    verEps(item) {
      console.log("cafakhdfash");
      this.eps.estado = true;
      this.eps.name = item.name;
      this.eps.nit = item.nit;
      this.eps.phone = item.phone;
      this.eps.mail = item.mail;
    },
  },
};
</script>
