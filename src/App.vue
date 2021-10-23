<template>
  <button class="test">test</button>
</template>

<script lang='ts'>
import { defineComponent } from "vue"
import { useStore } from "vuex"

export default defineComponent({
  name: "HelloWorld",
  setup() {
    const store = useStore()
    Object.assign(window, { client: store.state.botModules.client })
  },
})
</script>

<style lang='scss'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
