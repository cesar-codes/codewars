/* Array Combinations
https://www.codewars.com/kata/59e66e48fc3c499ec5000103
In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.
 */
function solve(arr) {
    console.log(arr)
    let mySets = arr.map(arr => arr = [...new Set(arr)])
    //let myResult = mySets.reduce((a,b) => a.length + b.length, 0)
    
    let myResults = 1
    for (let i = 0; i < mySets.length; i++){
      console.log(mySets[i].length)
      myResults *= mySets[i].length
    }
    return myResults
  };
  