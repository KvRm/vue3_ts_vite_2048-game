import {Side} from "../../types";
import {computed} from "vue";
import {useCellsStore} from "../../stores";
import {useCells} from "./useCells";

export const canMove = (side: Side): boolean => {
	const cellsStore = useCellsStore()
	const cells = computed<number[][]>(() => cellsStore.getCells)
	const {getReversedCells} = useCells()

	const zeroBefore = (cell: number[]): boolean => {
		const firstZeroIndex: number = cell.indexOf(0)
		let lastNumberIndex: number = -1
		for (let i = 0; i < cell.length; i++)
			if (cell[i]) lastNumberIndex = i

		if (lastNumberIndex !== -1 && firstZeroIndex !== -1)
			return lastNumberIndex > firstZeroIndex

		return false
	}

	const zeroAfter = (cell: number[]): boolean => {
		const lastZeroIndex: number = cell.lastIndexOf(0)
		let firstNumberIndex: number = -1
		for (let i = cell.length - 1; i >= 0; i--)
			if (cell[i]) firstNumberIndex = i

		if (firstNumberIndex !== -1 && lastZeroIndex !== -1)
			return firstNumberIndex < lastZeroIndex

		return false
	}

	const canSum = (cell: number[]): boolean => {
		for (let i = 1; i < cell.length; i++)
			if (cell[i] === cell[i - 1] && cell[i] !== 0)
				return true

		return false
	}

	switch (side) {
		case "left": {
			for (let cell of cells.value)
				if (zeroBefore(cell) || canSum(cell)) return true
			return false
		}
		case "right": {
			for (let cell of cells.value)
				if (zeroAfter(cell) || canSum(cell)) return true
			return false
		}
		case "up": {
			const reversedCells = getReversedCells(cells.value)
			for (let cell of reversedCells)
				if (zeroBefore(cell) || canSum(cell)) return true
			return false
		}
		case "down": {
			const reversedCells = getReversedCells(cells.value)
			for (let cell of reversedCells)
				if (zeroAfter(cell) || canSum(cell)) return true
			return false
		}
	}

	return false
}