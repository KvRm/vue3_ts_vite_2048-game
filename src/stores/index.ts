import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {Controller, GameState} from "../types";
import {LSKeys, useLocalStorage} from "../utils/localStorage";
import {useCells} from "../utils/actionsHandlers/useCells";

const ls = useLocalStorage()

export const useGameStateStore = defineStore("game", () => {
	const gameState = ref<GameState>("active")
	const getGameState = computed<GameState>(() => gameState.value)

	const setGameState = (payload: GameState): void => {
		gameState.value = payload
		ls.set(LSKeys.GAME_STATE, payload)
	}

	return {gameState, getGameState, setGameState}
})

export const useCellsStore = defineStore("cells", () => {
	const cells = ref<number[][]>([
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	])
	const getCells = computed<number[][]>(() => cells.value)

	const setCells = (payload: number[][]): void => {
		cells.value = payload
		ls.set(LSKeys.CELLS, JSON.stringify(payload))
	}

	const setStarterCells = () => {
		const {getStaterCells} = useCells()

		const newCells = getStaterCells()
		cells.value = newCells
		ls.set(LSKeys.CELLS, JSON.stringify(newCells))
	}

	return {cells, getCells, setCells, setStarterCells}
})

export const useGameControllerStore = defineStore("controller", () => {
	const controller = ref<Controller>("keyboard")
	const getController = computed<Controller>(() => controller.value)

	const setController = (payload: Controller) => {
		controller.value = payload
		ls.set(LSKeys.GAME_CONTROLLER, payload)
	}

	return {controller, getController, setController}
})