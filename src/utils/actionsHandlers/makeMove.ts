import {Side} from "../../types";
import {canMove} from "./canMove";
import {useSwipe} from "./useSwipe";
import {useGameStore} from "../../stores";

export const makeMove = (side: Side): void => {
	const {swipeLeft, swipeRight, swipeUp, swipeDown} = useSwipe()
	const gameStore = useGameStore()

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
		gameStore.setGameState("over")
	}
}