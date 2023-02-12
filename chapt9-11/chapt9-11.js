//Assignment # 9-11
//USER INPUT & CONDITIONAL
//STATEMENT 


//1. Write a program to take “city” name as input from user. If
//user enters “Karachi”, welcome the user like this:
//“Welcome to city of lights”

let city = prompt("Enter your city name:");
if (city === "Karachi") {
  document.write("<h1>City name</h1>");
  document.write("Welcome to the city of lights");
}


//2. Write a program to take “gender” as input from user. If the
//user is male, give the message: Good Morning Sir. If the
//user is female, give the message: Good Morning Ma’am.

document.write("<h1>Gender name</h1>");
let gender = prompt("Enter your gender (male or female):");
      if (gender === "male") {
        document.write("Good Morning Sir");
      } else if (gender === "female") {
        document.write("Good Morning Ma'am");
      }


// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

document.write("<h1>Traffic signal</h1>");

let color1 = prompt("Enter the first color of the traffic signal:");
let color2 = prompt("Enter the second color of the traffic signal:");
let color3 = prompt("Enter the third color of the traffic signal:");
let message1, message2, message3;
if (color1 === "red") {
  message1 = "Must Stop";
} else if (color1 === "yellow") {
  message1 = "Ready to move";
} else if (color1 === "green") {
  message1 = "Move now";
}
if (color2 === "red") {
  message2 = "Must Stop";
} else if (color2 === "yellow") {
  message2 = "Ready to move";
} else if (color2 === "green") {
  message2 = "Move now";
}
if (color3 === "red") {
  message3 = "Must Stop";
} else if (color3 === "yellow") {
  message3 = "Ready to move";
} else if (color3 === "green") {
  message3 = "Move now";
}
document.write("<table><tr><th>Signal Color</th><th>Message</th></tr><tr><td id = color>"+ color1 + "</td><td>" + message1 + "</td></tr><tr><td id = color>" + color2 + "</td><td>"+ message2 + "</td></tr><tr><td id = color>" + color3 + "</td><td>" + message3 + "</td></tr></table>");



//4. Write a program to take input remaining fuel in car (in
//    litres) from user. If the current fuel is less than 0.25litres,
//    show the message “Please refill the fuel in your car”

document.write("<h1>Fuel in Car</h1>");
let fuel = prompt("Enter the remaining fuel in your car (in litres):");
      if (fuel < 0.25) {
        document.write("Please refill the fuel in your car!");
      } else{
        document.write("No need to fill the fuel in your car!");  
      }


//      5. Run this script, & check whether alert message would be
//displayed or not. Record the outputs.
//a. var a = 4;
//if (++a === 5){
//alert("given condition for variable a is true");
//}b. var b = 82;
//if (b++ === 83){
//alert("given condition for variable b is true");
//}
//c. var c = 12;
//if (c++ === 13){
//alert("condition 1 is true");
//}
//if (c === 13){
//alert("condition 2 is true");
//}
//if (++c < 14){
//alert("condition 3 is true");
//}
//if(c === 14){
//alert("condition 4 is true");
//}
//d. var materialCost = 20000;
//var laborCost = 2000;
//var totalCost = materialCost + laborCost;
//if (totalCost === laborCost + materialCost){
//alert("The cost equals");
//}
//e. if (true){
//alert("True");
//}
//if (false){
//alert("False");
//}f. if("car" < "cat"){
//alert("car is smaller than cat");
//}

var a = 4;
if (++a === 5){
  alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
  alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
  alert("condition 1 is true");
}
if (c === 13){
  alert("condition 2 is true");
}
if (++c < 14){
  alert("condition 3 is true");
}
if(c === 14){
  alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
  alert("The cost equals");
}
if (true){
    alert("True");
  }
  if (false){
    alert("False");
  }
  if("car" < "cat"){
    alert("car is smaller than cat");
  }

  
// 6. Write a program to take input the marks obtained in three
//subjects & total marks. Compute & show the resulting
//percentage on your page. Take percentage & compute
//grade as per following table USING HTML CSS:
//Show the total marks, marks obtained, percentage, grade &
//remarks like:


function calculateResult() {
    let subject1TotalMarks = document.getElementById("subject1TotalMarks").value;
    let subject1ObtainedMarks = document.getElementById("subject1ObtainedMarks").value;
    let subject2TotalMarks = document.getElementById("subject2TotalMarks").value;
    let subject2ObtainedMarks = document.getElementById("subject2ObtainedMarks").value;
    let subject3TotalMarks = document.getElementById("subject3TotalMarks").value;
    let subject3ObtainedMarks = document.getElementById("subject3ObtainedMarks").value;

    let totalMarks = parseInt(subject1TotalMarks) + parseInt(subject2TotalMarks) + parseInt(subject3TotalMarks);
    let obtainedMarks = parseInt(subject1ObtainedMarks) + parseInt(subject2ObtainedMarks) + parseInt(subject3ObtainedMarks);
    let percentage = (obtainedMarks / totalMarks) * 100;
  
    document.getElementById("totalMarks").value = totalMarks;
    document.getElementById("obtainedMarks").value = obtainedMarks;
    document.getElementById("percentage").value = percentage + "%";
  
    let grade, remarks;
    if (percentage >= 80) {
      grade = "A+";
      remarks = "Excellent";
    } else if (percentage >= 70) {
      grade = "A";
      remarks = "Good";
    } else if (percentage >= 60) {
      grade = "B";
      remarks = "Average";
    } else if (percentage >= 50) {
      grade = "C";
      remarks = "Pass";
    } else {
      grade = "F";
      remarks = "Fail";
    }
  
    document.getElementById("grade").value = grade;
    document.getElementById("remarks").value = remarks;
  }


//7. Guess game:
//Store a secret number (ranging from 1 to 10) in a variable.
//Prompt user to guess the secret number.
//a. If user guesses the same number, show “Bingo! Correct
//answer”.
//b. If the guessed number +1 is the secret number, show
//“Close enough to the correct answer”.

let secretNumber = Math.floor(Math.random() * 10) + 1;
function checkGuess() {
    let guess = document.getElementById("guess").value;
    let resultDisplay = document.getElementById("result");
  
    if (guess == secretNumber) {
      resultDisplay.innerHTML = "Bingo! Correct answer.";
    } else if (Math.abs(guess - secretNumber) <= 1) {
      resultDisplay.innerHTML = "Close enough to the correct answer.";
    } else {
      resultDisplay.innerHTML = "Wrong guess. Try again.";
    }
  }

//  8. Write a program to check whether the given number is
//divisible by 3. Show the message to the user if the number
//is divisible by 3.

document.write("<h1>Divisible number</h1>");
var number = prompt("Enter a number:");
if (number % 3 == 0) {
  alert(number + " is divisible by 3");
} else {
  alert(number + " is not divisible by 3");
}

//9. Write a program that checks whether the given input is an
//even number or an odd number.

document.write("<h1>even or odd number</h1>");

function checkEvenOdd() {
    let number = parseInt(prompt("Enter a number:"));
    if (number % 2 === 0) {
      alert(number + " is an even number.");
    } else {
      alert(number + " is an odd number.");
    }
  }

//  10. Write a program that takes temperature as input and
//shows a message based on following criteria
//a. T > 40 then “It is too hot outside.”
//b. T > 30 then “The Weather today is Normal.”
//c. T > 20 then “Today’s Weather is cool.”
//d. T > 10 then “OMG! Today’s weather is so Cool.”


function showMessage() {
    let temperature = document.getElementById("temperature").value;
    let message = document.getElementById("message");

    if (temperature > 40) {
      message.innerHTML = "It is too hot outside.";
    } else if (temperature > 30) {
      message.innerHTML = "The Weather today is Normal.";
    } else if (temperature > 20) {
      message.innerHTML = "Today's Weather is cool.";
    } else if (temperature > 10) {
      message.innerHTML = "OMG! Today's weather is so Cool.";
    }
  }

//  11. Write a program to create a calculator for +,-,*, / & %
//using if statements. Take the following input:
//a. First number
//b. Second number
//c. Operation (+, -, *, /, %)
//Compute & show the calculated result to user.

function calculate() {
    let firstNumber = parseFloat(document.getElementById("firstNumber").value);
    let secondNumber = parseFloat(document.getElementById("secondNumber").value);
    let operation = document.getElementById("operation").value;
    let result;

    if (operation === "+") {
      result = firstNumber + secondNumber;
    } else if (operation === "-") {
      result = firstNumber - secondNumber;
    } else if (operation === "*") {
      result = firstNumber * secondNumber;
    } else if (operation === "/") {
      result = firstNumber / secondNumber;
    } else if (operation === "%") {
      result = (firstNumber / secondNumber) * 100  + "%";
    }
  
    document.getElementById("resul").value = result;
  }