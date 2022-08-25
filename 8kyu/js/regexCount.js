/* Regex count lowercase letters
https://www.codewars.com/kata/56a946cd7bd95ccab2000055
Your task is simply to count the total number of lowercase letters in a string.
 */
const lowercaseCount = str => (str.match(/[a-z]/g) || []).length
