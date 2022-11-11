<template>
  <canvas
      id="playground"
      :width="playgroundSize.width"
      :height="playgroundSize.height"
      class="playground"
      ref="playgroundRef">
  </canvas>
</template>

<script lang="ts">

import {computed, defineComponent, onMounted, onUnmounted, reactive, ref, watch} from "vue";
import NumberComponent from "./NumberComponent.vue";
import {swipe} from "../utils/swipeListener";
import {useCellsStore} from "../stores";
import {useWidth} from "../utils/useWidth";
import {makeMove} from "../utils/makeMove";

export default defineComponent({
  name: 'MainView',
  components: {
    NumberComponent
  },

  setup() {
    const store = useCellsStore()
    const {addListener, removeListener} = useWidth()

    const playgroundSize = reactive<{ width: number, height: number }>({
      width: 484,
      height: 484
    })
    const screenWidth = ref<number>(window.innerWidth)

    onMounted(() =>
        addListener((newWidth: number) => screenWidth.value = newWidth)
    )

    onUnmounted(() =>
        removeListener((newWidth: number) => screenWidth.value = newWidth)
    )

    watch(screenWidth, () => {
      if (screenWidth.value <= 540) {
        playgroundSize.height = 344
        playgroundSize.width = 344
      } else {
        playgroundSize.height = 484
        playgroundSize.width = 484
      }
    })

    const cells = computed<number[]>(() => store.getCells)
    store.setCells([2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

    const playgroundRef = ref<HTMLCanvasElement | null>(null)

    onMounted(() => {
      if (window.Worker) {
      }

      makeMove()

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
      playgroundRef.value?.removeEventListener("mousedown", () => swipe, false)
      playgroundRef.value?.removeEventListener("touchstart", () => swipe, false)
      playgroundRef.value?.removeEventListener("dragstart", () => false, false)
    })

    return {
      cells,
      playgroundSize,
      playgroundRef
    }
  }
})
</script>

<style lang="scss">
.playground {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 2rem;
  background: var(--second-bg-color);
  border-radius: 10px;
  border: 2px solid var(--primary-font-color);
  overflow: hidden;
  user-select: none;
}

@media (max-width: 540px) {
  .game {
    width: 344px;
    height: 344px;
  }
}
</style>