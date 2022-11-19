import {Side} from "../../types";
import {canMove} from "./canMove";
import {useSwipe} from "./useSwipe";

export const makeMove = (side: Side): void => {
	const {swipeLeft, swipeRight, swipeUp, swipeDown} = useSwipe()

	switch (side) {
		case "left":
			if (canMove("left"))
				swipeLeft()
			break
		case "right":
			if (canMove("right"))
				swipeRight()
			break
		case "up":
			if (canMove("up"))
				swipeUp()
			break
		case "down":
			if (canMove("down"))
				swipeDown()
			break
	}

	if (
		!canMove("left") &&
		!canMove("right") &&
		!canMove("up") &&
		!canMove("down")
	) {
		console.log('game over')
		return
	}
}