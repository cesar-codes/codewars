/* Shifty Closures
https://www.codewars.com/kata/514aa0dc21607ae236000017
Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?
*/
let name
let greet_abe = function() {
  name = 'Abe'
  return "Hello, " + name + '!';
};
let greet_ben = function() {
  name = 'Ben';
  return "Hello, " + name + '!';
};
