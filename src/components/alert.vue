<template>
  <div v-if="alertMsg" class="alert"></div>
</template>

<script>
export default {
  name: "alert",
  data() {
    return {};
  },
  mounted() {},
  unmounted() {},
};
</script>

<style lang="scss" scoped>
.alert {
  z-index: 9999;
  background-color: red;
}
</style>