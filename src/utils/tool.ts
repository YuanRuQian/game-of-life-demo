export const isFunction = (input: unknown): input is Function => input instanceof Function

export const range = (size: number) => [...Array(size)].map((_, index) => index)
