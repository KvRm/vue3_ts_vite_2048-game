import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {Controller} from "../types";

export const useCellsStore = defineStore("cells", () => {
	const cells = ref<number[][]>([
		[2, 0, 0, 0],
		[2, 2, 2, 2],
		[4, 0, 0, 0],
		[4, 0, 0, 0]
	])

	const getCells = computed<number[][]>(() => cells.value)

	const setCells = (payload: number[][]): void => {
		cells.value = payload
	}

	const setCell = (payload: number, index: number[]): void => {
		try {
			const c: number = index[0]
			const r: number = index[1]

			const canSet: boolean = (c >= 0 && c <= 3) && (r >= 0 && r <= 3)
			if (canSet)
				cells.value[c][r] = payload
		} catch (e) {
			console.log(e)
		}
	}

	return {cells, getCells, setCells, setCell}
})

export const useGameControllerStore = defineStore("controller", () => {
	const controller = ref<Controller>("keyboard")
	const getController = computed<Controller>(() => controller.value)

	const setController = (payload: Controller) => {
		controller.value = payload
	}

	return {controller, getController, setController}
})