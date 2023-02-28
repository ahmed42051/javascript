// Assignment # 35-38
// FUNCTIONS | JAVASCRIPT

// 1. Create a block of code that you can use several times.


greet("Alice"); // logs "Hello, Alice!"
greet("Bob"); // logs "Hello, Bob!"
greet("Charlie"); // logs "Hello, Charlie!"

function greet(name) {
  console.log("Hello, " + name + "!");
}

// 2. Write a function that displays current date &amp; time in your
// browser.


function displayDateTime() {
  const now = new Date();
  const datetime = now.toLocaleString();
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = datetime;
}


// 3. Write a function that takes first &amp; last name and then it greets
// the user using his full name.


function greetUser(firstName, lastName) {
  console.log(`Hello, ${firstName} ${lastName}! Nice to meet you.`);
}

// Example usage:
greetUser("John", "Doe"); // Hello, John Doe! Nice to meet you.



// 4. Write a function that adds two numbers (input by user) and
// returns the sum of two numbers.


function addNumbers(num1, num2) {
  return num1 + num2;
}

let result = addNumbers(3, 5);
console.log(result);


// 5. Calculator:
// Write a function that takes three arguments num1, num2 &amp;
// operator &amp; compute the desired operation. Return and show
// the desired result in your browser.

function calculator(num1, num2, operator) {
  let result;

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
      return "Invalid operator";
  }

  return result;
}

// Addition
console.log(calculator(5, 7, "+")); // Output: 12

// Subtraction
console.log(calculator(10, 3, "-")); // Output: 7

// Multiplication
console.log(calculator(4, 6, "*")); // Output: 24

// Division
console.log(calculator(15, 3, "/")); // Output: 5

// Modulus
console.log(calculator(10, 3, "%")); // Output: 1

// Invalid operator
console.log(calculator(5, 7, "$")); // Output: "Invalid operator"




// 6. Write a function that squares its argument.

function square(num) {
  return num * num;
}
console.log(square(5)); // output: 25
let squaredNum = square(7);
console.log(squaredNum); // output: 49



// 7. Write a function that computes factorial of a number.

function factorial(num) {
  if (num < 0) {
    return -1; // error: factorial of a negative number does not exist
  } else if (num === 0) {
    return 1; // base case: factorial of 0 is 1
  } else {
    return num * factorial(num - 1); // recursive case
  }
}

console.log(factorial(5)); // outputs 120 (since 5! = 5 * 4 * 3 * 2 * 1 = 120)


// 8. Write a function that take start and end number as inputs &amp;
// display counting in your browser.

function counting(start, end) {
  for (let i = start; i <= end; i++) {
    document.write(i + "<br>");
  }
}
counting(1, 10);



// 9. Write a nested function that computes hypotenuse of a right
// angle triangle.
// Hypotenuse 2 = Base 2 + Perpendicular 2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(num) {
    return num * num;
  }

  var baseSquare = calculateSquare(base);
  var perpendicularSquare = calculateSquare(perpendicular);
  var hypotenuseSquare = baseSquare + perpendicularSquare;
  var hypotenuse = Math.sqrt(hypotenuseSquare);

  return hypotenuse;
}

// Example usage
var base = 3;
var perpendicular = 4;
var hypotenuse = calculateHypotenuse(base, perpendicular);
console.log(hypotenuse); // Output: 5



// 10. Write a function that writes variable length arguments list in
// your browser.


function displayArgs() {
  var args = "";
  for (var i = 0; i < arguments.length; i++) {
    args += arguments[i] + " ";
  }
  document.write(args);
}
displayArgs("Hello", "world!"); // Output: Hello world!
displayArgs(1, 2, 3, 4, 5); // Output: 1 2 3 4 5
displayArgs(true, "foo", 42); // Output: true foo 42


// 11. Write a function that accepts any number of arguments &amp;
// find largest of the number.



function findLargestNumber() {
  let largestNumber = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > largestNumber) {
      largestNumber = arguments[i];
    }
  }
  return largestNumber;
}

console.log(findLargestNumber(5, 10, 2, 8, 3)); // Output: 10
console.log(findLargestNumber(-1, -5, -10, -3)); // Output: -1
console.log(findLargestNumber(7)); // Output: 7


// 12. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// a. Arguments as values
// b. Arguments as variables


function calculateArea(width, height) {
  var area = width * height;
  return area;
}

// Example usage:
var width = 5;
var height = 10;
var resul = calculateArea(5, 10); // Pass arguments as values
console.log(resul); // Output: 50

function calculateArea(width, height) {
  var area = width * height;
  return area;
}

// Example usage:
var width = 5;
var height = 10;
var resut = calculateArea(width, height); // Pass arguments as variables
console.log(resut); // Output: 50



// 13. Write a function that receives an array &amp; returns the sorted
// array.

function sortArray(arr) {
  return arr.sort();
}

const myArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = sortArray(myArray);

console.log(sortedArray); // output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]


// 14. Write a function that takes numbers array, sums its elements
// &amp; returns the sum.


function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let numbers = [1, 2, 3, 4, 5];
let reult = sumArray(numbers); // result will be 15

// 15. Execute &amp; monitor the output of following JS program:
// var param = function inner() {
// return typeof inner;
// }
// alert(param());


var param = function inner() {
  return typeof inner;
  }
  alert(param())


// 16. Write a function that computes power of a number. E.g. 2 3 is
// 8.



function calculatePower(base, exponent) {
  let result = 1;

  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;
}

// Example usage
console.log(calculatePower(2, 3)); // Output: 8
console.log(calculatePower(5, 2)); // Output: 25


// 17. Write a function that simulates a dice &amp; returns a random
// dice value.


function rollDice() {
  // Generate a random number between 1 and 6
  return Math.floor(Math.random() * 6) + 1;
}

// Call the function to get a random dice value
var diceValue = rollDice();
console.log("The dice value is: " + diceValue);



// 18. Write a JavaScript function that reverse a number.
// Example x = 32243;
// EXPECTED OUTPUT : 34223

function reverseNumber(num) {
  let reverse = 0;
  while (num > 0) {
    reverse = (reverse * 10) + (num % 10);
    num = Math.floor(num / 10);
  }
  return reverse;
}
console.log(reverseNumber(32243)); // expected output: 34223

// 19. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same
// backward as forward, e.g., madam.


function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  
  // Reverse the string and compare with the original
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false

// 20. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : &#39;the quick brown fox&#39; 
// EXPECTED OUTPUT : &#39;The Quick Brown Fox&#39;


function capitalizeWords(str) {
  // split the string into an array of words
  const words = str.split(" ");
  
  // iterate through each word and capitalize the first letter
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  
  // join the array of words back into a string and return it
  return words.join(" ");
}


const str = "the quick brown fox";
const capitalizedStr = capitalizeWords(str);
console.log(capitalizedStr); // "The Quick Brown Fox"



// 21. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : &#39;Web Development Tutorial&#39; 
// EXPECTED OUTPUT : &#39;Development&#39;

function findLongestWord(str) {
  var words = str.split(' ');
  var longestWord = '';
  for(var i = 0; i < words.length; i++) {
    if(words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

var longest = findLongestWord('Web Development Tutorial');
console.log(longest); // output: 'Development'


// 22. Write a JavaScript function that accepts a string as a
// parameter and counts the number of vowels within the string.
// EXAMPLE STRING : &#39;The quick brown fox&#39; 
// EXPECTED OUTPUT : 5

function countVowels(str) {
  // Initialize a variable to store the count
  let count = 0;
  // Convert the string to lowercase to simplify the logic
  str = str.toLowerCase();
  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    // If the character is a vowel, increment the count
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      count++;
    }
  }
  // Return the count of vowels
  return count;
}

// Example usage
console.log(countVowels('The quick brown fox')); // Output: 5



// 23. Write a JavaScript function which accepts an argument and
// returns the type.
// Note : There are six possible values that typeof returns: object,
// boolean, function, number, string, and undefined.

function checkType(value) {
  return typeof value;
}

console.log(checkType("hello")); // "string"
console.log(checkType(42)); // "number"
console.log(checkType(true)); // "boolean"
console.log(checkType({})); // "object"
console.log(checkType(undefined)); // "undefined"
console.log(checkType(function() {})); // "function"


// 24. Write a JavaScript function to extract unique characters
// from a string.
// EXAMPLE STRING :
// &quot;thequickbrownfoxjumpsoverthelazydog&quot;
// EXPECTED OUTPUT : &quot;thequickbrownfxjmpsvlazydg&quot;


function extractUniqueChars(str) {
  let uniqueChars = "";
  for (let i = 0; i < str.length; i++) {
    if (uniqueChars.indexOf(str[i]) === -1) {
      uniqueChars += str[i];
    }
  }
  return uniqueChars;
}
const inputString = "thequickbrownfoxjumpsoverthelazydog";
const outputString = extractUniqueChars(inputString);
console.log(outputString); // "thequickbrownfxjmpsvlazydg"


// 25. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : &#39;JSResourceS.com&#39;, &#39;o&#39; 
// EXPECTED OUTPUT : 2

function countOccurrences(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

// Example usage
let tr = "JSResourceS.com";
let letter = "o";
let occurrences = countOccurrences(tr, letter);
console.log(occurrences); // Output: 2



// 26. The Age Calculator
// Forgot how old you are? Calculate it!
//  Write a function named calculateAge that:
// o takes 2 arguments: birth year, current year.
// o calculates the 2 possible ages based on those years.
// o outputs the result to the screen like so: &quot;You are either
// NN or NN&quot;
// 
//  Call the function three times with different sets of values.
//  Bonus: Figure out how to get the current year in JavaScript
// instead of passing it in.



function calculateAge(birthYear) {
  let currentYear = new Date().getFullYear();
  let age1 = currentYear - birthYear;
  let age2 = age1 - 1;
  return `You are either ${age1} or ${age2}`;
}

// Call the function with different sets of values
console.log(calculateAge(1990)); // You are either 33 or 32
console.log(calculateAge(1985)); // You are either 38 or 37
console.log(calculateAge(2000)); // You are either 23 or 22



// 27. The Lifetime Supply Calculator
// Ever wonder how much a &quot;lifetime supply&quot; of your favorite snack
// is? Wonder no more!
//  Write a function named calculateSupply that:
// o takes 2 arguments: age, amount per day.
// o calculates the amount consumed for rest of the life
// (based on a constant max age).
// o outputs the result to the screen like so: &quot;You will need
// NN to last you until the ripe old age of X&quot;
// 
//  Call that function three times, passing in different values
// each time.
//  Bonus: Accept floating point values for amount per day, and
// round the result to a round number.

function calculateSupply(age, amountPerDay) {
  const maxAge = 100; // assume maximum age of 100
  const amountPerYear = amountPerDay * 365.25; // account for leap years
  const amountNeeded = Math.round((maxAge - age) * amountPerYear);
  const message = `You will need ${amountNeeded} to last you until the ripe old age of ${maxAge}.`;
  return message;
}

const age1 = 30;
const amountPerDay1 = 1.5;
const rsult1 = calculateSupply(age1, amountPerDay1);
document.getElementById('rsult').innerHTML = rsult1;

const age2 = 40;
const amountPerDay2 = 2.0;
const rsult2 = calculateSupply(age2, amountPerDay2);
document.getElementById('rsult').innerHTML += '<br>' + rsult2;

const age3 = 50;
const amountPerDay3 = 2.5;
const rsult3 = calculateSupply(age3, amountPerDay3);
document.getElementById('rsult').innerHTML += '<br>' + rsult3;


// 28. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
//  Pass the radius to the function.
//  Calculate the circumference based on the radius, and output
// &quot;The circumference is NN&quot;.
// Create a function called calcArea:
//  Pass the radius to the function.
//  Calculate the area based on the radius, and output &quot;The area
// is NN&quot;.


// Function to calculate the circumference of a circle
function calcCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  console.log("The circumference is " + circumference.toFixed(2));
}

// Function to calculate the area of a circle
function calcArea(radius) {
  var area = Math.PI * radius * radius;
  console.log("The area is " + area.toFixed(2));
}

calcCircumference(5); // Output: The circumference is 31.42
calcArea(5); // Output: The area is 78.54


// 29. The Temperature Converter
// It&#39;s hot out! Let&#39;s make a converter based on the steps here.
// Create a function called celsiusToFahrenheit:
//  Store a celsius temperature into a variable.
//  Convert it to fahrenheit and output &quot;NN°C is NN°F&quot;.
// Create a function called fahrenheitToCelsius:
//  Now store a fahrenheit temperature into a variable.
//  Convert it to celsius and output &quot;NN°F is NN°C.&quot;



// Celsius to Fahrenheit converter
function celsiusToFahrenheit(celsius) {
  var fahrenheit = (celsius * 9/5) + 32;
  return celsius + "°C is " + fahrenheit + "°F";
}

// Fahrenheit to Celsius converter
function fahrenheitToCelsius(fahrenheit) {
  var celsius = (fahrenheit - 32) * 5/9;
  return fahrenheit + "°F is " + celsius + "°C";
}

// Example usage:
console.log(celsiusToFahrenheit(25)); // Output: 25°C is 77°F
console.log(fahrenheitToCelsius(77)); // Output: 77°F is 25°C

