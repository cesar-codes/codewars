/* The Vowel Code
https://www.codewars.com/kata/53697be005f803751e0015aa
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

 
*/

function encode(string) {
    return string.replace(/[aeiou]/g, x => '_aeiou'.indexOf(x))
  }
  
  function decode(string) {
    return string.replace(/[1-5]/g, x => '_aeiou'.charAt(x))
  }

  /*  
  function encode(string) {
  string = string.split('')
  for (let i = 0; i < string.length; i++){
    if (string[i] == 'a') string[i] = '1'
    else if (string[i] == 'e') string[i] = '2'
    else if (string[i] == 'i') string[i] = '3'
    else if (string[i] == 'o') string[i] = '4'
    else if (string[i] == 'u') string[i] = '5'
  }
  return string.join('')
}

function decode(string) {
  string = string.split('')
  for (let i = 0; i < string.length; i++){
    if (string[i] == '1') string[i] = 'a'
    else if (string[i] == '2') string[i] = 'e'
    else if (string[i] == '3') string[i] = 'i'
    else if (string[i] == '4') string[i] = 'o'
    else if (string[i] == '5') string[i] = 'u'
  }
  return string.join('')
}


/*
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
*/
