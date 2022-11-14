<template>
  <v-app>
    <v-container class="fill-height mx-auto" fluid>
      <v-card class="elevation-12 mx-auto" width="500">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="12" md="12" lg="12">
            <h1 class="text-center primary--text">Iniciar sesión</h1>
            <h4 class="text-center mb-2">Mujeres trabajando por el meta</h4>
            <v-form ref="form" v-model="valid" lazy-validation id="form">
              <v-card-text class="mt-12">
                <v-row justify="center">
                  <v-col cols="8">
                    <v-text-field label="Email" required solo prepend-icon="email" type="email" color="#03A9F4" v-model="usuario" />
                  </v-col>
                  <v-col cols="8">
                    <v-text-field
                      required
                      id="password"
                      label="Password"
                      solo
                      name="password"
                      prepend-icon="lock"
                      type="password"
                      color="#03A9F4"
                      v-model="contraseña"
                    />
                  </v-col>
                </v-row>
              </v-card-text>
            </v-form>
            <div class="text-center my-5">
              <v-btn color="primary" :disabled="!valid" v-on:click="login()">Iniciar sesión</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      value1: "",
      valid: false,
      usuario: "",
      contraseña: "",
    };
  },
  methods: {
    ...mapActions({
      LOGIN: "usuario/loginUsuario",
      GETHISTORIAS: "usuario/gethistorias",
    }),

    async login() {
      console.log(this.$refs.form.validate());
      this.$refs.form.validate();
      let data = {
        usuario: this.usuario,
        password: this.contraseña,
      };
      let res = await this.LOGIN({ data });
      if (res) {
        sessionStorage.usuario = JSON.stringify(res);
        return this.$router.push("/");
      }
    },
  },
};
</script>

<style></style>
