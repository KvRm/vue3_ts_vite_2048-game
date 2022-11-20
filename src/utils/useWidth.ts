import { Ref, ref } from 'vue'

export const useWidth = (): Ref<number> => {
  const screenWidth = ref<number>(window.innerWidth)

  window.addEventListener('resize', () =>
    screenWidth.value = window.innerWidth)

  return screenWidth
}