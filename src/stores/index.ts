import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {Controller} from "../types";

export const useCellsStore = defineStore("cells", () => {
	const cells = ref<number[]>([])
	const getCells = computed<number[]>(() => cells.value)

	const setCells = (payload: number[]): void => {
		cells.value = payload
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