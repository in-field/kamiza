<template>
  <div>
    <v-toolbar :color="color" :dark="dark">
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
    },
    dark: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "cyan"
    }
  }
};
</script>
