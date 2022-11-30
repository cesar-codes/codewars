/* Remove Consecutive Words
https://www.codewars.com/kata/5b39e91ee7a2c103300018b3
our task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
*/

const removeConsecutiveDuplicates = s => {
    s = s.split(' ')
    let t = []
    for (let i = 0; i < s.length; i++){
      if (s[i] !== s[i + 1]) t.push(s[i])
    }
    return t.join(' ')
  }