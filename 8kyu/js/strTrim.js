/* Training JS #21: Methods of String object--trim() and the string template
https://www.codewars.com/kata/5729b103dd8bac11a900119e
Coding in function fiveLine, function accept 1 parameter:s. s is a string.

Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;

Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

Note2: Using a string template can make your job easier.
 */
function fiveLine(s){
    let a = s.trim()
    let b = ''
    for (let i = 0; i < 5; i++){
      b += a.repeat(i+1) + '\n'
    }
    return b.slice(0, -1)
  }
  