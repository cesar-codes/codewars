/* Polish Alphabet
https://www.codewars.com/kata/57ab2d6072292dbf7c000039
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters. */
const correctPolishLetters = string => {
    const str = string.split('')
    const lookupLetters = {
      'ą':'a', 'ć':'c', 'ę': 'e', 'ł':'l', 'ń':'n', 'ó':'o', 'ś':'s', 'ź':'z', 'ż':'z'
    }
    return str.map(x => lookupLetters[x] ? lookupLetters[x] : x).join('')
  }
  