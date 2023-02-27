


// Assignment	#	21-25
// JAVASCRIPT



// 1. Write a program that takes two user inputs for first and last
// name using prompt and merge them in a new variable titled
// fullName. Greet the user using his full name


// Taking user inputs for first and last name
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

// Merging first and last name
var fullName = firstName + " " + lastName;

// Greeting the user using his full name
alert("Hello " + fullName + "! Welcome to our website.");




// 2. Write a program to take a user input about his favorite mobile
// phone model. Find and display the length of user input in your
// browser.


let favoriteMobile = prompt("What is your favorite mobile phone model?");
let length = favoriteMobile.length;
document.write("The length of your favorite mobile phone model is: " + length);



// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser.

let word = "Pakistani";
let index = word.indexOf("n");
document.write("The index of letter 'n' in the word 'Pakistani' is: " + index);



// 4. Write a program to find the last index of letter “l” in the word
// “Hello World” and display the result in your browser.

let wordz = "Hello World";
let lastIndex = wordz.lastIndexOf("l");

document.write(`Last index of "l" is: ${lastIndex}`);


// 5. Write a program to find the character at 3rd index in the word
// “Pakistani” and display the result in your browser.


var words = "Pakistani";
var character = words.charAt(3);
document.write("The character at 3rd index in the word Pakistani is " + character);


// 6. Repeat Q1 using string concat() method.

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);

alert("Hello, " + fullName + "!");


// 7. Write a program to replace the “Hyder” to “Islam” in the word
// “Hyderabad” and display the result in your browser.


let cityName = "Hyderabad";
let newCityName = cityName.replace("Hyder", "Islam");
console.log(newCityName); // Output: Islamabad



// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;


var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write("Original Message: " + message + "<br>");
document.write("New Message: " + newMessage);


// 9. Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.

var str = "472";
var num = Number(str);
document.write("String: " + str + "<br>");
document.write("Type of String: " + typeof str + "<br>");
document.write("Number: " + num + "<br>");
document.write("Type of Number: " + typeof num + "<br>");



// 10. Write a program that take a URL as user input in the
// following format: (www.facebook.com / www.yahoo.com ).
// Extract the domain name & show in your browser.


let url = prompt("Enter a URL in the format www.example.com");

// Extracting the domain name from the URL
let domainName = url.split('.')[1];

// Displaying the domain name in the browser
document.write("Domain name: " + domainName);


// 11. Write a program that takes user input. Convert and show the
// input in capital letters.

var userInput = prompt("Enter some text:");
var uppercaseInput = userInput.toUpperCase();
alert("Uppercase input: " + uppercaseInput);


// 12. Write a program that takes user input. Convert and show the
// input in small letters.

var userInput = prompt("Enter some text:");
var smallLetters = userInput.toLowerCase();
alert("Input in small letters: " + smallLetters);


// 13. Write a program that takes user input. Convert and show the
// input in title case.


// Prompt the user for input
var userInput = prompt("Enter some text:");

// Convert the input to title case
var words = userInput.toLowerCase().split(" ");
for (var i = 0; i < words.length; i++) {
  words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
var titleCase = words.join(" ");

// Display the result
alert("Title case: " + titleCase);




// 14. Write a program that converts the variable num to string.
//  var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


var num = 35.36;
var numString = num.toString(); // convert num to string
numString = numString.replace(".", ""); // remove the dot
document.write(numString); // display "3536" in the browser




// 15. Write a program to display the value of x in your browser if a=”3”
// and b=”3”?  x = a + b


var a = "3";
var b = "3";
var x = a + b;
document.write("The value of x is: " + x);


// 16. Write a program to display the value of y in your browser if a=”3”
// and b=”3”?
//  y = a - b;

var a = "3";
var b = "3";
var y = a - b;
document.write("The value of y is: " + y);


// 17. Write a program to take user input and store username in a
// variable. If the username contains any special symbol among
// [@ . , !], prompt the user to enter a valid username. For
// character codes of [@ . , !], refer to ASCII table at the end of
// this document.
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64


var username = prompt("Enter your username:");
var valid = true;
for (var i = 0; i < username.length; i++) {
  var charCode = username.charCodeAt(i);
  if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
    valid = false;
    break;
  }
}
if (!valid) {
  alert("Please enter a valid username without special characters [@ . , !]");
} else {
  alert("Welcome, " + username + "!");
}


// 18. You have an array
//  A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not.
// Note: Perform case insensitive search. Whether the user enters
// cookie, Cookie, COOKIE or coOkIE, program should inform
// about its availability. Example:


var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order?");

var isFound = false;
for (var i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === userInput.toLowerCase()) {
    isFound = true;
    alert(userInput + " is available at index " + i + " in our bakery");
    break;
  }
}

if (!isFound) {
  alert("We are sorry. " + userInput + " is not available in our bakery.");
}



// 19. Write a program to take two input strings. Using string
// comparison, tell which string is greater than other or if they
// both are equal.

let str1 = prompt("Enter first string:");
let str2 = prompt("Enter second string:");

if (str1.localeCompare(str2) === 0) {
  document.write(`${str1} and ${str2} are equal`);
} else if (str1.localeCompare(str2) === 1) {
  document.write(`${str1} is greater than ${str2}`);
} else {
  document.write(`${str2} is greater than ${str1}`);
}


// 20. Write a program to take password as an input from user. The
// password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.


var password = prompt("Enter a password:");
var valid = true;

// Check if password contains alphabets and numbers
if (!password.match(/[a-zA-Z]/) || !password.match(/[0-9]/)) {
  valid = false;
}

// Check if password starts with a number
if (password.charAt(0).match(/[0-9]/)) {
  valid = false;
}

// Check if password is at least 6 characters long
if (password.length < 6) {
  valid = false;
}

// Display result
if (valid) {
  alert("Password is valid.");
} else {
  alert("Password is not valid. Please enter a valid password.");
}



// 21. Write a program to convert the following string to an array
// using string split method.
//  var university = “University of Karachi”;
// Display the elements of array in your browser.


var university = "University of Karachi";
var arr = university.split(" ");
document.write(arr);


// 22. Write a program to display the last character of a user input.

// let Input = prompt("Enter a string:");
// let lastChar = userInput[Input.length - 1];
// alert(`The last character of "${Input}" is "${lastChar}".`);


// 23. You have a string “The quick brown fox jumps over the lazy
// dog”. Write a program to count number of occurrences of word
// “the” in given string.


let stra = "The quick brown fox jumps over the lazy dog";
let count = (stra.match(/the/gi) || []).length;
document.write("Number of occurrences of word 'the' in the string: " + count);


// 24. Write a program to count number of vowels & consonants in
// given string
//  var str = “Pakistan”;


var str = "Pakistan";
var vowels = 0;
var consonants = 0;

// loop through each character of the string
for (var i = 0; i < str.length; i++) {
  var letter = str[i].toLowerCase(); // convert the letter to lowercase for easy comparison

  // check if the letter is a vowel
  if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
    vowels++;
  } else if (letter >= "a" && letter <= "z") { // check if the letter is a consonant
    consonants++;
  }
}

// display the results in the browser
document.write("Number of vowels: " + vowels + "<br>");
document.write("Number of consonants: " + consonants);