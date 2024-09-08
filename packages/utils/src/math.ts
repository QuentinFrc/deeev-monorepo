/**
 * Returns the percentage of a value
 * @param value The value to calculate the percentage of
 * @param max The maximum value, defaults to 100
 * */
export const percent = (value: number, max = 100) => (value / max) * 100;
