/* Roman Numerals Encoder
https://www.codewars.com/kata/51b62bf6a9c58071c600001b
Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

*/
function solution(number){
    // convert the number to a roman numeral
    let roman = ''
    while (number >= 1000) {
      number -= 1000
      roman += 'M'
    }
    
    while (number >= 500) {
      if (number >= 900) {
        number -= 900
        roman += 'CM'
      } else {
        number -= 500
        roman += 'D'
      }
    }
    
    while (number >= 100){
      if (number >= 400) {
        number -= 400
        roman += 'CD'
      } else {
        number -= 100
        roman += 'C'
      }
    }
    
    while (number >= 50) {
      if (number >= 90) {
        number -= 90
        roman += 'XC'
      } else {
        number -= 50
        roman += 'L'
      }
    }
    
    while (number >= 10) {
      if (number >= 40) {
        number -= 40
        roman += 'XL'
      } else {
        number -= 10
        roman += 'X'
      }
    }
    
    while (number >= 5){
      if (number >= 9){
        number -= 9
        roman += 'IX'
      } else {
        number -= 5
        roman += 'V'
      }
    }
    
    while (number > 0) {
      if (number >= 4) {
        number -= 4
        roman += 'IV'
      } else {
        number -= 1
        roman += 'I'
      }
    }
    
    return roman
  }
  
  