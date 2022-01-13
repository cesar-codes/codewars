/* National Bath Safety Month
https://www.codewars.com/kata/57d14a9d95497e9912000267
Apparently, in the US, January is National Bath Safety Month!!

To celebrate, in this kata you need to decide if a string (s) is safe from falling in the bath (x)!

Very basic, if the string can fit in the bath, it could fall in. We can not allow that in safety month! If the string can fit in, it's not safe so return false, otherwise return true, as the string couldn't fit in if it wanted to!

A bath will look like this (for example):

|~~~~~~~|
Where ~ is the water and | is the side of the bath.

Remember the sides of the bath (|) do not count as water! There will always be two sides */
const bath = (string, bath) => string.length > bath.length-2 
