<template>
  <div class="game-over-banner">
    <span class="game-over-banner__text">Game Over</span>
    <svg-icon @click="restartGame" :name="`rotate-right`" :height="80" :width="80"/>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import SvgIcon from "./SvgIcon.vue";
import {useCellsStore, useGameStateStore} from "../stores";

export default defineComponent({
  components: {SvgIcon},
  setup() {
    const cellsStore = useCellsStore()
    const gameStateStore = useGameStateStore()

    const restartGame = () => {
      cellsStore.setStarterCells()
      gameStateStore.setGameState("active")
    }

    return {restartGame}
  },
})
</script>

<style lang="scss">
.game-over-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 484px;
  height: 484px;
  background: var(--second-bg-color);
  border: 2px solid var(--primary-font-color);
  border-radius: 10px;
  font-size: 60px;
  line-height: 50px;

  &__text {
    width: 100%;
  }
}

@media (max-width: 540px) {
  .game-over-banner {
    width: 344px;
    height: 344px;
    font-size: 40px;
  }
}
</style>