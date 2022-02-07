/* Square(n) Sum
https://www.codewars.com/kata/515e271a311df0350d00000f
*/
const squareSum = numbers => numbers.reduce((sum, num)=> (num*num) + sum, 0)
/* 6 days agoRefactor
const squareSum = numbers => numbers.reduce((a,b)=>(b*b)+a,0)
6 days agoRefactor
const squareSum = numbers => {
  let total = 0;
  for (let i = 0; i < numbers.length; i++){
    total += numbers[i]*numbers[i]
  }
  return total
}
 */