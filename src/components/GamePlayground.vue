<template>
  <div class="playground" ref="playgroundRef">
    <number-component
        v-for="(item, index) in arr"
        :key="index"
        :value="item"
    />
  </div>
</template>

<script lang="ts">

import {defineComponent, onMounted, onUnmounted, ref} from "vue";
import NumberComponent from "./NumberComponent.vue";
import {swipe} from "../composables/swipeListener";

export default defineComponent({
  name: 'MainView',
  components: {
    NumberComponent
  },

  setup() {
    const arr = [2, 4, 8, 16, 32, 64, 128, 512, 1024, 2048, 4096, 8192, 16384, 32768, 0, 32]

    const playgroundRef = ref<HTMLDivElement | null>(null)

    onMounted(() => {
      playgroundRef.value?.addEventListener("mousedown", (e: MouseEvent) =>
          swipe(e, playgroundRef.value as HTMLDivElement)
      )
      playgroundRef.value?.addEventListener("touchstart", (e: TouchEvent) =>
          swipe(e, playgroundRef.value as HTMLDivElement)
      )
      window.addEventListener("keyup", (e: KeyboardEvent) =>
          swipe(e, playgroundRef.value as HTMLDivElement)
      )

      playgroundRef.value?.addEventListener("dragstart", () => false)
    })

    onUnmounted(() => {
      playgroundRef.value?.removeEventListener("mousedown", () => swipe, false)
      playgroundRef.value?.removeEventListener("touchstart", () => swipe, false)
      playgroundRef.value?.removeEventListener("dragstart", () => false, false)
    })

    return {
      arr,
      playgroundRef
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
  user-select: none;
}
</style>