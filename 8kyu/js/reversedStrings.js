/* Reversed Strings
https://www.codewars.com/kata/5168bb5dfe9a00b126000018
Complete the solution so that it reverses the string passed into it.
 */
function solution(str){
    let myStr = str.split("")
    myStr = myStr.reverse()
    myStr = myStr.join("")
    return myStr
  }