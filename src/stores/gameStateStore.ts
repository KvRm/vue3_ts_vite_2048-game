import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { GameState } from '../types'
import { LSKeys, useLocalStorage } from '../utils/localStorage'

export const useGameStateStore = defineStore('game', () => {
  const ls = useLocalStorage()

  const gameState = ref<GameState>('active')
  const getGameState = computed<GameState>(() => gameState.value)

  const setGameState = (payload: GameState): void => {
    gameState.value = payload
    ls.set(LSKeys.GAME_STATE, gameState.value)
  }

  return { gameState, getGameState, setGameState }
})