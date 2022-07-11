/* Char Code Calculation
https://www.codewars.com/kata/57f75cc397d62fc93d000059
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:
*/
function calc(x){
    let total1 = []
    x = x.split("")
      for(let i=0;i<x.length;i++){
      total1.push(x[i].charCodeAt(0))
      }
      total1 = total1.join("")
      let total2 = total1.replace(/7/g,1)
        total1 = total1.split("").map(Number)
        total2 = total2.split("").map(Number)
    return total1.reduce((a,b) => a+b)-total2.reduce((a,b)=> a+b)
  }                     