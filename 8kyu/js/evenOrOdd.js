/* Even or Odd
https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


*/
//   Refactored
function even_or_odd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
  }

//   function even_or_odd(number) {
//     if (!number)
//   {
//     number = 2
//     return 'Even'
//   }  
//     else if (number %2 ===0){
//       return 'Even'
//     } else { return 'Odd'}
//     //number % 2 === 0 ? 'Even' : 'Odd'
//   }