/* The Office II - Boredom Score
https://www.codewars.com/kata/57ed4cef7b45ef8774000014
Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'
*/
function boredom(staff){
    // use Object.values() to return an array of the object's values.
    let deptCounts = Object.values(staff)
    //initiate the counter variable with a number (0)
    let boredomScore = 0
    //switch case to determine each department's 'worth'
    deptCounts.forEach(function(element) {
       switch(element) {
        case "accounts":
          boredomScore += 1
          break;
        case "finance":
          boredomScore += 2
          break;
        case "canteen":
          boredomScore += 10
          break;
        case "regulation":
          boredomScore += 3
          break;
        case "trading":
          boredomScore += 6
          break;
        case "change":
          boredomScore += 6
          break;
        case "IS":
          boredomScore += 8
          break;
        case "retail":
          boredomScore += 5
          break;
        case "cleaning":
          boredomScore += 4
          break;
        case "pissing about":
          boredomScore += 25
          break;
        default:
          break;
      }      
    })
  
      if (boredomScore <= 80) {
        return "kill me now"
      }
      else if (boredomScore < 100 && boredomScore > 80) {
        return "i can handle this"
      }
      else return "party time!!"
  }
  