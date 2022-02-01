/* Are You Playing Banjo?
https://www.codewars.com/kata/53af2b8861023f1d88000832
 */
function areYouPlayingBanjo(name) {
    let name2 = name.toLowerCase()
    return name2.startsWith('r') ? `${name} plays banjo` : `${name} does not play banjo`
  }