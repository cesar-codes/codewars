/* Bingo or not
https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145
For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
 */
function bingo(a) {
    // your winning code here
    let counter = 0
    for ( let i = 0; i < a.length; i++){
      if (a[i] == 2) counter++
      if (a[i] == 7) counter++
      if (a[i] == 9) counter++
      if (a[i] == 14) counter++
      if (a[i] == 15) counter++
    }
    console.log(a, counter)
    return counter >= 5 ? 'WIN' : 'LOSE'
}  