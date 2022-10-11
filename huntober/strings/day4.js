myStr = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

const fixer = str => {
    let newStr = str.replace(/[0123456789OIZEhSGLBq]/g, 
    charactersToReplace =>
    ({'0': 'O', '1': 'I', '2': 'Z', '3': 'E', '4': 'h', '5': 'S', '6': 'G', '7': 'L', '8': 'B', '9': 'q', 'O': '0', 'I': '1', 'Z': '2', 'E': '3', 'h': '4', 'S': '5', 'G': '6', 'L': '7', 'B': '8', 'q': '9' })[charactersToReplace]
    )
    console.log(newStr)
   return newStr;
}

fixer(myStr)
console.log('firstStr ', myStr)

const mess = str => {
    let result = []
    // find the index of 'c'
    let ind = str.indexOf('c')
    // only keep everything after 'c'
    str = str.slice(ind + 1)

    // split by 'Eek'
    str = str.split('Eek!')
    //Join it
    str = str.join('')
    //reverse it
    str = str.split('').reverse().join('')

    //split by 'v'
    str = str.split('v')
    for (let i = 1; i < str.length; i++){
        result.push(str[i][0])
    }
    console.log(result)
    return result;
}

mess(myStr)
console.log('secondStr ', myStr)

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
console.log(myStr.split('').reverse())







