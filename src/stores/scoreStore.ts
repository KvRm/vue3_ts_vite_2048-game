import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { LSKeys, useLocalStorage } from '../utils/localStorage'

export const useScoreStore = defineStore('score', () => {
  const ls = useLocalStorage()

  const currentScore = ref<number>(0)
  const recordScore = ref<number>(0)
  const getCurrentScore = computed<number>(() => currentScore.value)
  const getRecordScore = computed<number>(() => recordScore.value)

  watch(currentScore, () => {
    if (currentScore.value > recordScore.value) {
      setRecordScore(currentScore.value)
    }
  })

  const setCurrentScore = (payload: number): void => {
    currentScore.value = payload
    ls.set(LSKeys.CURRENT_SCORE, JSON.stringify(currentScore.value))
  }

  const setRecordScore = (payload: number): void => {
    recordScore.value = payload
    ls.set(LSKeys.RECORD_SCORE, JSON.stringify(recordScore.value))
  }

  const increaseCurrentScore = (payload: number): void => {
    currentScore.value += payload
    ls.set(LSKeys.CURRENT_SCORE, JSON.stringify(currentScore.value))
  }

  const resetCurrentScore = (): void => {
    currentScore.value = 0
    ls.set(LSKeys.CURRENT_SCORE, JSON.stringify(currentScore.value))
  }

  return {
    currentScore,
    recordScore,
    getCurrentScore,
    getRecordScore,
    setCurrentScore,
    setRecordScore,
    increaseCurrentScore,
    resetCurrentScore,
  }
})