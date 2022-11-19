import {useCellsStore} from "../../stores";
import {computed} from "vue";
import {useCells} from "./useCells";
import {ArraySide, Side} from "../../types";

export const useSwipe = () => {
	const swipeLeft = (): void => swipe("left")
	const swipeRight = (): void => swipe("right")
	const swipeUp = (): void => swipe("up")
	const swipeDown = (): void => swipe("down")

	return {
		swipeLeft,
		swipeRight,
		swipeUp,
		swipeDown
	}
}

function swipe(side: Side): void {
	const store = useCellsStore()
	const cells = computed<number[][]>(() => store.getCells)
	const {
		getCells,
		getReversedCells,
		addRandomNumberToCells,
		getCellsWithoutZeros,
		getCellsWithZeros,
		getUnitedCells
	} = useCells()

	let newCells: number[][]
	let arraySide: ArraySide

	side === "up" || side === "down" ?
		newCells = getReversedCells(cells.value) :
		newCells = getCells(cells.value)

	side === "left" || side === "up" ?
		arraySide = "start" :
		arraySide = "end"

	newCells = getCellsWithoutZeros(newCells)
	newCells = getUnitedCells(newCells, arraySide)
	newCells = getCellsWithoutZeros(newCells)
	newCells = getCellsWithZeros(newCells, arraySide)

	if (side === "up" || side === "down")
		newCells = getReversedCells(newCells)

	store.setCells(newCells)
	addRandomNumberToCells(newCells)
}