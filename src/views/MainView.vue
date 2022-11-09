<template>
  <main class="main">
    <theme-switcher/>
    <game-container/>
  </main>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import GameContainer from "../components/GameContainer.vue";
import ThemeSwitcher from "../components/ThemeSwitcher.vue";

export default defineComponent({
  name: 'MainView',
  components: {
    ThemeSwitcher,
    GameContainer,
  }
})
</script>
