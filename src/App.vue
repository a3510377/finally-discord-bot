<template>
  <button class="test">!==</button>
  <Txt></Txt>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { useStore } from "vuex";
import Txt from "@/components/txt.vue";

export default defineComponent({
  name: "HelloWorld",
  setup() {
    const store = useStore();
    Object.assign(window, { client: store.state.botModules.client });
  },
  components: {
    Txt,
  },
});
</script>

<style lang='scss'>
@import url(@/assets/scss/main.scss);

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
