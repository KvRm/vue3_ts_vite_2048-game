export class NumberBlock {
	position: Position
	x: number
	y: number
	w: number
	h: number
	speed: number

	constructor(position: Position, size: 120 | 85) {
		this.position = position
		this.x = (position.lineX - 1) * size
		this.y = (position.lineY - 1) * size
		this.w = size
		this.h = size
		this.speed = 0
	}

	moveRight() {
		this.speed = 40
		this.x += this.speed
	}

	moveLeft() {
		this.speed = 40
		this.x -= this.speed
	}

	moveUp() {
		this.speed = 40
		this.y -= this.speed
	}

	moveDown() {
		this.speed = 40
		this.y += this.speed
	}

	stop() {
		this.speed = 0
	}

	drawRect(ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = "#fff"
		ctx.fillRect(this.x, this.y, this.w, this.h)
	}
}

interface Position {
	lineX: LineNumber
	lineY: LineNumber
}

type LineNumber = 1 | 2 | 3 | 4