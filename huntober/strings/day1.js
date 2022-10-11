/* 


'0' <-> 'O'      '5' <-> 'S'
'1' <-> 'I'      '6' <-> 'G'
'2' <-> 'Z'      '7' <-> 'L'
'3' <-> 'E'      '8' <-> 'B'
'4' <-> 'h'      '9' <-> 'q' 
0123456789
OIZEhSGLBq
*/
let input = "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." 
let funInput = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"
const fixer = str => {
    let newStr = str.replace(/[0123456789OIZEhSGLBq]/g, 
    charactersToReplace =>
    ({'0': 'O', '1': 'I', '2': 'Z', '3': 'E', '4': 'h', '5': 'S', '6': 'G', '7': 'L', '8': 'B', '9': 'q', 'O': '0', 'I': '1', 'Z': '2', 'E': '3', 'h': '4', 'S': '5', 'G': '6', 'L': '7', 'B': '8', 'q': '9' })[charactersToReplace]
    )
    console.log(newStr)
   return newStr;
}
console.log(funInput)
fixer(input)
fixer(funInput) //e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs




/* 
P - A str with some letters turned to numbers and vice versa
R - A string with the errors fixed
E - "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."  -> "PRO-TIP #498: IT'S NICE TO SAY HELLO."
P - create a key / value dictionary, split, run a replace function with map, join, return the new string 
You can create an object and use it as a function. It will replace the key with the value in the object.: 

function DNAStrand(dna){
  console.log(dna)
  let newDna = dna.replace(/[ATGC]/g, 
  charactersToReplace => ({'A': 'T', 'T': 'A', 'C': 'G', 'G':'C'})[charactersToReplace])
  return newDna;  
} //returns TTTT for AAAA


full dictionary => reverse the whole thing

*/

