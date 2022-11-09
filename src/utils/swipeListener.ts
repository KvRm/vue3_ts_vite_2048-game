import {getDetectedSide} from "./detectSide";
import {Side} from "../types/Side";
import {useGameControllerStore} from "../stores";
import {computed} from "vue";
import {Controller} from "../types/Controller";

export const swipe = (e: MouseEvent | TouchEvent | KeyboardEvent, playground: HTMLDivElement) => {
	const controllerStore = useGameControllerStore()
	const controller = computed<Controller>(() => controllerStore.getController)

	if (controller.value === "keyboard") {
		if ("code" in e && !e.ctrlKey) {
			keyboardSwipe(e)
		}
	} else if (controller.value === "mouse") {

		let startX: number = 0
		let startY: number = 0

		if ("clientX" in e) {
			startX = e.clientX
			startY = e.clientY
		} else if ("touches" in e) {
			startX = e?.touches[0].clientX
			startY = e?.touches[0].clientY
		}

		const onMouseMove = (e: MouseEvent | TouchEvent) => {
			const side: Side | null = getDetectedSide(e, {startX, startY})

			if (side) {
				console.log(side)
				playground.removeEventListener('mousemove', onMouseMove, false)
				playground.removeEventListener("touchmove", onMouseMove, false)
			}
		}

		playground.addEventListener("mousemove", onMouseMove)
		playground.addEventListener("touchmove", onMouseMove)

		playground.onmouseup = () => {
			playground.removeEventListener('mousemove', onMouseMove)
			playground.onmouseup = null
		}

		playground.ontouchend = () => {
			playground.removeEventListener('touchmove', onMouseMove)
			playground.ontouchend = null
		}
	}
}

const keyboardSwipe = (e: KeyboardEvent) => {
	let side: Side | null = null
	if (e.code === "ArrowUp" || e.code === "KeyW") {
		side = "up"
	}
	if (e.code === "ArrowRight" || e.code === "KeyD") {
		side = "right"
	}
	if (e.code === "ArrowDown" || e.code === "KeyS") {
		side = "down"
	}
	if (e.code === "ArrowLeft" || e.code === "KeyA") {
		side = "left"
	}
	console.log(side)
}