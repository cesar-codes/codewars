/* Multiply the number
https://www.codewars.com/kata/5708f682c69b48047b000e07
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers
*/
function multiply(number){
    let l = String(Math.abs(number)).length
    return number * (5**l )  
  }
  