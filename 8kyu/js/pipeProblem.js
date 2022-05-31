/* Lario and Muigi Pipe Problem
https://www.codewars.com/kata/56b29582461215098d00000f
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

Task
Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).


*/
const pipeFix = numbers => {
    let min = Math.min(...numbers), max = Math.max(...numbers)
    let nums = []
    for (let i = min; i<=max; i++){
      nums.push(i)
    }
    return nums
  }
  