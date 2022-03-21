/* Replace With Alphabet Position
https://www.codewars.com/kata/546f922b54af40e1e90001da
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
*/
const alphabetPosition = text => text.split('')
.filter(a => /[a-zA-Z]/.test(a))
.map(a => a.toLowerCase()
    .charCodeAt(0)-96)
.join(' ');