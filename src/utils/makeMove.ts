import {Side} from "../types";
import {NumberBlock} from "../types/Models/NumberBlock";

const gameWorker = new Worker("../src/utils/gameWorker.ts")

let moveSide: Side | null = null

export const makeMove = (): void => {
	const canvas: HTMLCanvasElement = document.getElementById("playground") as HTMLCanvasElement
	const ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D

	let numberBlock1 = new NumberBlock({lineY: 1, lineX: 1}, 120)


	const move = () => {
		console.log('move')
		if (moveSide === "right")
			numberBlock1.moveRight()
		else if (moveSide === "left")
			numberBlock1.moveLeft()
		else if (moveSide === "up")
			numberBlock1.moveUp()
		else if (moveSide === "down")
			numberBlock1.moveDown()
		else numberBlock1.stop()
	};

	const clear = () => {
		ctx.clearRect(0, 0, 800, 800)
	};

	const update = () => {
		clear()
		numberBlock1.drawRect(ctx)
		move()
		ctx.save()
		requestAnimationFrame(update)
	};

	update()
};

export const changeSide = (side: Side) => {
	moveSide = side
}