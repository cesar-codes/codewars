/* Sum Mixed Array
https://www.codewars.com/kata/57eaeb9578748ff92a000009
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

*/
/* function sumMix(x){
    x = x.map(x => Number(x))
    const y = x.reduce((adder, old ) => adder += old)
    return y
  } */

  const sumMix = x => x.reduce((num, acc) => +num + +acc, 0)
