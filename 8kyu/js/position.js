/* Find the position!
https://www.codewars.com/kata/5808e2006b65bff35500008f
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/
function position(letter){
    return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
  }
  