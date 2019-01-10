<template>
  <div v-if="activate">
    <v-toolbar-side-icon></v-toolbar-side-icon>
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
