/* Count characters in your string
https://www.codewars.com/kata/52efefcbcdf57161d4000091
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/


function count (string) {  
    // The function code should be here
    // create an object
    let countObject = {}
    // loop through the str, check if the val exist
    for (const c of string) {
      if ( countObject[c] ) countObject[c]++
      else countObject[c] = 1
    }
    
    
     return countObject;
  }
  
  // function countChars(str){
  //   //create obj
  //   let countObj = {}
  //   //loop -> check val exist ? val++ : val-1
  //   for(const c of str){
  //     if( countObj[c] ){
  //       countObj[c]++
  //     }else{
  //       countObj[c] = 1
  //     }
  //   }
  
  //   return countObj
  //   }