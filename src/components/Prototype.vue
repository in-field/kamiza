<template>
  <div
    :class="base"
    :style="style"
    :backgroundColor="backgroundColor"
    :width="width"
    :height="height"
  >
    <div>Logo</div>
    <div>Auth</div>
    <div>Search</div>
    <div>Menu</div>
  </div>
</template>

<script>
export default {
  name: "Prototype",
  props: {
    class: {
      type: String,
      default: "base"
    },
    backgroundColor: {
      type: String,
      default: "gray"
    },
    width: {
      type: String,
      default: "auto"
    },
    height: {
      type: String,
      default: "150px"
    }
  },
  data() {
    return {
      style: {
        "--backgroundColor": this.backgroundColor,
        "--width": this.width,
        "--height": this.height
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.base {
  --backgroundColor: gray;
  --width: auto;
  --height: 150px;
  background-color: var(--backgroundColor);
  width: var(--width);
  height: var(--height);
}
</style>
