<template>
  <div class="playground">
    <number-component v-for="(item, index) in arr" :key="index" :value="item"/>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import NumberComponent from "./NumberComponent.vue";

export default defineComponent({
  name: 'MainView',
  components: {
    NumberComponent
  },

  setup() {
    const arr = [2, 4, 8, 16, 32, 64, 128, 512, 1024, 2048, 4096, 8192, 16384, 32768, 0, 32]

    return {
      arr
    }
  }
})
</script>

<style lang="scss">
.playground {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 484px;
  height: 484px;
  background: var(--second-bg-color);
  border-radius: 10px;
  border: 2px solid var(--primary-font-color);
  overflow: hidden;
}
</style>