<template>
  <svg-icon
      @click="switchTheme"
      :name="`lightbulb`"
      :width="40"
      :height="40"
  />
</template>

<script lang="ts">
import {defineComponent, onMounted} from "vue";
import SvgIcon from '../components/SvgIcon.vue'
import {LSKeys, useLocalStorage} from "../utils/localStorage";

export default defineComponent({
  name: "ThemeSwitcher",
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
        ls.set(LSKeys['THEME'], "light")
        setDataThemeAttribute("light")
        detectColorScheme()
      } else {
        ls.set(LSKeys['THEME'], "dark")
        setDataThemeAttribute("dark")
        detectColorScheme()
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