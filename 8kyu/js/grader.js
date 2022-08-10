/* Grader
https://www.codewars.com/kata/53d16bd82578b1fb5b00128c
Create a function that takes a number as an argument and returns a grade based on that number.
*/
function grader(score) {
    if (score > 1) return 'F'
    else if (score < .6) return 'F'
    else if ( score >= .9) return 'A'
    else if ( score >= .8) return 'B'
    else if (score >= .7) return 'C'
    else if (score >= .6) return 'D'
  }
  