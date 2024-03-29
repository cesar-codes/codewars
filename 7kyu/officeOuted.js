/* The Office I - Outed
https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1
Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

Happiness rating will be total score / number of people in the room.

Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).
*/


function outed(meet, boss){
    console.log(meet[boss])
    let ratings = Object.values(meet)
    let average = ratings.reduce((a,b) => a+b, (meet[boss])) / ratings.length 
    return average <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
    console.log(average)
  }