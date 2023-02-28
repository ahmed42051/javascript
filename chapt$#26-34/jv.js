// Assignment	39-42 SWITCH	STATEMENTS	
// AND	
// WHILE… DO-WHILE	LOOPS


// 1. Write a switch statement with the following condition:
// If the variable age is greater than 18, output "Old enough",
// otherwise output "Too young".

var age = prompt("how old are you?")
switch(true) {
  case age > 18:
    document.write("Old enough" + "<br>");
    break;
  default:
    document.write("Too young" + "<br>");
}


// 2. Write a program to check whether the given input number is
// divisible by 3 or not by using Switch Case statements. Show a
// message “Number is not divisible by 3” or “Number is divisible
// by 3”.

let num = parseInt(prompt("Enter a number:"));

switch (num % 3) {
  case 0:
    alert("Number is divisible by 3");
    break;
  default:
    alert("Number is not divisible by 3");
    break;
}


// 3. Write a program to create a calculator for +, -, *, /, % using
// switch case statements. (number1, number2 and operator will
// be input)


// Take input from user
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /, %):");

let result;

// Perform calculation based on operator
switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  case "%":
    result = num1 % num2;
    break;
  default:
    console.log("Invalid operator");
}

// Display the result
console.log(`${num1} ${operator} ${num2} = ${result}`);


// 4. The getDay() method returns the weekday as a number
// between 0 and 6. (Sunday=0, Monday=1, Tuesday=2 …).
// Use the weekday number to calculate weekday name.



var weekdayNumber = prompt("Enter the weekday number (0-6):");

switch (weekdayNumber) {
  case "0":
    alert("Sunday");
    break;
  case "1":
    alert("Monday");
    break;
  case "2":
    alert("Tuesday");
    break;
  case "3":
    alert("Wednesday");
    break;
  case "4":
    alert("Thursday");
    break;
  case "5":
    alert("Friday");
    break;
  case "6":
    alert("Saturday");
    break;
  default:
    alert("Invalid input!");
}


// 5. The getDay() method returns the weekday as a number
// between 0 and 6. (Sunday=0, Monday=1, Tuesday=2 ...).
// If today is neither Saturday (6) nor Sunday (0), write a default
// message:


let today = new Date();
let weekday = today.getDay();

switch (weekday) {
  case 0:
    document.write("Today is Sunday." + "<br>");
    break;
  case 6:
    document.write("Today is Saturday." + "<br>");
    break;
  default:
    document.write("It's not the weekend yet." + "<br>");
}


// 6.Given the following script
// function checkCar() {
//  var text;
//  var favCar = prompt("What is your favorite
// car?");
//  switch(favCar) {
//  Add code here
//  }
//  document.write( text);
// }
// checkCar();
// Finish the switch statement. Add the following
// cases: BMW, Ford and Peugeot.
// Set the value of the variable text to: "German car" for BMW.
// "American car" for Ford. "French car" for Peugeot.
// Also add a default case where the text value is "Unknown car
// name".



function checkCar() {
  var text;
  var favCar = prompt("What is your favorite car?");
  switch (favCar) {
    case "BMW":
      text = "German car";
      break;
    case "Ford":
      text = "American car";
      break;
    case "Peugeot":
      text = "French car";
      break;
    default:
      text = "Unknown car name";
  }
  document.write(text + "<br>");
}

checkCar();



// 7. Fix the following switch statement:
// function checkFruit() {
//  var text;
//  var fruits = prompt("Enter a fruit name");
//  switch(fruits) {
//  case "Banana"
//  text = "Banana is good!";
//  case "Orange"
//  text = "I am not a fan of orange.";
//  case "Apple"
//  text = "How you like them apples?";   default
//  text = "I have never heard of that
// fruit.";
//  }
//  document.write( text);
// }
// checkFruit();
  

// The changes made are:
// 
// Added colons : after each case statement.
// Added break statement at the end of each case.
// Added a default case with a message for an unknown fruit name.

function checkFruit() {
  var text;
  var fruits = prompt("Enter a fruit name");
  switch(fruits) {    
    case "Banana":
      text = "Banana is good!";
      break;
    case "Orange":
      text = "I am not a fan of orange.";
      break;
    case "Apple":
      text = "How you like them apples?";
      break;
    default:
      text = "I have never heard of that fruit.";
  }
  document.write(text + "<br>");
}
checkFruit();


// 8. Write a function that displays the marks range against a
// particular grade. For example, if grade is “B”, then print Marks [
// >= 60 and <70 ]


function displayMarksRange(grade) {
  switch (grade) {
    case "A":
      console.log("Marks [>=90 and <100]");
      break;
    case "B":
      console.log("Marks [>=60 and <70]");
      break;
    case "C":
      console.log("Marks [>=50 and <60]");
      break;
    case "D":
      console.log("Marks [>=40 and <50]");
      break;
    case "F":
      console.log("Marks [<40]");
      break;
    default:
      console.log("Invalid grade");
  }
}



// 9. Use a switch statement to rewrite the following JavaScript
// code. Prompt the user for the number of a month rather than
// setting it to 8:

// Original code:

var month = 8;
if (month === 1) {
 console.log("January");
} else if (month === 2) {
 console.log("February");
} else if (month === 3) {
 console.log("March");
} else if (month === 4) {
 console.log("April");
} else if (month === 5) {
 console.log("May");
} else if (month === 6) {
 console.log("June");
} else if (month === 7) {
 console.log("July");
} else if (month === 8) {
 console.log("August");
} else if (month === 9) {
 console.log("September");
} else if (month === 10) {
 console.log("October");
} else if (month === 11) {
 console.log("November");
} else if (month === 12) {
 console.log("December");
} else {
 console.log("Invalid month.");
}


var month = prompt("Enter the number of a month (1-12):");
switch (Number(month)) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Invalid month.");
    break;
}


// 10. Use a conditional (ternary) operator for this exercise:
// If the variable age is a value below 18, the value of the variable
// voteable should be "Too young",
// otherwise the value of voteable should be "Old enough".


var age = 20;
var voteable = (age < 18) ? "Too young" : "Old enough";
console.log(voteable); // Output: "Old enough"



// 11. Write a program to display the message “Hello World” 5
// times in your browser.


for (var i = 0; i < 5; i++) {
  document.write("Hello World <br>");
}


// 12. Write a program to print numeric counting from 1 to 10.


for (var i = 1; i <= 10; i++) {
  document.write(i + "<br>");
}



// 13. Write a program to print multiplication table of any number
// using. Table number & length should be taken as an input from
// user


// taking input for number and length of multiplication table
var numer = parseInt(prompt("Enter a number to print its multiplication table: "));
var length = parseInt(prompt("Enter the length of the multiplication table: "));

// printing the multiplication table
document.write("<h3>Multiplication Table of " + numer + "</h3>");
for (var i = 1; i <= length; i++) {
  document.write(numer + " x " + i + " = " + numer*i + "<br>");
}


// 14. You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line.

// Define the array A
var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

// Create a box element to display the array elements
var box = document.createElement("div");
box.style.border = "1px solid blue";
box.style.padding = "10px";

// Loop through the array and add each element to the box
for (var i = 0; i < A.length; i++) {
  var item = document.createElement("p");
  item.textContent = A[i];
  box.appendChild(item);
}

// Add the box to the body of the document
document.body.appendChild(box);


// 15. Write a program to print items of the following array:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]


let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// Calculate the width of the box based on the longest fruit name
let width = 0;
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].length > width) {
    width = fruits[i].length;
  }
}

// Print the top of the box
let to = "┌" + "─".repeat(width + 2) + "┐";
console.log(to);

// Print the items of the array in the box
for (let i = 0; i < fruits.length; i++) {
  let item = "│ " + fruits[i].padEnd(width) + " │";
  console.log(item);
}

// Print the bottom of the box
let bottom = "└" + "─".repeat(width + 2) + "┘";
console.log(bottom);



// 16. Write a program to initialize an array of N items by using
// prompt. Where N is number of items as entered by the user.



var n = prompt("Enter the number of items to initialize:");
var arr = [];

for (var i = 0; i < n; i++) {
  arr[i] = prompt("Enter item #" + (i+1));
}

console.log("Array items:");
console.log(arr);




// 17. Generate the following series in your browser. See example
// output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// Helper function to display output in a box
function displayInBox(text) {
  console.log(`┌${"─".repeat(text.length + 2)}┐`);
  console.log(`│ ${text} │`);
  console.log(`└${"─".repeat(text.length + 2)}┘`);
}

// Counting: 1 to 15
let counting = "";
for (let i = 1; i <= 15; i++) {
  counting += i + ", ";
}
displayInBox("Counting: " + counting.slice(0, -2));

// Reverse counting: 10 to 1
let reverseCounting = "";
for (let i = 10; i >= 1; i--) {
  reverseCounting += i + ", ";
}
displayInBox("Reverse counting: " + reverseCounting.slice(0, -2));

// Even: 0 to 20 (even numbers)
let even = "";
for (let i = 0; i <= 20; i += 2) {
  even += i + ", ";
}
displayInBox("Even: " + even.slice(0, -2));

// Odd: 1 to 19 (odd numbers)
let odd = "";
for (let i = 1; i <= 19; i += 2) {
  odd += i + ", ";
}
displayInBox("Odd: " + odd.slice(0, -2));

// Series: 2k to 20k (even numbers)
let series = "";
for (let i = 2; i <= 20; i += 2) {
  series += i + "k, ";
}
displayInBox("Series: " + series.slice(0, -2));



// 18. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:



// Initialize the array
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Prompt the user for input
var input = prompt("Enter the item you want to search in the array:");

// Search for the input in the array
var found = false;
for (var i = 0; i < A.length; i++) {
  if (A[i] === input) {
    found = true;
    break;
  }
}

// Display the result
if (found) {
  document.write("<div style='border: 1px solid black; padding: 10px;'>The item " + input + " is found in the list.</div>");
} else {
  document.write("<div style='border: 1px solid black; padding: 10px;'>The item " + input + " is not found in the list.</div>");
}



// 19. You have given the following arrays:
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90]; Write a program to generate the following HTML table in your
// browser using JS.


var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];

var table = "<table><tr><th>Student Name</th><th>Score</th></tr>";

for (var i = 0; i < students.length; i++) {
  table += "<tr><td>" + students[i] + "</td><td>" + scores[i] + "</td></tr>";
}

table += "</table>";

document.write(table);


// 20. Write a program that prints number from start of the array
// to desired s value. Given array:
// var scores = [12, 45, 3, 22, 34, 50];
// (Hint: take stop value from user)
// E.g. if user gives 3 as input value print 12, 45, 3
// if user gives 34 as input value print 12, 45, 3, 22, 34


var scores = [12, 45, 3, 22, 34, 50];
var stop = parseInt(prompt("Enter the stop value:"));

for (var i = 0; i < scores.length; i++) {
  if (scores[i] <= stop) {
    document.write(scores[i] + "<br>");
  } else {
    break;
  }
}


// 21. You have an array
// A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
// Write each element on new line with the help of nested loops.


// Initialize the array
var A = [[1,2,3], [4,5,6], [7,8,9]];

// Create a variable to store the output
var output = "";

// Loop through the outer array
for (var i = 0; i < A.length; i++) {
  // Loop through the inner array
  for (var j = 0; j < A[i].length; j++) {
    // Add the current element to the output variable
    output += A[i][j] + "<br>";
  }
  // Add a line break after each inner array is printed
  output += "<br>";
}

// Display the output in a box
document.write("<div style='border: 1px solid black; padding: 10px;'>" + output + "</div>");



// 22. Write a program to repeatedly print the value of the variable
// num which is input by user. Value should be decreasing by 0.5
// each time, as long as x Value remains positive.



let nu = parseFloat(prompt("Enter a number:"));
let outpu = "";

while(nu > 0){
  outpu += nu.toFixed(1) + "<br>";
  nu -= 0.5;
}

document.getElementById("output").innerHTML = "<div style='border:1px solid black; padding:10px'>" + outpu + "</div>";





// 23. The even/odd reporter
// Write a loop that will iterate from 0 to 20. For each iteration, it
// will check if the current number is even or odd, and report that
// to the screen (e.g. "2 is even").



    for (var i = 0; i <= 20; i++) {
      if (i % 2 == 0) {
        document.write("<div style='border: 1px solid black; padding: 10px;'> <li>" + i + " is even</li>");
      } else {
        document.write("<div style='border: 1px solid black; padding: 10px;'> <li>" + i + " is odd</li>");
      }
    }

// 24. Write a program to calculate the product of the odd integers
// from 1 to 7.


var product = 1;
		for (var i = 1; i <= 7; i++) {
			if (i % 2 !== 0) {
				product *= i;
			}
		}
		document.write("<div style='border: 1px solid black; padding: 10px;'>The product of odd integers from 1 to 7 is: " + product + "</div>");

// 25. Write a program that will write out a wedge of stars. The user
// will enter the initial number of stars, and the program will write
// out lines of stars where each line has one few star than the
// previous line. Initial number of stars: 7
// *******
// ******
// *****
// ****
// ***
// **
// *


let numStars = prompt("Enter the initial number of stars:");
let stars = "";

for (let i = numStars; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    stars += "*";
  }
  stars += "\n";
}

document.write(stars);



// 26. Write a program to create the following patterns in your
// browser. Take number of lines as an input.
// a. *****
// *****
// *****
// *****
// b. *
// **
// ***
// ****
// *****
// c. *****
// ****
// ***
// **
// *



// Taking input from user
var numLines = prompt("Enter the number of lines");

// Pattern A
document.write("<h3>Pattern A:</h3>");
for (var i = 1; i <= numLines; i++) {
    for (var j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}

// Pattern B
document.write("<h3>Pattern B:</h3>");
for (var i = 1; i <= numLines; i++) {
    for (var j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}

// Pattern C
document.write("<h3>Pattern C:</h3>");
for (var i = numLines; i >= 1; i--) {
    for (var j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}
