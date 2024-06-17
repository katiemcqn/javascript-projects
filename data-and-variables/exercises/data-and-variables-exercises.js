// Declare and assign the variables below
let shuttleName = "Determination";
let shuttleSpeed = 17500;
let distToMars = 225000000;
let distToMoon = 384400
let milesPerKilo = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof distToMars);
console.log(typeof distToMoon);
console.log(typeof milesPerKilo);
// Calculate a space mission below
let mileToMars = (distToMars*milesPerKilo);
let hoursToMars = (mileToMars/shuttleSpeed);
let daysToMars = (hoursToMars/24);
// Print the results of the space mission calculations below
console.log(shuttleName+" will take "+daysToMars+" days to reach Mars.");
// Calculate a trip to the moon below
let milesToMoon = (distToMoon*milesPerKilo);
let hoursToMoon = (milesToMoon/shuttleSpeed);
let daysToMoon = (hoursToMoon/24);
// Print the results of the trip to the moon below
console.log(shuttleName+" will take "+daysToMoon+" days to reach the moon.");