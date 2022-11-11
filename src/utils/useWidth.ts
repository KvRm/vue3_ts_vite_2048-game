import {CallbackFunctionVariadic} from "../types";

export const useWidth = () => {
	const addListener = (cb: CallbackFunctionVariadic) => {
		window.addEventListener('resize', () =>
			cb(window.innerWidth)
		)
	}

	const removeListener = (cb: CallbackFunctionVariadic): void => {
		window.removeEventListener('resize', () =>
			cb(window.innerWidth)
		)
	}

	return {addListener, removeListener}
}