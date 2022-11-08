<template>
  <svg-icon
      @click="switchTheme"
      :name="`lightbulb`"
      :width="40"
      :height="40"
  />
  <router-view/>
</template>

<script lang="ts">
import {defineComponent, onMounted} from "vue";
import {LSKeys, useLocalStorage} from "./composables/localStorage";
import SvgIcon from './components/SvgIcon.vue'

export default defineComponent({
  name: 'App',
  components: {
    SvgIcon
  },

  setup() {
    const ls = useLocalStorage()

    onMounted(() => {
      detectColorScheme()
    })

    const switchTheme = (): void => {
      ls.get(LSKeys.THEME) === "light" ?
          ls.set(LSKeys.THEME, "dark") :
          ls.set(LSKeys.THEME, "light")
      detectColorScheme()
    }

    const detectColorScheme = (): void => {
      const ls = useLocalStorage()

      if (ls.get(LSKeys['THEME'])) {
        ls.get(LSKeys['THEME']) === "dark" ?
            setDataThemeAttribute("dark") :
            setDataThemeAttribute("light")
      } else if (window?.matchMedia("(prefers-color-scheme: light)").matches) {
        setDataThemeAttribute("light")
      } else {
        setDataThemeAttribute("dark")
      }
    }

    const setDataThemeAttribute = (theme: "dark" | "light"): void => {
      document.documentElement.setAttribute("data-theme", theme)
    }

    return {
      switchTheme
    }
  }
})
</script>

<style scoped>
</style>
