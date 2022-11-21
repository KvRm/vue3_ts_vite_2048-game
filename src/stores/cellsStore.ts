import { defineStore } from 'pinia'
import { useCells } from '../utils/actionsHandlers/useCells'
import { computed, ref } from 'vue'
import { LSKeys, useLocalStorage } from '../utils/localStorage'
import { useScoreStore } from './index'

// перенести логику добавления очков сюда

export const useCellsStore = defineStore('cells', () => {
  const ls = useLocalStorage()
  const scoreStore = useScoreStore()

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

  const setCells = (payload: number[][]): void => {
    prevCells.value = cells.value
    prevCellsState.value = true
    cells.value = payload
    ls.set(LSKeys.CELLS, JSON.stringify(payload))
  }

  const setStarterCells = (): void => {
    const scoreStore = useScoreStore()
    const { getStaterCells } = useCells()

    prevCellsState.value = false
    cells.value = getStaterCells()
    ls.set(LSKeys.CELLS, JSON.stringify(cells.value))

    scoreStore.resetCurrentScore()
  }

  const setPrevCells = (): void => {
    if (getPrevCellsState.value)
      cells.value = prevCells.value
    prevCellsState.value = false
  }

  const setPrevCellsState = (payload: boolean) => {
    prevCellsState.value = payload
  }

  return {
    cells,
    prevCells,
    getCells,
    getPrevCellsState,
    setCells,
    setStarterCells,
    setPrevCells,
    setPrevCellsState,
  }
})
