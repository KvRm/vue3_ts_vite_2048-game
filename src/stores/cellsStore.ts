import { defineStore } from 'pinia'
import { useCells } from '../utils/actionsHandlers/useCells'
import { computed, ref } from 'vue'
import { LSKeys, useLocalStorage } from '../utils/localStorage'
import { useScoreStore } from './index'

export const useCellsStore = defineStore('cells', () => {
  const ls = useLocalStorage()
  const scoreStore = useScoreStore()
  const { getStaterCells } = useCells()

  const cells = ref<number[][]>([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ])
  const getCells = computed<number[][]>(() => cells.value)

  const prevCells = ref<number[][]>(cells.value)

  const prevCellsState = ref<boolean>(false)
  const getPrevCellsState = computed<boolean>(() => prevCellsState.value)

  const score = ref<number>(0)

  const setCells = (payload: number[][]): void => {
    prevCells.value = cells.value
    prevCellsState.value = true
    cells.value = payload
    ls.set(LSKeys.CELLS, JSON.stringify(cells.value))
  }

  const setStarterCells = (): void => {
    const scoreStore = useScoreStore()

    prevCellsState.value = false
    cells.value = getStaterCells()
    ls.set(LSKeys.CELLS, JSON.stringify(cells.value))

    scoreStore.resetCurrentScore()
  }

  const setPrevCells = (): void => {
    if (getPrevCellsState.value) {
      cells.value = prevCells.value
      ls.set(LSKeys.CELLS, JSON.stringify(cells.value))
      scoreStore.setPrevScore()
    }
    setPrevCellsState(false)
  }

  const setPrevCellsState = (payload: boolean) => {
    prevCellsState.value = payload
  }

  return {
    cells,
    prevCells,
    score,
    getCells,
    getPrevCellsState,
    setCells,
    setStarterCells,
    setPrevCells,
    setPrevCellsState,
  }
})
