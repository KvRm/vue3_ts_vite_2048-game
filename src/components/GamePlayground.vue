<template>
  <div class="playground" ref="playgroundRef">
    <number-component v-for="(cell, index) in playgroundCells" :key="index" :value="cell" />
    <game-over v-if="gameState === 'over'" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, ref } from 'vue'
import NumberComponent from './NumberComponent.vue'
import GameOver from './GameOver.vue'
import { swipe } from '../utils/actionsListeners/swipeListener'
import { LSKeys, useLocalStorage } from '../utils/localStorage'
import { useCellsStore, useGameStateStore } from '../stores'
import { GameState } from '../types'

export default defineComponent({
  components: {
    NumberComponent,
    GameOver,
  },

  setup() {
    const ls = useLocalStorage()
    const cellsStore = useCellsStore()
    const gameStateStore = useGameStateStore()

    const playgroundRef = ref<HTMLDivElement | null>(null)

    const cells = computed<number[][]>(() => cellsStore.getCells)
    const playgroundCells = computed<number[]>(() =>
      cells.value.reduce((c, res) => [...c, ...res], []),
    )

    const gameState = computed<GameState>(() => gameStateStore.getGameState)

    onMounted(() => {
      if (ls.get(LSKeys.GAME_STATE) === 'active' || ls.get(LSKeys.GAME_STATE) === 'over') {
        const gameState = ls.get(LSKeys.GAME_STATE)
        gameStateStore.setGameState(gameState as GameState)
      }

      if (ls.get(LSKeys.CELLS)) {
        cellsStore.setCells(JSON.parse(ls.get(LSKeys.CELLS) as string))
      } else {
        cellsStore.setStarterCells()
      }
      cellsStore.setPrevCellsState(false)

      playgroundRef.value?.addEventListener('mousedown', (e: MouseEvent) =>
        swipe(e, playgroundRef.value as HTMLDivElement),
      )
      playgroundRef.value?.addEventListener('touchstart', (e: TouchEvent) =>
        swipe(e, playgroundRef.value as HTMLDivElement),
      )
      window.addEventListener('keydown', (e: KeyboardEvent) =>
        swipe(e, playgroundRef.value as HTMLDivElement),
      )

      playgroundRef.value?.addEventListener('dragstart', () => false)
    })

    onUnmounted(() => {
      playgroundRef.value?.removeEventListener('mousedown', () => swipe, false)
      playgroundRef.value?.removeEventListener('touchstart', () => swipe, false)
      playgroundRef.value?.removeEventListener('dragstart', () => false, false)
    })

    return {
      playgroundCells,
      cells,
      playgroundRef,
      gameState,
    }
  },
})
</script>

<style lang="scss">
.playground {
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 484px;
  height: 484px;
  margin-bottom: 2rem;
  border-radius: 10px;
  border: 2px solid var(--primary-font-color);
  overflow: hidden;
  user-select: none;
}

@media (max-width: 540px) {
  .playground {
    width: 344px;
    height: 344px;
  }
}
</style>
