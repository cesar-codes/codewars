let myStr = 'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'.toLowerCase()
// myStr
// myStr = myStr
// .replaceAll('s', '')
// .replaceAll('p', '')
// .replaceAll('a', '')
// .replaceAll('c', '')
// .replaceAll('e', '')
// myStr

const space = str => {
    // replace s,p,a,c,e with ''
    str = str
    .replaceAll('s', '')
    .replaceAll('p', '')
    .replaceAll('a', '')
    .replaceAll('c', '')
    .replaceAll('e', '')
    console.log(str)
    return str
}
space(myStr)