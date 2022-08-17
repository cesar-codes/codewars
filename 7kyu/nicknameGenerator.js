/* Nickname generator
https://www.codewars.com/kata/593b1909e68ff627c9000186
Nickname Generator

Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

If the 3rd letter is a consonant, return the first 3 letters.

nickname("Robert") //=> "Rob"
nickname("Kimberly") //=> "Kim"
nickname("Samantha") //=> "Sam"
If the 3rd letter is a vowel, return the first 4 letters.

nickname("Jeannie") //=> "Jean"
nickname("Douglas") //=> "Doug"
nickname("Gregory") //=> "Greg"
If the string is less than 4 characters, return "Error: Name too short".

Notes:

Vowels are "aeiou", so discount the letter "y".
Input will always be a string.
Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
The input can be modified
 */
const nicknameGenerator = name => {
    if (name.length < 4) return 'Error: Name too short'
    else if ('aeiou'.includes(name[2])) return name.slice(0,4)
    else return name.slice(0,3)
  }
  

/* 

function nicknameGenerator(name){
  if(name.length < 4) return 'Error: Name too short'
  let result = name.slice(0,3)
  if (result[2] === ('a') || result[2] === ('e') || result[2] === ('i') || result[2] === ('o') || result[2] === ('u')) {
    result += name[3]
    return result
  }
  else return result
}

*/