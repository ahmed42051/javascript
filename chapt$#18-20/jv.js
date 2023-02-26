// Assignment	#	18-20
// JAVASCRIPT



// 1. Write a program to display the message “Hello World” 5 times
// in your browser using for loop.


// Use a for loop to display the message 5 times
for (let i = 1; i <= 5; i++) {
    document.write("Hello World<br>");
  }

  
//   2. Write a program to print numeric counting from 1 to 10.


// Use a for loop to print numbers 1 to 10
for (let i = 1; i <= 10; i++) {
    document.write(i + "<br>");
  }

  

//   3. Write a program to print multiplication table of any number
// using for loop. Table number & length should be taken as an
// input from user.

// Prompt the user for the number and length of the table
let number = parseInt(prompt("Enter a number to print its multiplication table:"));
let length = parseInt(prompt("Enter the length of the table:"));

// Use a for loop to print the multiplication table
for (let i = 1; i <= length; i++) {
  document.write(number + " x " + i + " = " + (number * i) + "<br>");
}



// 4. You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line with the help of for loop.

let A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

for (let i = 0; i < A.length; i++) {
  document.write(A[i] + "<br>");
}




// 5. Write a program to print items of the following array using for
// loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]


var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}



// 6. Write a program to initialize an array of N items by using
// prompt. Where N is number of items as entered by the user.


var n = prompt("Enter the number of items to initialize the array:");
var arr = [];

// Use a loop to prompt the user to enter each item and add it to the array
for (var i = 0; i < n; i++) {
  var item = prompt("Enter item " + (i+1) + ":");
  arr.push(item);
}

// Display the initialized array in the console
console.log("Initialized array:", arr);


// 7. Generate the following series in your browser. See example
// output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// a. Counting
document.write("Counting: ");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("<br>");

// b. Reverse counting
document.write("Reverse counting: ");
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("<br>");

// c. Even numbers
document.write("Even: ");
for (var i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}
document.write("<br>");

// d. Odd numbers
document.write("Odd: ");
for (var i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}
document.write("<br>");

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("Series: ");
for (var i = 1; i <= 10; i++) {
    document.write((i * 2) + "k, ");
}



// 8. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

var isFound = false;

for (var i = 0; i < A.length; i++) {
  if (a[i] === userInput) {
    isFound = true;
    alert(userInput + " is available at index " + i + " in our bakery.");
    break;
  }
}

if (!isFound) {
  alert("We are sorry. " + userInput + " is not available in our bakery.");
}


// 9. Write a program to identify the largest number in the given
// array.
// A = [24, 53, 78, 91, 12]


let e = [24, 53, 78, 91, 12];
let largestNumber = e[0];

for (let i = 1; i < e.length; i++) {
  if (e[i] > largestNumber) {
    largestNumber = e[i];
  }
}

console.log("The largest number in the array is: " + largestNumber);


// 10. Write a program to identify the smallest number in the given
// array.
// A = [24, 53, 78, 91, 12]


var d = [24, 53, 78, 91, 12];
var smallest = d[0];

for (var i = 1; i < d.length; i++) {
  if (d[i] < smallest) {
    smallest = d[i];
  }
}

document.write("The smallest number in the array is: " + smallest);


// 11. Write a program to identify the largest & the smallest
// number in the given array.
// A = [24, 53, 78, 91, 12]


var c = [24, 53, 78, 91, 12];
var smallest = c[0];
var largest = c[0];

for (var i = 1; i < A.length; i++) {
  if (c[i] < smallest) {
    smallest = c[i];
  }
  if (A[i] > largest) {
    largest = c[i];
  }
}

document.write("The smallest number is: " + smallest + "<br>");
document.write("The largest number is: " + largest);




// 12. Write a program to print multiples of 5 ranging 1 to 100

for (var i = 1; i <= 20; i++) {
    console.log(i * 5);
  }
  



// 13. You have given the following arrays:
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90]; Write a program to generate the following HTML table in your
// browser using JS.


// Define the arrays
var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];

// Create a table element
var table = document.createElement("table");

// Create table header
var headerRow = document.createElement("tr");
var nameHeader = document.createElement("th");
nameHeader.appendChild(document.createTextNode("Student Name"));
headerRow.appendChild(nameHeader);
var scoreHeader = document.createElement("th");
scoreHeader.appendChild(document.createTextNode("Score"));
headerRow.appendChild(scoreHeader);
table.appendChild(headerRow);

// Create table rows
for (var i = 0; i < students.length; i++) {
  var row = document.createElement("tr");
  var nameCell = document.createElement("td");
  nameCell.appendChild(document.createTextNode(students[i]));
  row.appendChild(nameCell);
  var scoreCell = document.createElement("td");
  scoreCell.appendChild(document.createTextNode(scores[i]));
  row.appendChild(scoreCell);
  table.appendChild(row);
}

// Add the table to the document
document.body.appendChild(table);



// 14. Write a program that prints number from start of the array
// to desired stop value. Given array:
// var scores = [12, 45, 3, 22, 34, 50];
// (Hint: take stop value from user)
// E.g. if user gives 3 as input value print 12, 45, 3
// if user gives 34 as input value print 12, 45, 3, 22, 34


var scores = [12, 45, 3, 22, 34, 50];
var stopValue = prompt("Enter stop value:");

for (var i = 0; i < scores.length; i++) {
  if (scores[i] <= stopValue) {
    console.log(scores[i]);
  }
}

// 15. You have an array
// A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
// Write each element on new line with the help of nested for
// loops.

var b= [[1,2,3], [4,5,6], [7,8,9]];

for(var i=0; i<b.length; i++){
  for(var j=0; j<b[i].length; j++){
    document.write(b[i][j] + "<br>");
  }
}


// 16. Write a program to repeatedly print the value of the variable
// num which is input by user. Value should be decreasing by 0.5
// each time, as long as x Value remains positive.


let num = parseFloat(prompt("Enter a number:"));

while (num > 0) {
  console.log(num);
  num -= 0.5;
}


// 17. The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each
// iteration, it will check if the current number is even or odd, and
// report that to the screen (e.g. "2 is even").




for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i + ' is even');
    } else {
      console.log(i + ' is odd');
    }
  }



//   18. Write a program to calculate the product of the odd integers
// from 1 to 7.
  

let product = 1;
for(let i = 1; i <= 7; i += 2) {
  product *= i;
}
console.log("Product of odd integers from 1 to 7 is:", product);


// 19. Write a program that will write out a wedge of stars. The user
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





let initialStars = parseInt(prompt("Enter the initial number of stars:"));

for (let i = initialStars; i > 0; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}



// 20. Write a program to create the following patterns in your
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

var lines = prompt("Enter number of lines:");
var pattern = "";

for (var i = 1; i <= lines; i++) {
  for (var j = 1; j <= 5; j++) {
    pattern += "*";
  }
  pattern += "<br>";
}

document.write(pattern);

var lines = prompt("Enter number of lines:");
var pattern = "";

for (var i = 1; i <= lines; i++) {
  for (var j = 1; j <= i; j++) {
    pattern += "*";
  }
  pattern += "<br>";
}

document.write(pattern);


var lines = prompt("Enter number of lines:");
var pattern = "";

for (var i = 1; i <= lines; i++) {
  for (var j = lines; j >= i; j--) {
    pattern += "*";
  }
  pattern += "<br>";
}

document.write(pattern);


