/* Sum of Array Singles
https://www.codewars.com/kata/59f11118a5e129e591000134
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.
 */
const repeats = arr => arr.filter( v => arr.indexOf(v) === arr.lastIndexOf(v) ).reduce( (a,b) => a+b, 0 )


/* function repeats(arr){
    console.log(arr)
    let nonRepeats = []
    for (let i = 0; i < arr.length; i++){
      console.log(arr.indexOf(arr[i]), arr.lastIndexOf(arr[i]))
      if ( arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i]) ) nonRepeats.push(arr[i])
    }
    return nonRepeats.reduce((a,b) => a + b, 0)
  }; */
  