<template>
  <button class="test">!==</button>

  <Txt></Txt>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { useStore } from "vuex";
import Txt from "@/components/txt.vue";
import _setup from "@/types/setup";
_setup();

export default defineComponent({
  name: "HelloWorld",
  setup() {
    const store = useStore();
    let client = store.state.botModules.client;
    Object.assign(window, { client });
    client.run("");
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
