import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {Controller, GameState} from "../types";
import {LSKeys, useLocalStorage} from "../utils/localStorage";

export const useGameStore = defineStore("game", () => {
	const gameState = ref<GameState>("active")

	const getGameState = computed<GameState>(() => gameState.value)

	const setGameState = (payload: GameState): void => {
		gameState.value = payload
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
		const ls = useLocalStorage()

		cells.value = payload
		ls.set(LSKeys.CELLS, JSON.stringify(payload))
	}

	return {cells, getCells, setCells}
})

export const useGameControllerStore = defineStore("controller", () => {
	const controller = ref<Controller>("keyboard")
	const getController = computed<Controller>(() => controller.value)

	const setController = (payload: Controller) => {
		controller.value = payload
	}

	return {controller, getController, setController}
})