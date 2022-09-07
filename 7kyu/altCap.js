/* Alternate capitalization
 https://www.codewars.com/kata/59cfc000aeb2844d16000075
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.*/
function capitalize(s){
    let res1 = ''
    let res2 = ''
    for(let i = 0; i < s.length; i++){
      if (i % 2 == 0) {
        res1 += s[i].toUpperCase()
      }
      else {
        res1+= s[i]
        }
      }
  
      for(let i = 0; i < s.length; i++){
      if (i % 2 == 0) {
        res2 += s[i]
      }
      else {
        res2+= s[i].toUpperCase()
        }
      }
    
    return [res1, res2]
  }
  