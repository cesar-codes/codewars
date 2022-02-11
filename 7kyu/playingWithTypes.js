/* Playing with Types
https://www.codewars.com/kata/543e308b23ccbda148001526
JavaScript is a dynamically typed programming language. This means that you don't have to specify what kind of information a variable contains, but sometimes it's useful to know it.

You have to implement a typing() function that takes a parameter and is able to tell the type and value of it
*/
function typing(param){
    if (typeof(param) == 'string') return "string=" + `"${param}"`
    else if (typeof(param)=='object') return `object=${JSON.stringify(param)}`
    else if (param == undefined) return 'undefined'
    return `${typeof(param)}=${param}`
  }
  