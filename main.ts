//       🚀 Day 28 Challenge: Start Coding! 🚀

// Question 82:
// Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.


function findLengthOfString(string: string): number {
    return string.length;
}

console.log(findLengthOfString("Muhammad Saad Raza")); // Shows 18


// Question 83: 
// Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.

function convertStringIntoUpperAndlowerCase(string: string) {
    console.log(string.toUpperCase());  //convert into upperCase
    console.log(string.toLowerCase());  //convert into LowerCase
}
convertStringIntoUpperAndlowerCase("Muhammad Saad"); 



// Question 84:
// Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".

function replaceWordInString(sentence: string): string {
    return sentence.replace("JavaScript", "TypeScript", );
}

console.log(replaceWordInString("I love JavaScript")); // Shows "I love TypeScript"


