/* Implement isObjectEmpty function
https://www.codewars.com/kata/624df07f48a8be003eec2c4d 
You should implement isObjectEmpty function that returns true if the object is empty and false if the object has properties.

Examples
isObjectEmpty({}); // -> true
isObjectEmpty({a: 1}); // -> false
Notes
We don't have to check Symbol properties in this kata
We don't have to check prototype properties in this kata
*/
const isObjectEmpty = (obj) => {
    for(let prop in obj) {
      if(obj.hasOwnProperty(prop))
        return false;
      }
      return true;
  };
  