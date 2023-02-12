 //Assignment # 6
 // MATH EXPRESSIONS


// 1. Write a program to take a number in a variable, do the
//required arithmetic to display the following result in your
//browser:


let a = 10;
document.write("<h1>Arithmetic</h1>");
document.write("Result:" + "<br>");
document.write("The value of a is: " + a + "<br>");
document.write("................................................" + "<br>");
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now The value of a is: " + (a) + "<br>");
document.write("The value of a++ is: " + (a) + "<br>");
document.write("Now The value of a is: " + (++a) + "<br>");
document.write("The value of --a is " + (a) + "<br>");
document.write("Now The value of a is: " + (--a) + "<br>");
document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now The value of a is: " + (a--) + "<br>");


//3. Write a program that takes input a name from user &
//greet the user.

document.write("<h1>Input a name from user</h1>");

let name = prompt("Please enter your name: ");
console.log("Hello, " + name + "! Have a great day ahead.");
document.write("Hello, " + name + "! Have a great day ahead.")



//5. Write a program to take input a number from user &
//display it’s multiplication table on your browser. If user
//does not enter a new number, multiplication table of 5
//should be displayed by default.

document.write("<h1>Multiplication table</h1>");
let num = parseInt(prompt("Enter a number: ")) || 5;

let table = "<table border='1' cellspacing='0' cellpadding='5'>";

for (let i = 1; i <= 10; i++) {
  table += "<tr><td>" + num + " x " + i + " = " + num * i + "</td></tr>";
}

table += "</table>";

document.write(table);


//6. Take
//a) Take three subjects name from user and store them in 3
//different variables.
//b) Total marks for each subject is 100, store it in another
//variable.
//c) Take obtained marks for first subject from user and
//stored it in different variable. d) Take obtained marks for remaining 2 subjects from user
//and store them in variables.
//e) Now calculate total marks and percentage and show the
//result in browser like this.(Hint: user table)

let subject1 = prompt("Enter the name of subject 1: ");
let subject2 = prompt("Enter the name of subject 2: ");
let subject3 = prompt("Enter the name of subject 3: ");

let totalMarks = 100;

let marks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ": "));
let marks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ": "));
let marks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ": "));

let totalObtainedMarks = marks1 + marks2 + marks3;
let percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

document.write("<h1>Total marks and percentage</h1>");
document.write("<table border='1' cellspacing='0' cellpadding='5'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td></tr>");
document.write("<tr><td>Total</td><td>" + totalMarks * 3 + "</td><td>" + totalObtainedMarks + "</td></tr>");
document.write("<tr><td>Percentage</td><td colspan='2'>" + percentage + "%</td></tr>");
document.write("</table>");