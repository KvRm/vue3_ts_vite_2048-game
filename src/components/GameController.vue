<template>
  <div class="controllers">
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
import {computed, defineComponent} from "vue"
import SvgIcon from "./SvgIcon.vue"
import {useGameControllerStore} from "../stores";
import {Controller} from "../types/Controller";
import {LSKeys, useLocalStorage} from "../utils/localStorage";

export default defineComponent({
  name: "RadioButton",
  components: {
    SvgIcon
  },

  setup() {
    const controllerStore = useGameControllerStore()
    const ls = useLocalStorage()

    const controller = computed<Controller>(() => controllerStore.controller)

    const setController = (payload: Controller) => {
      controllerStore.setController(payload)
      ls.set(LSKeys.GAME_CONTROLLER, payload)
    }

    return {
      controller,
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