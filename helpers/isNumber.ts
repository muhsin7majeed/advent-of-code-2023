/**
 * @param n - The input to check.
 * @returns {boolean} True if the input is a number, false otherwise.
 *
 * @description Check if given input is number or not.
 * ```
 * // These will return true:
 * "0", 0, "123"
 * // While these return false:
 * "abc123", "abc", NaN, []
 * ```
 */
const isNumber = (n: any): boolean => {
  return !isNaN(parseFloat(n)) && !isNaN(n - 0);
};

export default isNumber;
