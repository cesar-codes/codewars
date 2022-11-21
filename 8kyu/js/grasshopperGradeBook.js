/* Grasshopper Grade Book
https://www.codewars.com/kata/55cbd4ba903825f7970000f5
 Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/


function getGrade (s1, s2, s3) {

    let grade = Math.floor( (s1 + s2 + s3) / 3 )
   
    if (grade > 89 ) return 'A'
    else if (grade > 79 ) return 'B'
    else if (grade > 69 ) return 'C'
    else if (grade > 59 ) return 'D'
    else return 'F'
    
  }
  