export type CallbackFunction = () => void;
export type CallbackFunctionVariadic = (...args: any[]) => void;
export type CallbackFunctionVariadicAnyReturn = (...args: any[]) => any;

export type ArraySide = "start" | "end"