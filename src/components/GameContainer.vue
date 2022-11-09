<template>
  <div class="game">
    <game-header/>
    <game-playground/>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import GameHeader from "./GameHeader.vue";
import GamePlayground from "./GamePlayground.vue";

export default defineComponent({
  name: 'MainView',
  components: {
    GameHeader,
    GamePlayground
  },

  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.game {
  width: 484px;
  margin: 3rem auto;
}
</style>