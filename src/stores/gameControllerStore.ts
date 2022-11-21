import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { Controller } from '../types'
import { LSKeys, useLocalStorage } from '../utils/localStorage'

// перенести логику по изменению контроллера
export const useControllerStore = defineStore('controller', () => {
  const ls = useLocalStorage()

  const controller = ref<Controller>('mouse')
  const getController = computed<Controller>(() => controller.value)

  const setController = (payload: Controller): void => {
    controller.value = payload
    ls.set(LSKeys.GAME_CONTROLLER, controller.value)
  }

  return { controller, getController, setController }
})