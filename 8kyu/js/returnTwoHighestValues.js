/* Return the 2 highest Values in list
https://www.codewars.com/kata/57ab3c09bb994429df000a4a
In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
 */

const twoHighest = arr => [...new Set(arr)].sort((a,b) => b - a, 0).slice(0, 2)


/* function twoHighest(arr) {
    let result = [...new Set(arr)]
    if (result.length === 0) return []
    else if (result.length === 1) return result
    result = result.sort((a,b) => b - a, 0)
    return [result[0], result[1]]
  } */