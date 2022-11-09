<template>
  <div class="game">
    <game-header/>
    <game-playground/>
    <game-controller/>
  </div>
</template>

<script lang="ts">

import {defineComponent, onMounted} from "vue";
import GameHeader from "./GameHeader.vue"
import GamePlayground from "./GamePlayground.vue"
import GameController from "./GameController.vue"
import SvgIcon from "./SvgIcon.vue";
import {useGameControllerStore} from "../stores";
import {LSKeys, useLocalStorage} from "../utils/localStorage";
import {Controller} from "../types/Controller";

export default defineComponent({
  name: 'MainView',
  components: {
    SvgIcon,
    GameHeader,
    GamePlayground,
    GameController
  },

  setup() {
    const controllerStore = useGameControllerStore()
    const ls = useLocalStorage()

    onMounted(() => {
      if (
          ls.get(LSKeys.GAME_CONTROLLER) === "mouse" ||
          ls.get(LSKeys.GAME_CONTROLLER) === "keyboard"
      ) {
        const controller = ls.get(LSKeys.GAME_CONTROLLER)
        controllerStore.setController(controller as Controller)
      }
    })
  }
})
</script>

<style lang="scss" scoped>
.game {
  width: 484px;
  margin: 3rem auto;
}
</style>