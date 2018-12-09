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
    <v-toolbar-title>{{ title }}</v-toolbar-title>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "タイトル"
    }
  }
};
</script>
