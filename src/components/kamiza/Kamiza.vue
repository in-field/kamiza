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
      <drawer-menu :activate="activate"></drawer-menu>

      <header-title :activate="activate" :title="title"></header-title>

      <v-spacer></v-spacer>

      <auth :activate="activate"></auth>

      <search :activate="activate"></search>

      <setup :activate="activate"></setup>
    </v-toolbar>
  </div>
</template>

<script>
import "../../plugins/vuetify";
import DrawerMenu from "../kamiza/DrawerMenu";
import Setup from "../kamiza/Setup";
import Search from "../kamiza/Search";
import Auth from "../kamiza/Auth";
import HeaderTitle from "../kamiza/HeaderTitle";

export default {
  components: { DrawerMenu, Setup, Search, Auth, HeaderTitle },
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
