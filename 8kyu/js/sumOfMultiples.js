/* Sum of Multiples
https://www.codewars.com/kata/57241e0f440cd279b5000829
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
 */
function sumMul(n,m){
    let sum = 0
    if ( n < 1 || m < 1) return 'INVALID'
    for (let i = 1; i*n<m; i++){
      sum += i * n
      }
    return sum
  }