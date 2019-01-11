<template>
  <div v-if="activate">
    <v-toolbar-title>{{ title }}</v-toolbar-title>
  </div>
</template>

<script>
export default {
  props: {
    activate: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "題名"
    }
  }
};
</script>
