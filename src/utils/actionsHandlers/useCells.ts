import {ArraySide} from "../../types";
import {useScoreStore} from "../../stores";

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
		const scoreStore = useScoreStore()

		const newCells = cells
		if (arraySide === "start") {
			newCells.forEach(c => {
				for (let i = 0; i < c.length; i++) {
					if (c[i] === c[i + 1]) {
						c[i] *= 2
						c[i + 1] = 0
						scoreStore.increaseCurrentScore(c[i])
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
						scoreStore.increaseCurrentScore(c[i])
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

	const getCellsWithNewRandomNumber = (cells: number[][]): number[][] => {
		let newCells: number[][] = cells
		const zeroIndexesCells: number[][] = getZeroIndexesFromCells(cells)

		if (zeroIndexesCells.length) {
			const randomIndex: number = getRandomIndexFromCells(zeroIndexesCells)
			const randomNumber: 4 | 2 = getNewCellRandomNumber()

			const r: number = zeroIndexesCells[randomIndex][0]
			const c: number = zeroIndexesCells[randomIndex][1]
			newCells[r][c] = randomNumber
		}

		return newCells

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
	}

	const getStaterCells = (): number[][] => {
		const newCells: number[][] = [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		]

		const randomIndexes: number[][] = []

		for (let i = 0; randomIndexes.length < 2; i++) {
			const r: number = getRandomNumber(3)
			const c: number = getRandomNumber(3)

			if (randomIndexes.length < 1)
				randomIndexes.push([r, c])
			else if (r !== randomIndexes[0][0] && c !== randomIndexes[0][1])
				randomIndexes.push([r, c])
		}

		for (let indexes of randomIndexes) {
			const r: number = indexes[0]
			const c: number = indexes[1]

			newCells[r][c] = getNewCellRandomNumber()
		}

		return newCells

		function getRandomNumber(max: number) {
			return Math.floor(Math.random() * (Math.floor(max) + 1))
		}
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

	return {
		getCells,
		getReversedCells,
		getCellsWithoutZeros,
		getCellsWithZeros,
		getUnitedCells,
		getCellsWithNewRandomNumber,
		getStaterCells
	}
}