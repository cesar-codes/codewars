/* Color Ghosts
https://www.codewars.com/kata/53f1015fa9fe02cbda00111a
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated
*/

var Ghost = function() {
    let colors = ["white", "yellow", "purple", "red"]
    let index = Math.floor(Math.random() * colors.length)
    this.color = colors[index]
  };