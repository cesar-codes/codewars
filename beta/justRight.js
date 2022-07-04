/* Code-ilocks. This exercise is JUST RIGHT!
https://www.codewars.com/kata/58063f6c6d88be7cc200006b
 Code-ilocks has found the cabin of the Three Objs. As she goes through she sees several Arrays of Strings that vary in quality.

Task
Create a function that will replace the String that is "Just Right" with "Code-ilocks". Make sure if the Element is "too much" that she doesn't end up in that index!

Example:
["Too Big","Too Small","Just Right"] => ["Too Big","Too Small","Code-ilocks"]
*/
function whichOne(arr) {
    console.log(arr)
    arr = arr.map(a => a.replace('Just Right', 'Code-ilocks'))
    return arr
  }
  