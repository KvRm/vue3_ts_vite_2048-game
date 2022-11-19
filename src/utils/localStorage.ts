export enum LSKeys {
	THEME = 'THEME',
	GAME_CONTROLLER = 'GAME_CONTROLLER',
	CELLS = 'CELLS',
	GAME_STATE = 'GAME_STATE',
	CURRENT_SCORE = 'CURRENT_SCORE',
	RECORD_SCORE = 'RECORD_SCORE'
}

export const useLocalStorage = () => {
	const get = (key: LSKeys): string | null =>
		window.localStorage.getItem(key)

	const set = (key: LSKeys, payload: string): void =>
		window.localStorage.setItem(key, payload)

	const remove = (key: LSKeys): void =>
		window.localStorage.removeItem(key)

	const reset = (): void =>
		window.localStorage.clear()

	return {get, set, remove, reset}
}