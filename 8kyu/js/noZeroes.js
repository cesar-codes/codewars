/* No zeros for heros
https://www.codewars.com/kata/570a6a46455d08ff8d001002
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.
*/
const noBoringZeros = n => Number(n.toString().replace(/0+$/,''))
