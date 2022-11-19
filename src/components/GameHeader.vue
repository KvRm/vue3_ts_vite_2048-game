<template>
  <div class="header">
    <h1 class="title">2048</h1>
    <div class="score">
      <span class="score-header">Current score: </span>
      <p class="score-value">{{ currentScore }}</p>
    </div>
    <div class="score record">
      <span class="score-header record-header">Record: </span>
      <p class="score-value record-value">{{ recordScore }}</p>
    </div>
    <div class="controllers">
      <svg-icon @click="setPrevStep" :name="`backward`" :height="26" :width="26"/>
      <svg-icon @click="restartGame" :name="`rotate-right`" :height="26" :width="26"/>
    </div>
  </div>
</template>

<script lang="ts">

import {computed, defineComponent, onMounted} from "vue"
import SvgIcon from "./SvgIcon.vue"
import {useCellsStore, useGameStateStore, useScoreStore} from "../stores"
import {LSKeys, useLocalStorage} from "../utils/localStorage";

export default defineComponent({
  components: {
    SvgIcon
  },

  setup() {
    const ls = useLocalStorage()
    const cellsStore = useCellsStore()
    const gameStateStore = useGameStateStore()
    const scoreStore = useScoreStore()

    const currentScore = computed<number>(() => scoreStore.getCurrentScore)
    const recordScore = computed<number>(() => scoreStore.getRecordScore)

    onMounted(() => {
      if (ls.get(LSKeys.CURRENT_SCORE)) {
        const score: string | null = ls.get(LSKeys.CURRENT_SCORE)
        if (Number(score))
          scoreStore.setCurrentScore(Number(score))
      }
      if (ls.get(LSKeys.RECORD_SCORE)) {
        const score: string | null = ls.get(LSKeys.RECORD_SCORE)
        if (Number(score))
          scoreStore.setRecordScore(Number(score))
      }
    })

    const restartGame = (): void => {
      cellsStore.setStarterCells()
      gameStateStore.setGameState("active")
    }

    const setPrevStep = (): void => {
      cellsStore.setPrevCells()
      gameStateStore.setGameState("active")
    }

    return {
      currentScore,
      recordScore,
      restartGame,
      setPrevStep
    }
  }
})
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.score {
  background: var(--primary-bg-color);
  padding: 1rem;
  border-radius: 5px;

  &-header {
    font-size: 1.4rem;
  }

  &-value {
    font-size: 2.2rem;
  }
}

.controllers {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-start: 3;
  justify-items: flex-end;
  gap: 1rem;
}

@media (max-width: 540px) {
  .header {
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    justify-content: flex-end;
    gap: .5rem;

    .score-value {
      font-size: 1.8rem;
    }
  }
}
</style>