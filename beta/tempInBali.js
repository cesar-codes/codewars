/* Holiday I - Temperature in Bali
https://www.codewars.com/kata/57e8e9df2aee49c0280009ab
So it turns out the weather in Indonesia is beautiful... but also far too hot most of the time.

Given two variables: heat (0 - 50 degrees centigrade) and humidity (scored from 0.0 - 1.0), your job is to test whether the weather is bareable (according to my personal preferences :D)
 */
function bareable(heat, humidity){
    console.log(heat, humidity)
    if (humidity > .5 || heat >= 36) return false
    else if (humidity > .4){
      if (heat > 25 && heat < 36) return false
    }
    return true
  }
  