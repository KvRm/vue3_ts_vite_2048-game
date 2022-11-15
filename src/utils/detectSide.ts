import {Side} from "../types";

export const getDetectedSide = (
	e: MouseEvent | TouchEvent, startPos: { startX: number, startY: number }
): Side | null => {
	const detectDistance: number = 90
	let endX: number
	let endY: number

	if ("clientX" in e) {
		endX = e?.clientX
		endY = e?.clientY
	} else {
		endX = e?.touches[0].clientX
		endY = e?.touches[0].clientY
	}

	if (startPos.startX - endX >= detectDistance)
		return "left"

	if (startPos.startX - endX <= -detectDistance)
		return "right"

	if (startPos.startY - endY >= detectDistance)
		return "up"

	if (startPos.startY - endY <= -detectDistance)
		return "down"

	return null
}