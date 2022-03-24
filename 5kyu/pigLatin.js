/* Simple Pig Latin
https://www.codewars.com/kata/520b9d2ad5c005041100000f
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
*/

const pigIt = str => {
    str = str.trim().split(/\s{1,}/);
      return str.map(val => {
          if (/^[A-Za-z]+$/.test(val)) {
              return `${val.slice(1)}${val.slice(0, 1)}ay`;
          }
          return val;
      }).join(' ');
  }

  const pigIt = str => {
    return str
      .split(" ")
      .map(word =>`${ word.substring(1)}${word.split('').shift()}${word.charCodeAt(0) > 63 ? 'ay' : '' }`)
      .join(" ");
   }