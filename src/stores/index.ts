import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { Controller, GameState } from '../types'
import { LSKeys, useLocalStorage } from '../utils/localStorage'
import { useCells } from '../utils/actionsHandlers/useCells'

const ls = useLocalStorage()

export const useGameStateStore = defineStore('game', () => {
  const gameState = ref<GameState>('active')
  const getGameState = computed<GameState>(() => gameState.value)

  const setGameState = (payload: GameState): void => {
    gameState.value = payload
    ls.set(LSKeys.GAME_STATE, gameState.value)
  }

  return { gameState, getGameState, setGameState }
})

export const useCellsStore = defineStore('cells', () => {
  const cells = ref<number[][]>([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ])

  const prevCells = ref<number[][]>(cells.value)
  const getCells = computed<number[][]>(() => cells.value)

  const setCells = (payload: number[][]): void => {
    prevCells.value = cells.value
    cells.value = payload
    ls.set(LSKeys.CELLS, JSON.stringify(payload))
  }

  const setStarterCells = (): void => {
    const scoreStore = useScoreStore()
    const { getStaterCells } = useCells()

    cells.value = getStaterCells()
    ls.set(LSKeys.CELLS, JSON.stringify(cells.value))

    scoreStore.resetCurrentScore()
  }

  const setPrevCells = (): void => {
    setCells(prevCells.value)
  }

  return {
    cells,
    prevCells,
    getCells,
    setCells,
    setStarterCells,
    setPrevCells,
  }
})

export const useGameControllerStore = defineStore('controller', () => {
  const controller = ref<Controller>('mouse')
  const getController = computed<Controller>(() => controller.value)

  const setController = (payload: Controller): void => {
    controller.value = payload
    ls.set(LSKeys.GAME_CONTROLLER, controller.value)
  }

  return { controller, getController, setController }
})

export const useScoreStore = defineStore('score', () => {
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