<template>
    <v-container fluid class="fill-height">
      <v-row justify="center">
        <v-card shaped width="900">
          <v-footer color="primary">
            <h1 class="white--text">Familiar</h1>
          </v-footer>
          <v-row>
            <v-col cols="4">
              <v-text-field class="pt-4 pl-4" outlined dense v-model="search" label="Buscar" />
            </v-col>
            <v-col cols="8" class="text-end">
              <v-btn class="mt-4 mr-4" color="success" dark large @click="familiarop.estado = true"> Agregar familiar </v-btn>
            </v-col>
          </v-row>
  
          <template>
            <v-data-table :search="search" :headers="headers" :items="familiares" item-key="id" :items-per-page="5" class="elevation-1">
              <template v-slot:[`item.actions`]="{ item }">
                <v-icon small color="primary" class="mr-2" @click="verFamiliar(item)"> mdi-book </v-icon>
                <v-icon small color="warning" class="mr-2" @click="editFamiliar(item)"> mdi-pencil </v-icon>
              </template>
            </v-data-table>
          </template>
        </v-card>
      </v-row>
      <FAMILIAR :familiar="familiar" v-if="familiar.estado"></FAMILIAR>
      <FAMILIAROP :familiar="familiarop" v-if="familiarop.estado"></FAMILIAROP>
    </v-container>
  </template>
  <script>
  import popapFamiliares from "../components/familiares/CardFamiliares.vue";
  import OpcionFamiliares from "../components/familiares/OpcionFamiliares.vue";
  import { mapActions } from "vuex";
  
  export default {
    components: {
      FAMILIAR: popapFamiliares,
      FAMILIAROP: OpcionFamiliares,
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
      familiar: {
        estado: false,
      },
      familiarop: {
        estado: false,
      },
      familiares: [],
    }),
    async mounted() {
      this.familiares = await this._getFamiliar();
      console.log(this.familiares);
    },
    methods: {
      ...mapActions({
        _getFamiliar: "familiar/_getFamiliar",
      }),
      editFamiliar(item) {
       
        this.familiarop.names = item.names;
        this.familiarop.suernames = item.suernames;
        this.familiarop.age = item.age;
        this.familiarop.birth_date = item.birth_date;
        this.familiarop.direction = item.direction;
        this.familiarop.education_level = item.education_level;
        this.familiarop.gender = item.gender;
        this.familiarop.mail = item.mail;
        this.familiarop.nui = item.nui;
        this.familiarop.phone = item.phone;
        this.familiarop.marital_status = item.marital_status;
        this.familiarop.occupation = item.occupation;
        this.familiarop.background = item.background;
        this.familiarop.comptetencies = item.comptetencies;
        this.familiarop.id = item.id;
  
        this.familiarop.estado = true;
        this.familiarop.editar = true;
      },
      verFamiliar(item) {
        this.familiar.edad = item.age;
        this.familiar.cumpleanos = item.birth_date;
        this.familiar.direccion = item.direction;
        this.familiar.educacion = item.education_level;
        this.familiar.genero = item.gender;
        this.familiar.correo = item.mail;
        this.familiar.nombre = item.names;
        this.familiar.telefono = item.phone;
        this.familiar.apellidos = item.suernames;
  
        this.familiar.estado = true;
      },
    },
  };
  </script>