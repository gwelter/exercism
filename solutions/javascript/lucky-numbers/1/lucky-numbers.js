// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const sum1 = array1.reduce((total, cur) => total + cur, '');
  const sum2 = array2.reduce((total, cur) => total + cur, '');
  return Number(sum1) + Number(sum2)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */

export function luckyNumber(value) {
  let number = value;
  let reverse = 0;
  while(number !== 0) {
    const lastDigit = number % 10;
    reverse = reverse * 10 + lastDigit;
    number = Math.trunc(number / 10);
  }
  return value === reverse;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) return 'Required field';

  const number = Number(input);  
  return Number.isNaN(number) || !number ? 'Must be a number besides 0' : '';
}
