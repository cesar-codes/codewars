/* Is the string uppercase?
https://www.codewars.com/kata/56cd44e1aa4ac7879200010b
Create a method to see whether the string is ALL CAPS.
*/

String.prototype.isUpperCase = function(i=true) {
    for (let i = 0; i<this.length; i++){
      console.log(this, this[i].charCodeAt())
      if (this[i].charCodeAt() >= 97) return false
    }
    return true
  }