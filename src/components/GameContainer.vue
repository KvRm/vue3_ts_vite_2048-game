<template>
  <div class="game">
    <game-header />
    <game-playground />
    <game-controller />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import GameHeader from './GameHeader.vue'
import GamePlayground from './GamePlayground.vue'
import GameController from './GameController.vue'
import GameOver from './GameOver.vue'
import SvgIcon from './SvgIcon.vue'

export default defineComponent({
  components: {
    SvgIcon,
    GameHeader,
    GamePlayground,
    GameController,
    GameOver,
  },
})
</script>

<style lang="scss" scoped>
.game {
  max-width: 484px;
  margin: 3rem auto;
}

@media (max-width: 540px) {
  .game {
    max-width: 344px;
  }
}
</style>
