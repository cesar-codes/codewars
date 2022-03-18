/* Find The Parity Outlier
https://www.codewars.com/kata/5526fc09a1bbd946250002dc
You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even 
integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
*/
function findOutlier(integers){
    const filteredEven = integers.filter(a=> a%2 == 0)
    const filteredOdd = integers.filter(a=> a%2 != 0)
    return filteredEven.length == 1 ? filteredEven[0] : filteredOdd[0]
  }