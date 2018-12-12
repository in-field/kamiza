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
      <kondate :activate="activate"></kondate>

      <daimei :activate="activate" :title="title"></daimei>

      <v-spacer></v-spacer>

      <warifu :activate="activate"></warifu>

      <kenmi :activate="activate"></kenmi>

      <zendate :activate="activate"></zendate>
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
    activate: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    }
  }
};
</script>
