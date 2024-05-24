import { dayOneInputString } from "./resources/day-one-input";

/**
 * --- Day 1: Trebuchet?! ---
Something is wrong with global snow production, and you've been selected to take a look. The Elves have even given you a map; on it, they've used stars to mark the top fifty locations that are likely to be having problems.

You've been doing this long enough to know that to restore snow operations, you need to check all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

You try to ask why they can't just use a weather machine ("not powerful enough") and where they're even sending you ("the sky") and why your map looks mostly blank ("you sure ask a lot of questions") and hang on did you just say the sky ("of course, where do you think snow comes from") when you realize that the Elves are already loading you into a trebuchet ("please hold still, we need to strap you in").

As they're making the final adjustments, they discover that their calibration document (your puzzle input) has been amended by a very young Elf who was apparently just excited to show off her art skills. Consequently, the Elves are having trouble reading the values on the document.

The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

For example:

1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet

In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.

Consider your entire calibration document. What is the sum of all of the calibration values?
 * 
 */

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

const inputString: string = dayOneInputString;

/**
 * @param str - The input string to search.
 * @returns {object | undefined} An object with firstNumber and lastNumber properties or undefined.
 *
 * @description Returns the first and last occurrence of a number in the given string.
 * Returns `undefined` if no numbers are found.
 * Returns the same number as first and last if there's only one number present.
 */
const findFirstAndLastNumbersInString = (str: string): { firstNumber: number; lastNumber: number } | undefined => {
  if (typeof str !== "string") {
    throw new Error("Invalid Input: Provide a valid string");
  }

  // Create an array of all the numbers in the given string
  const numbersInString = str.match(/\d/g);

  // If no numbers are found, return undefined
  if (numbersInString == null) {
    return undefined;
  }

  // Get first and last items of the numbers array
  let firstNumber = Number(numbersInString[0]);
  let lastNumber = Number(numbersInString[numbersInString.length - 1]);

  return { firstNumber, lastNumber };
};

/**
 * @param input - The multi-line input string containing the data.
 * @returns {number} The sum of the calibration values.
 *
 * @description Computes the calibration value from the input string.
 */
export const findCalibrationValue = (input: string): number => {
  // Split the array by new line
  const inputArray: string[] = input.split(/\r?\n/);

  // Keep track of the total sum
  let sum: number = 0;

  inputArray.forEach((value) => {
    // Trim the value to remove any whitespaces
    const firstAndLastNumbers = findFirstAndLastNumbersInString(value.trim());

    if (firstAndLastNumbers) {
      const { firstNumber, lastNumber } = firstAndLastNumbers;

      // Consider first and last as two digit single number instead of two different numbers
      sum += Number(`${firstNumber}${lastNumber}`);
    }
  });

  return sum;
};

console.log(findCalibrationValue(inputString));
