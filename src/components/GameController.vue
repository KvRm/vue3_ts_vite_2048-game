<template>
  <div v-if="screenWidth > 540" class="controllers">
    <span @click="setController('keyboard')">
      <svg-icon
          :height="30"
          :width="30"
          name="keyboard"
          :active="controller === 'keyboard'"
      />
    </span>
    <span @click="setController('mouse')">
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
import {computed, defineComponent, onMounted, ref, watch} from "vue"
import SvgIcon from "./SvgIcon.vue"
import {useGameControllerStore} from "../stores";
import {Controller} from "../types";
import {LSKeys, useLocalStorage} from "../utils/localStorage";
import {useWidth} from "../utils/useWidth";

export default defineComponent({
  name: "RadioButton",
  components: {
    SvgIcon
  },

  setup() {
    const controllerStore = useGameControllerStore()
    const ls = useLocalStorage()
    const screenWidth = ref<number>(window.innerWidth)

    onMounted(() => useWidth((newWidth: number) => {
      screenWidth.value = newWidth
    }))

    const controller = computed<Controller>(() => controllerStore.controller)

    const setController = (payload: Controller) => {
      controllerStore.setController(payload)
      ls.set(LSKeys.GAME_CONTROLLER, payload)
    }

    watch(screenWidth, () => {
      if (screenWidth.value <= 540)
        controllerStore.setController("mouse")
    })

    return {
      controller,
      screenWidth,
      setController
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