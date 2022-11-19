<template>
  <div class="game">
    <game-header/>
    <component :is="gameComponent"/>
    <game-controller/>
  </div>
</template>

<script lang="ts">

import {computed, defineComponent, onMounted} from "vue";
import GameHeader from "./GameHeader.vue"
import GamePlayground from "./GamePlayground.vue"
import GameController from "./GameController.vue"
import GameOver from "./GameOver.vue";
import SvgIcon from "./SvgIcon.vue";
import {useGameStateStore} from "../stores";
import {LSKeys, useLocalStorage} from "../utils/localStorage";
import {GameState} from "../types";

export default defineComponent({
  components: {
    SvgIcon,
    GameHeader,
    GamePlayground,
    GameController,
    GameOver
  },

  setup() {
    const gameStateStore = useGameStateStore()
    const ls = useLocalStorage()

    const gameState = computed<GameState>(() => gameStateStore.getGameState)
    const gameComponent = computed<typeof GamePlayground | typeof GameOver>(() => {
      if (gameState.value === "over")
        return GameOver
      return GamePlayground
    })

    onMounted(() => {
      if (
          ls.get(LSKeys.GAME_STATE) === "active" ||
          ls.get(LSKeys.GAME_STATE) === "over"
      ) {
        const gameState = ls.get(LSKeys.GAME_STATE)
        gameStateStore.setGameState(gameState as GameState)
      }
    })

    return {
      gameState,
      gameComponent
    }
  }
})
</script>

<style lang="scss" scoped>
.game {
  max-width: 484px;
  margin: 3rem auto;
}

@media (max-width: 540px) {
  .game {
    max-width: 344px;
  }
}
</style>