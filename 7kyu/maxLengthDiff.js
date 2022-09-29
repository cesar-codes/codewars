/* Maximum Length Difference
https://www.codewars.com/kata/5663f5305102699bad000056
 You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string*/

const mxdiflg = (a1, a2) => {
    // test for empty arrays
    if (a1.length === 0 || a2.length === 0) return -1;
    //convert each array elem to their lengths
    let b1 = a1.map(str => str.length);
    let b2 = a2.map(str => str.length);
    // return the max length b1 - min length b2, and max length b2 - min length b1
    return Math.max(Math.max(...b1) - Math.min(...b2), Math.max(...b2) - Math.min(...b1)
    );
  }
  