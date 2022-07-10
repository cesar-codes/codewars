/* Multiple of Index
https://www.codewars.com/kata/5a34b80155519e1a00000009
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
 */

const multipleOfIndex = array => array.filter((num,index) => num % index === 0)

/* function multipleOfIndex(array) {
  let result = []
  for ( let i = 0; i < array.length; i++) {
    if( array[i] % i === 0) {
      result.push(array[i])
    }
  }
  return result
}
 */