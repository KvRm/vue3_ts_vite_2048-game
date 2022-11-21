<template>
  <div class="game-over-banner">
    <span class="game-over-banner__text">Game Over</span>
    <svg-icon
      @click="restartGame"
      :name="`rotate-right`"
      :hover="false"
      :transparent-hover="true"
      :height="80"
      :width="80"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SvgIcon from './SvgIcon.vue'
import { useCellsStore, useGameStateStore } from '../stores'

export default defineComponent({
  components: { SvgIcon },
  setup() {
    const cellsStore = useCellsStore()
    const gameStateStore = useGameStateStore()

    const restartGame = () => {
      cellsStore.setStarterCells()
      gameStateStore.setGameState('active')
    }

    return { restartGame }
  },
})
</script>

<style lang="scss">
.game-over-banner {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 480px;
  height: 480px;
  border-radius: 10px;
  font-size: 60px;
  line-height: 50px;

  &::before {
    content: '';
    position: absolute;
    width: 480px;
    height: 480px;
    background-color: var(--second-bg-color);
    opacity: 0.5;
  }

  &__text {
    position: relative;
    width: 100%;
    color: var(--primary-font-color);
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
