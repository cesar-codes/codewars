/* Character Frequency
https://www.codewars.com/kata/548ef5b7f33a646ea50000b2
Welcome, Warrior! In this kata, you will get a message and you will need to get the frequency of each and every character!

Explanation
Your function will be called char_freq/charFreq/CharFreq and you will get passed a string, you will then return a dictionary (object in JavaScript) with as keys the characters, and as values how many times that character is in the string. You can assume you will be given valid input. */
function charFreq(message) {
    let counter = {}
    for (letter of message) {
      counter[letter] ? counter[letter]++ : counter[letter] = 1
    }
    return counter
  }
  