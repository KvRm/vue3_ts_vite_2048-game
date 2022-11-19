import {useCellsStore} from "../../stores";
import {ArraySide} from "../../types";

export const useCells = () => {
	const getCells = (cells: number[][]): number[][] =>
		cells.map(c => c.map(e => e))

	const getReversedCells = (cells: number[][]): number[][] => {
		let newCells: number[][] = []
		for (let j = 0; j < cells.length; j++) {
			let arr: number[] = []
			for (let i = 0; i < cells.length; i++)
				arr.push(cells[i][j])
			newCells.push(arr)
		}

		return newCells
	}

	const getCellsWithoutZeros = (cells: number[][]): number[][] =>
		cells.map(c => c.filter(e => e !== 0))

	const getUnitedCells = (cells: number[][], arraySide: ArraySide): number[][] => {
		const newCells = cells

		if (arraySide === "start") {
			newCells.forEach(c => {
				for (let i = 0; i < c.length; i++) {
					if (c[i] === c[i + 1]) {
						c[i] *= 2
						c[i + 1] = 0
					}
				}
			})
		}

		if (arraySide === "end") {
			newCells.forEach(c => {
				for (let i = c.length - 1; i >= 0; i--) {
					if (c[i] === c[i - 1]) {
						c[i] *= 2
						c[i - 1] = 0
					}
				}
			})
		}

		return newCells
	}

	const getCellsWithZeros = (cells: number[][], arraySide: ArraySide): number[][] => {
		const newCells = cells

		if (arraySide === "start") {
			cells.forEach(c => {
					while (c.length < 4) c.push(0)
				}
			)
		}

		if (arraySide === "end") {
			cells.forEach(c => {
					while (c.length < 4) c.unshift(0)
				}
			)
		}

		return newCells
	}

	const addRandomNumberToCells = (cells: number[][]): void => {
		const cellsStore = useCellsStore()
		const zeroIndexesCells: number[][] = getZeroIndexesFromCells(cells)

		if (zeroIndexesCells.length) {
			const randomIndex: number = getRandomIndexFromCells(zeroIndexesCells)
			const randomNumber: 4 | 2 = getNewCellRandomNumber()
			cellsStore.setCell(randomNumber, zeroIndexesCells[randomIndex])
		}

		function getZeroIndexesFromCells(cells: number[][]): number[][] {
			const zeroIndexes: number[][] = []

			for (let i = 0; i < cells.length; i++) {
				for (let j = 0; j < cells.length; j++) {
					if (cells[i][j] === 0)
						zeroIndexes.push([i, j])
				}
			}

			return zeroIndexes
		}

		function getNewCellRandomNumber(): 4 | 2 {
			const mathRandom: number = Math.random()
			if (mathRandom > 0.2) return 2
			return 4
		}

		function getRandomIndexFromCells(cells: number[][]): number {
			const max = cells.length - 1
			return Math.floor(Math.random() * (Math.floor(max) + 1))
		}
	}

	return {
		getCells,
		getReversedCells,
		getCellsWithoutZeros,
		getCellsWithZeros,
		getUnitedCells,
		addRandomNumberToCells
	}
}