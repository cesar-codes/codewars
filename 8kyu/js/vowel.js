/* Is there a vowel in there/
https://www.codewars.com/kata/57cff961eca260b71900008f
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array. */
function isVow(a){
    let result = []
    for (let i = 0; i < a.length; i++){
    if (a[i]===97 || a[i]===101 || a[i]===105 || a[i]===111 || a[i]===117) {
      result.push(String.fromCharCode(a[i]))
    }
      else result.push(a[i])
    }
    return result
  }
  
  