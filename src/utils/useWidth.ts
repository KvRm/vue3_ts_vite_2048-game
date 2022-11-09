import {CallbackFunctionVariadic} from "../types";

export const useWidth = (cb: CallbackFunctionVariadic): void => {
	window.addEventListener('resize', (e) => {
		cb(window.innerWidth)
	})
}