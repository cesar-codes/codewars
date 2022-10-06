/* Alan Partridge I - Partridge Watch
https://www.codewars.com/kata/5808c8eff0ed4210de000008
Given an array of terms, if any of those terms relate to Alan Partridge, return Mine's a Pint!

The number of exclamation mark (!) after the t should be determined by the number of Alan related terms you find in the given array (x). The related terms are as follows:

Partridge
PearTree
Chat
Dan
Toblerone
Lynn
AlphaPapa
Nomad
If you don't find any related terms, return Lynn, I've pierced my foot on a spike!!
 */
const part = x => {
    const vals = [
      "Partridge",
      "PearTree",
      "Chat",
      "Dan",
      "Toblerone",
      "Lynn",
      "AlphaPapa",
      "Nomad"
    ];
    let num = x.filter(v => vals.includes(v)).length;
    if (vals.some(v => x.includes(v))) return `Mine\'s a Pint${"!".repeat(num)}`;
    return "Lynn, I've pierced my foot on a spike!!";
  