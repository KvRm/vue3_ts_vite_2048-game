import {Side} from "../types";

import {useCellsStore} from "../stores";
import {computed} from "vue";

export const makeMove = (side: Side): void => {
	const store = useCellsStore()

	const cells = computed<number[][]>(() => store.getCells)

	switch (side) {
		case "left":
			swipeLeft()
			break
		case "right":
			swipeRight()
			break
		case "up":
			swipeUp()
			break
		case "down":
			swipeDown()
			break
	}

	addRandomNumber()

	function addRandomNumber() {
		const zeroIndexes: number[][] = getZeroIndexes(cells.value)

		if (zeroIndexes.length) {
			const randomIndex: number = getRandomIndex(zeroIndexes.length - 1)
			const randomNumber: 4 | 2 = getRandomNumber()
			store.setCell(randomNumber, zeroIndexes[randomIndex])
		}
	}

	function getRandomNumber(): 4 | 2 {
		const mathRandom: number = Math.random()

		if (mathRandom > 0.2) return 2
		return 4
	}

	function getRandomIndex(max: number): number {
		max = Math.floor(max)
		return Math.floor(Math.random() * (max + 1))
	}

	function getZeroIndexes(cells: number[][]): number[][] {
		const zeroIndexes: number[][] = []

		for (let i = 0; i < cells.length; i++) {
			for (let j = 0; j < cells.length; j++) {
				if (cells[i][j] === 0)
					zeroIndexes.push([i, j])
			}
		}

		return zeroIndexes
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

	function getNonReactiveReversedCells(cells: number[][]) {
		let newCells: number[][] = []
		for (let j = 0; j < cells.length; j++) {
			let arr: number[] = []
			for (let i = 0; i < cells.length; i++)
				arr.push(cells[i][j])
			newCells.push(arr)
		}

		return newCells
	}

	function getCellsWithoutZeros(cells: number[][]): number[][] {
		return cells.map(c => c.filter(e => e !== 0))
	}

	function swipeLeft(): void {
		let newCells: number[][] = getNonReactiveCells(cells.value)

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

	function swipeRight(): void {
		let newCells: number[][] = getNonReactiveCells(cells.value)

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

	function swipeUp() {
		let newCells: number[][] = getNonReactiveReversedCells(cells.value)

		newCells = getCellsWithoutZeros(newCells)
		unitCellsOnSwipeUp(newCells)
		newCells = getCellsWithoutZeros(newCells)
		addZerosOnSwipeUp(newCells)
		newCells = getNonReactiveReversedCells(newCells)

		store.setCells(newCells)

		function addZerosOnSwipeUp(cells: number[][]): void {
			cells.forEach(c => {
					while (c.length < 4) c.push(0)
				}
			)
		}

		function unitCellsOnSwipeUp(cells: number[][]): void {
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

	function swipeDown() {
		let newCells: number[][] = getNonReactiveReversedCells(cells.value)

		newCells = getCellsWithoutZeros(newCells)
		unitCellsOnSwipeDown(newCells)
		newCells = getCellsWithoutZeros(newCells)
		addZerosOnSwipeDown(newCells)
		newCells = getNonReactiveReversedCells(newCells)

		store.setCells(newCells)

		function addZerosOnSwipeDown(cells: number[][]): void {
			cells.forEach(c => {
					while (c.length < 4) c.unshift(0)
				}
			)
		}

		function unitCellsOnSwipeDown(cells: number[][]): void {
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