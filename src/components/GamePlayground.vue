<template>
  <div class='game-over' ref='playgroundRef'>
    <number-component
      v-for='(cell, index) in playgroundCells'
      :key='index'
      :value='cell'
    />
  </div>
</template>

<script lang='ts'>

import { computed, defineComponent, onMounted, onUnmounted, ref } from 'vue'
import NumberComponent from './NumberComponent.vue'
import { swipe } from '../utils/actionsListeners/swipeListener'
import { LSKeys, useLocalStorage } from '../utils/localStorage'
import { useCellsStore } from '../stores'

export default defineComponent({
  components: {
    NumberComponent,
  },

  setup() {
    const ls = useLocalStorage()
    const cellsStore = useCellsStore()

    const playgroundRef = ref<HTMLCanvasElement | null>(null)

    const cells = computed<number[][]>(() => cellsStore.getCells)
    const playgroundCells = computed<number[]>(() =>
      cells.value.reduce((c, res) => [...c, ...res], []))

    onMounted(() => {
      if (ls.get(LSKeys.CELLS)) {
        cellsStore.setCells(JSON.parse(ls.get(LSKeys.CELLS) as string))
      } else {
        cellsStore.setStarterCells()
      }

      playgroundRef.value?.addEventListener('mousedown', (e: MouseEvent) =>
        swipe(e, playgroundRef.value as HTMLCanvasElement),
      )
      playgroundRef.value?.addEventListener('touchstart', (e: TouchEvent) =>
        swipe(e, playgroundRef.value as HTMLCanvasElement),
      )
      window.addEventListener('keydown', (e: KeyboardEvent) =>
        swipe(e, playgroundRef.value as HTMLCanvasElement),
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
    }
  },
})
</script>

<style lang='scss'>
.game-over {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 484px;
  height: 484px;
  margin-bottom: 2rem;
  background: var(--second-bg-color);
  border-radius: 10px;
  border: 2px solid var(--primary-font-color);
  overflow: hidden;
  user-select: none;
}

@media (max-width: 540px) {
  .game-over {
    width: 344px;
    height: 344px;
  }
}
</style>