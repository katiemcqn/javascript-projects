const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let firstThree = str.slice(0,3);
let secondhalf = str.slice(3,str.length);
let strNew = (secondhalf + firstThree);
console.log('----------------PART 1-------------------');
console.log(firstThree);
console.log(secondhalf);
console.log(strNew);


//Use a template literal to print the original and modified string in a descriptive phrase.
console.log("Now I will turn " + str + " into " + strNew + "!!");
console.log('----------------PART 2-------------------');

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let howMany = input.question("Pick a number 1-9");
console.log("Number Selected: "+ howMany);
firstThree = str.slice(0,howMany);
secondhalf = str.slice(howMany,str.length);
strNew = (secondhalf + firstThree);
console.log("Now I will turn " + str + " into " + strNew + "!!");
console.log(firstThree);
console.log(secondhalf);
console.log(strNew);
console.log('----------------PART 3-------------------');
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
howMany = input.question("Pick a number 1-9");
if (howMany > 9 || howMany <1){
    howMany = 3;
    console.log("Sorry that wasn't an option. We will use " + howMany + ".")
}
else{
    console.log("Number Selected: "+ howMany);
}
firstThree = str.slice(0,howMany);
secondhalf = str.slice(howMany,str.length);
strNew = (secondhalf + firstThree);
console.log("Now I will turn " + str + " into " + strNew + "!!");
console.log(firstThree);
console.log(secondhalf);
console.log(strNew);

