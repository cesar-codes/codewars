/* Name Array Capping
https://www.codewars.com/kata/5356ad2cbb858025d800111d
Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.
 */
function capMe(names) {
    return names.map(elem => elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase() )
  }
  
  