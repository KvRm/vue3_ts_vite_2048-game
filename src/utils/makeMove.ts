import {Side} from "../types";
import {useCellsStore} from "../stores";
import {computed} from "vue";

export const makeMove = (side: Side): void => {
	const store = useCellsStore()

	const cells = computed<number[][]>(() => store.getCells)

	if (side === "left" || side === "right") {
		let newCells: number[][] = getNonReactiveCells(cells.value)

		if (side === "left")
			swipeLeft(newCells)

		if (side === "right")
			swipeRight(newCells)
	}

	function getNonReactiveCells(cells: number[][]) {
		let newCells: number[][] = []
		cells.forEach(c => {
			let arr: number[] = []
			c.forEach(c => arr.push(c))
			newCells.push(arr)
		})

		return newCells
	}

	function getCellsWithoutZeros(cells: number[][]): number[][] {
		return cells.map(c => c.filter(e => e !== 0))
	}

	function swipeLeft(newCells: number[][]): void {
		newCells = getCellsWithoutZeros(newCells)
		unitCellsOnSwipeLeft(newCells)
		newCells = getCellsWithoutZeros(newCells)
		addZerosOnSwipeLeft(newCells)
		store.setCells(newCells)

		function addZerosOnSwipeLeft(cells: number[][]): void {
			cells.forEach(c => {
					while (c.length < 4) c.push(0)
				}
			)
		}

		function unitCellsOnSwipeLeft(cells: number[][]): void {
			cells.forEach(c => {
				for (let i = 0; i < c.length; i++) {
					if (c[i] === c[i + 1]) {
						c[i] *= 2
						c[i + 1] = 0
					}
				}
			})
		}
	}

	function swipeRight(newCells: number[][]): void {
		newCells = getCellsWithoutZeros(newCells)
		unitCellsOnSwipeRight(newCells)
		newCells = getCellsWithoutZeros(newCells)
		addZerosOnSwipeRight(newCells)
		store.setCells(newCells)

		function addZerosOnSwipeRight(cells: number[][]): void {
			cells.forEach(c => {
					while (c.length < 4) c.unshift(0)
				}
			)
		}

		function unitCellsOnSwipeRight(cells: number[][]): void {
			cells.forEach(c => {
				for (let i = c.length - 1; i >= 0; i--) {
					if (c[i] === c[i - 1]) {
						c[i] *= 2
						c[i - 1] = 0
					}
				}
			})
		}
	}
}
