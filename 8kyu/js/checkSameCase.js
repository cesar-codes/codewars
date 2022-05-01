/* Check same case
https://www.codewars.com/kata/5dd462a573ee6d0014ce715b
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1


*/
const sameCase = (a,b) => {
    //nonletters return the same thing if toUpper/LowerCase()
    if(a.toUpperCase()===a.toLowerCase() || b.toLowerCase()===b.toUpperCase()) return -1
    //check case, then check if same case
    else if(a===a.toLowerCase() && b===b.toLowerCase() || a===a.toUpperCase() && b===b.toUpperCase()) return 1
    else return 0
  }

  const checkUpperCasing = (a, b) =>
  a.toUpperCase() === a && b.toUpperCase() === b;
const checkLowerCasing = (a, b) =>
  a.toLowerCase() === a && b.toLowerCase() === b;
const checkIfCharacter = (a, b) => a.match(/[a-z]/i) && b.match(/[a-z]/i);

const sameCase = (a, b) =>
  checkIfCharacter(a, b) && (checkUpperCasing(a, b) || checkLowerCasing(a, b))
    ? 1
    : checkIfCharacter(a, b)
    ? 0
    : -1;
