<template>
  <div v-if="activate">
    <v-btn icon> <v-icon>lock</v-icon> </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    activate: {
      type: Boolean,
      default: false
    }
  }
};
</script>
