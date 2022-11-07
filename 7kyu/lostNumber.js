/* Lost number in number sequence
 https://www.codewars.com/kata/595aa94353e43a8746000120
 */
function findDeletedNumber(arr, mixArr) {
  // your code
  return mixArr.reduce((a,b) => a - b, 0) - arr.reduce((a,b) => a - b, 0)
  
}


//const findDeletedNumber = (arr, mixArr) => arr.filter(num => mixArr.indexOf(num) === -1)[0] || 0