/* ASCII Total
https://www.codewars.com/kata/572b6b2772a38bc1e700007a
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

 */

function uniTotal (string) {
    let tot = 0
    console.log(string)
    for(let i = 0; i<string.length; i++){
      tot += string[i].charCodeAt() 
    }
    return tot
  }