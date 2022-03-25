/* Opposites Attract
https://www.codewars.com/kata/555086d53eac039a2a000083
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/
function lovefunc(flower1, flower2){
    // moment of truth
    let f1 = true
    let f2 = true
    if (flower1 % 2 === 0) {
      f1 = true
    } else f1 = false;
    if (flower2 % 2 === 0) {
      f2 = true
    } else f2 = false;
    if (f1 == f2) {
      return false
    } else if (f1 != f2){
      return true;
    }
  }