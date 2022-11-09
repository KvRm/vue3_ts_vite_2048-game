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
      <svg-icon :name="`rotate-right`" :height="26" :width="26"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import SvgIcon from "./SvgIcon.vue";

export default defineComponent({
  name: 'MainView',
  components: {
    SvgIcon
  },

  setup() {
    return {}
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
  display: flex;
  gap: 1rem;
}
</style>