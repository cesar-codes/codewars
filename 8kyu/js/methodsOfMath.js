/* Training JS #34: methods of Math---pow() sqrt() and cbrt()
https://www.codewars.com/kata/5733f948d780e27df6000e33
In this lesson we learn three methods of Math: pow() sqrt() and cbrt(). Their usage is very simple: sqrt() returns the square root of a number; cbrt() returns the cube root of a number; pow() returns the base to the exponent power
 */

const isIntegerCube = n => Number.isInteger(Math.cbrt(n))
const cutCube = (volume, n) => isIntegerCube(n) && isIntegerCube(volume / n)
