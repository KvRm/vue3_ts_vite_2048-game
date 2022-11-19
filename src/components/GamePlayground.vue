<template>
  <div class="playground" ref="playgroundRef">
    <number-component
        v-for="(cell, index) in playgroundCells"
        :key="index"
        :value="cell"
    />
  </div>
</template>

<script lang="ts">

import {computed, defineComponent, onMounted, onUnmounted, reactive, ref, watch, watchEffect} from "vue";
import NumberComponent from "./NumberComponent.vue";
import {swipe} from "../utils/actionsListeners/swipeListener";
import {useCellsStore} from "../stores";
import {useWidth} from "../utils/useWidth";
import {useLocalStorage} from "../utils/localStorage";

export default defineComponent({
  name: 'MainView',
  components: {
    NumberComponent
  },

  setup() {
    const store = useCellsStore()
    const ls = useLocalStorage()
    const {addListener, removeListener} = useWidth()

    const playgroundCells = ref<number[]>([])
    const cells = computed<number[][]>(() => store.getCells)

    const playgroundRef = ref<HTMLCanvasElement | null>(null)

    const playgroundSize = reactive<{ width: number, height: number }>({
      width: 484,
      height: 484
    })
    const screenWidth = ref<number>(window.innerWidth)

    onMounted(() => {
      // if (ls.get(LSKeys.CELLS))
      //   console.log(ls.get(LSKeys.CELLS))

      addListener((newWidth: number) => screenWidth.value = newWidth)

      playgroundRef.value?.addEventListener("mousedown", (e: MouseEvent) =>
          swipe(e, playgroundRef.value as HTMLCanvasElement)
      )
      playgroundRef.value?.addEventListener("touchstart", (e: TouchEvent) =>
          swipe(e, playgroundRef.value as HTMLCanvasElement)
      )
      window.addEventListener("keydown", (e: KeyboardEvent) =>
          swipe(e, playgroundRef.value as HTMLCanvasElement)
      )

      playgroundRef.value?.addEventListener("dragstart", () => false)
    })

    onUnmounted(() => {
      // ls.set(LSKeys.CELLS, cells.value)

      removeListener((newWidth: number) => screenWidth.value = newWidth)

      playgroundRef.value?.removeEventListener("mousedown", () => swipe, false)
      playgroundRef.value?.removeEventListener("touchstart", () => swipe, false)
      playgroundRef.value?.removeEventListener("dragstart", () => false, false)
    })

    watch(screenWidth, () => {
      if (screenWidth.value <= 540) {
        playgroundSize.height = 344
        playgroundSize.width = 344
      } else {
        playgroundSize.height = 484
        playgroundSize.width = 484
      }
    })

    watchEffect(() => {
      playgroundCells.value = cells.value.reduce((c, res) => [...c, ...res], [])
    })

    return {
      playgroundCells,
      cells,
      playgroundRef,
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
  margin-bottom: 2rem;
  background: var(--second-bg-color);
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