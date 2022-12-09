/* Strict Mode
https://www.codewars.com/kata/639918bef003910b2146d0b8
Write a function that returns whether it is running in strict mode. */

function isInStrictMode() {
	return !this;
}

function test() { 
  'use strinct'
  return isInStrictMode();
}