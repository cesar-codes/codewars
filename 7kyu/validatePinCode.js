/* Regex validate PIN code
https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
*/
//without Regex
const validatePIN = pin => {
    //return true or false
    let n = pin.length 
    if (n !=4 && n !=6) return false // rule out anything not 4/6 chars long
    for (let i in pin){
      if (pin[i] > '9' || pin[i] < '0') return false // exclude !charCodeAt val for 0-9
    }
    return true
  }

  // with regex
  const validatePIN = pin => /^(\d{4}|^\d{6})$/.test(pin)
