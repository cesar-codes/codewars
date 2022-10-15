/* Check three and two
https://www.codewars.com/kata/5a9e86705ee396d6be000091
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
 */
function checkThreeAndTwo(array) {
    let ac = 0, bc = 0, cc = 0
    for (let i = 0; i < array.length; i++){
      if (array[i] === 'a') ac++
      else if (array[i] === 'b') bc++
      else cc++
    }
    let tots = [ac, bc, cc]
    return (tots.includes(3) && tots.includes(2))
    
  }
  