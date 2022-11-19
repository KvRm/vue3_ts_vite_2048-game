<template>
  <div class="header">
    <h1 class="title">2048</h1>
    <div class="score">
      <span class="score-header">Current score: </span>
      <p class="score-value">1024</p>
    </div>
    <div class="score record">
      <span class="score-header record-header">Record: </span>
      <p class="score-value record-value">1024002</p>
    </div>
    <div class="controllers">
      <svg-icon :name="`backward`" :height="26" :width="26"/>
      <svg-icon @click="restartGame" :name="`rotate-right`" :height="26" :width="26"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import SvgIcon from "./SvgIcon.vue";
import {useCellsStore, useGameStore} from "../stores";
import {useCells} from "../utils/actionsHandlers/useCells";

export default defineComponent({
  name: 'MainView',
  components: {
    SvgIcon
  },

  setup() {
    const cellsStore = useCellsStore()
    const gameStore = useGameStore()
    const {getStaterCells} = useCells()

    const restartGame = () => cellsStore.setCells(getStaterCells())

    return {restartGame}
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
  }
}
</style>