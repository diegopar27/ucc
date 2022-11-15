<template>
  <v-app>
    <Navbar v-if="$route.path != '/Login'"> </Navbar>
    <v-content>
      <router-view style="background-color: #cadaff"> </router-view>
    </v-content>
    <Footer />
  </v-app>
</template>
<script>
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>
