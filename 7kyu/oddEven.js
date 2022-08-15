/* Odd Even String Sort
https://www.codewars.com/kata/580755730b5a77650500010c
Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces */
function sortMyString(S) {
    let one = '', two = ''
    for (let i = 0; i < S.length; i++){
      if (i  % 2 == 0) one += S[i]
      else two += S[i]
    }
    return `${one} ${two}`
  }
  