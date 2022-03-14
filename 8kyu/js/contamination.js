/* Contamination #1 -String-
https://www.codewars.com/kata/596fba44963025c878000039
An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.


*/
function contamination(text, char){
    text = text.split('')
    for (let i = 0; i<text.length; i++){
      text[i] = char
    }
    return text.join('')
  }