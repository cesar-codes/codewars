/* Array Plus Array
https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/
const arrayPlusArray = (arr1, arr2) => {
    return arr1.reduce((a,b) => a+b) + arr2.reduce((a,b) => a+b)  
  }