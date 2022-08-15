/* sPoNgEbOb MeMe
https://www.codewars.com/kata/5982619d2671576e90000017
You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

Example:

input:  "stop Making spongebob Memes!"
output: "StOp mAkInG SpOnGeBoB MeMeS!"

 */
const spongeMeme = sentence => sentence.split('').map((a, b) => b % 2 == 0 ? a.toUpperCase() : a.toLowerCase()).join('')
