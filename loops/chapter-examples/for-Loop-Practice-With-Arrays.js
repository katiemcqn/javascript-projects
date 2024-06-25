// create an array variable containing the names
let myPeople = ["BoBo", "Hada", "Mike", "Kelsey", "Kelly", "Sean", "OG", "Erin","Matt"];
// write a for loop that prints each name on a different line
for (let i = 0; i < myPeople.length; i++) {
    console.log(myPeople[i]);
}
//Iteration Write 0-50
//for (let i = 0; i < 51; i++) {
//    console.log(i);
// }
//for (initial expression; loop condition; update expression) {
//    loop body
//}

// let i = 0   1 time statement setting variable i
// i < 51 boolean conditional if true continue if false stop
//i++ update expression 
//{} loop body execuded once for each iteration of the loop

//=================================================================
//Iterating over collections
// let name = "LaunchCode";

//for (let i = 0; i < name.length; i++) {
//    console.log(name[i]);
// }
//Output 
//L
//A
//U

let myname = "Katie";

for (let i = 0; i< myname.length; i++){
    console.log(myname[i]);
}
//-------------------------------------------------------------------
// Iterating over arrays

//let languages = ["JS", "Java", "C#", "Python"];

//for (let i = 0; i < languages.length; i++) {
//    console.log(languages[i]);
// }

//output 
//JS
//Java
//C#
//Python 

let phrase = "Chili Cook-off";
console.log(phrase.length)

for (let i = 0; i < phrase.length - 1; i = i + 3) {
   console.log(phrase[i]);
}

//---------------------------------------------
//The Accumulator Pattern
//let n = 6;
//let total = 0;

//for (let i = 1; i <= n; i++) {
//   total += i;
//}

//console.log(total);


// --------------------------
// Reversing a String
//let str = "blue";
//let reversed = "";

//for (let i = 0; i < str.length; i++) {
//   reversed = str[i] + reversed;
//}

//console.log(reversed);