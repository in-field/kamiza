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

      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>

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

export default {
  components: { Kenmi, Zendate, Kondate },
  props: {
    title: {
      type: String,
      default: "タイトル"
    }
  }
};
</script>
