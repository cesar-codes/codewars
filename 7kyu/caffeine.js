/* Caffeine Script
https://www.codewars.com/kata/5434283682b0fdb0420000e6
Complete the function caffeineBuzz, which takes a non-zero integer as its argument.

If the integer is divisible by 3, return the string "Java".

If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

If one of the condition above is true and the integer is even, add "Script" to the end of the string.

If none of the condition is true, return the string "mocha_missing!"
*/
function caffeineBuzz(n){
    let result = ''
    if (n % 3 == 0 && n % 4 == 0) result = 'Coffee'
    else if (n % 3 == 0 ) result = 'Java'
    else return "mocha_missing!"
    if (n % 2 == 0) result += 'Script'
    return result
  }
  