<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <v-toolbar color="cyan" dark>
      <kondate></kondate>

      <daimei :title="title"></daimei>

      <v-spacer></v-spacer>

      <warifu></warifu>

      <kenmi></kenmi>

      <zendate></zendate>
    </v-toolbar>
  </div>
</template>

<script>
import "../plugins/vuetify";
import Kondate from "./Kondate";
import Zendate from "./Zendate";
import Kenmi from "./Kenmi";
import Warifu from "./Warifu";
import Daimei from "./Daimei";

export default {
  components: { Kenmi, Zendate, Kondate, Warifu, Daimei },
  props: {
    title: {
      type: String
    }
  }
};
</script>
