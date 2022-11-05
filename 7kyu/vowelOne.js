/* Vowel one
https://www.codewars.com/kata/580751a40b5a777a200000a1
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"
 */
function vowelOne(s){
    let result = ''
    s = s.toLowerCase()
    for (let i = 0; i < s.length; i++){
      if (s[i].includes('a') || s[i].includes('e') || s[i].includes('i') || s[i].includes('o') || s[i].includes('u') ) result += '1'
      else result += '0'
    }
    return result
  }
  