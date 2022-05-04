/* Sum of a beach
Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).
*/
const sumOfABeach = beach => beach.toLowerCase().split(/sun|fish|sand|water/).length -1
