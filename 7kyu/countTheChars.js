/* Count the characters
https://www.codewars.com/kata/577ad961ae2807182f000c29
The goal of this kata is to write a function that takes two inputs: a string and a character. The function will count the number of times that character appears in the string. The count is case insensitive.

For example:

countChar("fizzbuzz","z") => 4
countChar("Fancy fifth fly aloof","f") => 5
The character can be any alphanumeric character.
*/
function countChar(string, char) {
    // your mission, should you choose to accept it. 
    string = string.toLowerCase()
    char = char.toLowerCase()
    let counter = 0
    for (let i = 0; i < string.length; i++){
      if (string[i] === char) counter++
    }
    return counter
  }
  