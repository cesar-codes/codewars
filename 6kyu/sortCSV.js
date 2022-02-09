/* Sort the columns of a CSV file
https://www.codewars.com/kata/57f7f71a7b992e699400013f
#Sort the columns of a csv-file

You get a string with the content of a csv-file. The columns are separated by semicolons.
The first line contains the names of the columns.
Write a method that sorts the columns by the names of the columns alphabetically and incasesensitive
*/
function sortCsvColumns(c) {
    let arr = []
    c=c.split`\n`.map(v=>v.split`;`)
    for (let i=0;i<c[0].length;i++){
      let temp = []
      for (let j=0;j<c.length;j++){
        temp.push(c[j][i])
      }
      arr.push(temp)
    }
    arr.sort((a,b)=>a[0].localeCompare(b[0])) 
    let arr2 = []
    for (let i=0;i<arr[0].length;i++){
      let temp = []
      for (let j=0;j<arr.length;j++){
        temp.push(arr[j][i])
      }
      arr2.push(temp)
    }
    return arr2.map(v=>v.join`;`).join`\n`
  }
  