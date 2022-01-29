/* Divide And Conquer
https://www.codewars.com/kata/57eaec5608fed543d6000021
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number
 */
function divCon(x){
    console.log(x)
    let strs = x.filter(a => !Number.isInteger(a)).reduce((a,b)=> +a + +b, 0)
    let nums = x.filter(a => Number.isInteger(a)).reduce((a,b)=> a+b, 0)
    console.log(strs,nums)
    return +nums - +strs
  }
  