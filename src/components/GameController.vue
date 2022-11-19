<template>
  <div v-if="screenWidth > 540" class="controllers">
    <span @click="switchController('keyboard')">
      <svg-icon
          :height="30"
          :width="30"
          name="keyboard"
          :active="controller === 'keyboard'"
      />
    </span>
    <span @click="switchController('mouse')">
      <svg-icon
          :height="30"
          :width="30"
          name="computer-mouse"
          :active="controller === 'mouse'"
      />
    </span>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, onUnmounted, ref, watch} from "vue"
import SvgIcon from "./SvgIcon.vue"
import {useGameControllerStore} from "../stores";
import {Controller} from "../types";
import {LSKeys, useLocalStorage} from "../utils/localStorage";
import {useWidth} from "../utils/useWidth";

export default defineComponent({
  components: {
    SvgIcon
  },

  setup() {
    const controllerStore = useGameControllerStore()
    const ls = useLocalStorage()

    const screenWidth = ref<number>(window.innerWidth)
    const controller = computed<Controller>(() => controllerStore.controller)

    const {removeListener, addListener} = useWidth()

    onMounted(() => {
          addListener((newWidth: number) => screenWidth.value = newWidth)

          if (
              ls.get(LSKeys.GAME_CONTROLLER) === "keyboard" ||
              ls.get(LSKeys.GAME_CONTROLLER) === "mouse"
          ) {
            const controller = ls.get(LSKeys.GAME_CONTROLLER)
            controllerStore.setController(controller as Controller)
          }
        }
    )

    onUnmounted(() => removeListener((newWidth: number) => screenWidth.value = newWidth))

    const switchController = (payload: Controller) => {
      controllerStore.setController(payload)
    }

    watch(screenWidth, () => {
      if (screenWidth.value <= 540)
        controllerStore.setController("mouse")
      else
        controllerStore.setController("keyboard")
    })

    return {
      controller,
      screenWidth,
      switchController
    }
  }
})
</script>

<style lang="scss" scoped>
.controllers {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>