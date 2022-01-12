/* tug o war
https://www.codewars.com/kata/547fb94931cce5f5de00024f
In this Kata we will play a classic game of Tug-o'-War!

Two teams of 5 members will face off, the strongest of which will prevail. Each team member will be assigned a strength rating (1-9), with the most powerful members having a rating of 9. Your goal is to determine, based on the cumulative strength of the members of each team, which team will win the war.

The teams will be represented by an array of arrays:

[[5,0,3,2,1], [1,6,8,2,9]]  // 11 < 26 ; "Team 2 wins!"
Your task is to return a string with which team won or if it was a tie.

If team one is stronger, return the string "Team 1 wins!"
If team two is stronger, return the string "Team 2 wins!"
If the two teams are of equal strength, the team with the strongest Anchor (the member furthest from the center of the rope (first member for Team 1, last member for Team 2)) will win. In the above example, the member with strength 5 is team one's Anchor and strength 9 is team two's Anchor.

If the teams and the Anchors are both of equal strength, return the string "It's a tie!"
The Anchors are members in each end of the rope: */
function tug_o_war(teams) {
    let team1max = teams[0][0], team2max = teams[1][4]
    let team1 = teams[0], team2 = teams[1]
    team1 = team1.reduce((a,b)=> a+b, 0)
    team2 = team2.reduce((a,b)=> a+b, 0) 
    if (team1 > team2) return 'Team 1 wins!' 
    else if (team1 < team2)  return 'Team 2 wins!'
    else if (team1 === team2){  
      if (team1max > team2max) return 'Team 1 wins!'
      else if (team2max > team1max) return 'Team 2 wins!'
       else return `It's a tie!` 
      }
   
  }
  