// Problem 1
// Ask the user to enter a word. Keep asking them to enter a word until they
// enter the letter 'q'.
var userInput = prompt("Please enter a word. Enter 'q' to quit");
while(userInput!=='q'){
    userInput = prompt("Please enter a word. Enter 'q' to quit");
   }
//
//     Problem 2
// Make any string array all lower case strings.
// If you don't remember how to use that Google it.
//
var words = ["FULL", "IS", "THE", "HE"];
// map iterates. You do not need to nest it in a for loop
for (var i = 0; i < words.length; i++) {

    var arrayLower = words.map(function (eachElement) {
            return eachElement.toLowerCase;
        }
    );
}

console.log(arrayLower);

// Challenge
// Make any string array return an array of objects with the specified class
// below
//
// class Student{
//     constructor(name){
//         this.name = name;
//     }
// }