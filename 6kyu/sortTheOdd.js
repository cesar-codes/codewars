/* Sort The Odd
 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
 You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

 */
function sortArray(array) {
    // create an array of the sorted odd numbers
    let sortedOdds = array
    // filter for odds
    .filter(n => n % 2 !== 0)
    // sort the odds
    .sort((a,b) => a - b)
    
    //return a sorted array with map 
    return array
      // return evens or sorted odds in place with shift
      .map(n => n % 2 === 0 ? n : sortedOdds.shift())
    }
  

/* 
 function sortArray(array) {
    // Return a sorted array.
    let oddNums = array
    // filter for odds
    .filter(n => n % 2 !== 0)
    // sort odds
    .sort((a,b) => b - a)
    // map in place, replaceing odds for sorted odd using shift
    // if even return tne number
    // if odd, shift the next number from oddNums
    return array.map(n => n % 2 === 0 ? n : oddNums.pop())
    
    console.log(oddNums)
  }
   */