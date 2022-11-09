/* array.diff
https://www.codewars.com/kata/523f5d21c841566fde000009
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/


const arrayDiff = (a,b) => a.filter(s => !b.includes(s))


/* 
function arrayDiff(a, b) {
  // base case, rule out any empty arrays
  if (a.length === 0 || b.length === 0) return a
  //create a new set to remove dupes
  let newSet = new Set(b)
  // filter out a using !has for anything in the new set
  return a.filter(n => !newSet.has(n))
}
*/