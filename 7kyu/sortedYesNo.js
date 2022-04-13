/* Sorted? Yes or no? how?
https://www.codewars.com/kata/580a4734d6df748060000045
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/
function isSortedAndHow(array) {
    let ascending = [].concat(array)
    let descending = [].concat(array)
    
    ascending = ascending.sort((a,b) => a-b).toString()
    descending = descending.sort((a,b) => b-a).toString()
    
    if (array.toString() == ascending) return "yes, ascending";
    else if (array.toString() == descending) return "yes, descending";
    else return "no"
  }
  