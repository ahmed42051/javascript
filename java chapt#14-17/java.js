//Assignment	#	14-17

// ARRAYS |	JAVASCRIPT

// |	IF	STATEMENTS NESTED |	ARRAYS|

// 1. Declare an empty array using JS literal notation to store
// student names in future.

const studentNames = [];


// 2. Declare an empty array using JS object notation to store
// student names in future.


const studentData = {
    names: []
  };

studentData.names.push("John");
studentData.names.push("Sarah");
studentData.names[2] = "David";

console.log(studentData)


// 3. Declare and initialize a strings array.

const colors = ["red", "green", "blue", "yellow"];

console.log(colors[0]); // outputs "red"
console.log(colors[2]); // outputs "blue"

colors[1] = "orange";
console.log(colors); // outputs ["red", "orange", "blue", "yellow"]


// 4. Declare and initialize a numbers array.


const numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]); // outputs 1
console.log(numbers[3]); // outputs 4
numbers[2] = 10;
console.log(numbers); // outputs [1, 2, 10, 4, 5]


// 5. Declare and initialize a boolean array.

const booleanArray = [true, false, true, false];
console.log(booleanArray[0]); // outputs true
console.log(booleanArray[2]); // outputs true
booleanArray[1] = true;
console.log(booleanArray); // outputs [true, true, true, false]


// 6. Declare and initialize a mixed array.

const mixedArray = [1, "two", true, { name: "John", age: 30 }, ["red", "green", "blue"]];
console.log(mixedArray[1]); // outputs "two"
console.log(mixedArray[3].name); // outputs "John"
console.log(mixedArray[4][2]); // outputs "blue"
mixedArray[0] = 10;
mixedArray[2] = false;
console.log(mixedArray); // outputs [10, "two", false, { name: "John", age: 30 }, ["red", "green", "blue"]]



// 7. Declare and Initialize an array and store available mobile
// networks in Pakistan.

const mobileNetworks = ["Mobilink", "Telenor", "Ufone", "Zong", "Warid", "Jazz"];
console.log(mobileNetworks[0]); // outputs "Mobilink"
console.log(mobileNetworks[3]); // outputs "Zong"


// 8. Declare and Initialize an array and store available education
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,  M. Phil., PhD). Show the listed qualifications in your browser like:


//const qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
//console.log(qualifications[0]); // outputs "SSC"
//console.log(qualifications[5]); // outputs "MS"
//document.write("<h2>Available Education Qualifications in Pakistan:</h2>");
//document.write("<ol>");
//
//for (let i = 0; i < qualifications.length; i++) {
//  document.write("<h3>" + "<li>) " + qualifications[i] + "</li>" + "</h3>");
//}
//
//document.write("</ol>");




const qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// create a new div element to hold the list of qualifications
const qualificationsBox = document.createElement("div");

// create a heading element for the list
const heading = document.createElement("h2");
heading.textContent = " Qualifications:";
qualificationsBox.appendChild(heading);

// create an unordered list element to hold the qualifications
const list = document.createElement("ol");

// loop through the qualifications array and create a list item for each one
for (let i = 0; i < qualifications.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = qualifications[i];
  list.appendChild(listItem);
}

// add the list to the qualifications box
qualificationsBox.appendChild(list);

// add some styles to the qualifications box
qualificationsBox.style.border = "1px solid blue";
qualificationsBox.style.padding = "20px";
qualificationsBox.style.margin = "20px";
qualificationsBox.style.width = "350px"

// add the qualifications box to the body of the HTML document
document.body.appendChild(qualificationsBox);


// 9. Declare and initialize an empty array to store top movies of
// 2015. Add movies one by one in an array. Display the elements
// & length of array in your browser. (Use array’s length method)

const topMovies2015 = []; // Declare an empty array

// Add movies one by one in an array
topMovies2015.push("Avengers: Age of Ultron");
topMovies2015.push("Spectre");
topMovies2015.push("Jurassic World");
topMovies2015.push("Inside Out");

// Create an HTML box element to display the movies and array length
const topMovies2015Box = document.createElement("div");

// create a heading element for the list
const head = document.createElement("h1");
head.textContent = " Top Movies Of 2015:";
topMovies2015Box.appendChild(head);

// Add the movie titles to the output box
const moviesList = document.createElement("ol");
for (let i = 0; i < topMovies2015.length; i++) {
  const listItem = document.createElement("li");
  listItem.innerText = topMovies2015[i];
  moviesList.appendChild(listItem);
}
topMovies2015Box.appendChild(moviesList);

// Add the array length to the output box
const arrayLength = document.createElement("h4");
arrayLength.innerText = ` Length of the array: ${topMovies2015.length} `;
topMovies2015Box.appendChild(arrayLength);

// add some styles to the qualifications box
topMovies2015Box.style.border = "1px solid blue";
topMovies2015Box.style.padding = "20px";
topMovies2015Box.style.margin = "20px";
topMovies2015Box.style.width = "350px"
// Add the output box to the HTML document
document.body.appendChild(topMovies2015Box);




// 9. Declare and initialize an empty array to store top movies of
// 2015. Add movies one by one in an array. Display the elements
// & length of array in your browser. (Use array’s length method) 



const favoriteCars = [ "Audi ", " Volvo ", " Ford ", " Lamborghini"]; // Declare and initialize an array with favorite cars

// Create an HTML box element to display the car information
const favoriteCarsBox = document.createElement("div");

const headin = document.createElement("h1");
headin.textContent = " Favorite Cars:";
favoriteCarsBox.appendChild(headin);

const Index = document.createElement("h4");
Index.innerText = ` ${favoriteCars}`;
favoriteCarsBox.appendChild(Index);

// Display the first index and car of the array
const firstIndex = document.createElement("h4");
firstIndex.innerText = `The first index of the array: ${favoriteCars.indexOf(favoriteCars[0])}`;
favoriteCarsBox.appendChild(firstIndex);

const firstCar = document.createElement("h4");
firstCar.innerText = `The car at the first index of the array: ${favoriteCars[0]}`;
favoriteCarsBox.appendChild(firstCar);

// Display the last index and car of the array
const lastIndex = document.createElement("h4");
lastIndex.innerText = `The last index of the array: ${favoriteCars.indexOf(favoriteCars[favoriteCars.length - 1])}`;
favoriteCarsBox.appendChild(lastIndex);

const lastCar = document.createElement("h4");
lastCar.innerText = `The car at the last index of the array: ${favoriteCars[favoriteCars.length - 1]}`;
favoriteCarsBox.appendChild(lastCar);


// add some styles to the qualifications box
favoriteCarsBox.style.border = "1px solid blue";
favoriteCarsBox.style.padding = "20px";
favoriteCarsBox.style.margin = "20px";
favoriteCarsBox.style.width = "350px"
// Add the output box to the HTML document
document.body.appendChild(favoriteCarsBox);




// 11. Write a program to store 3 student names in an array. Take
// another array to store score of these three students. Assume
// that total marks are 500 for each student, display the scores &
// percentages of students like:


// Declare and initialize arrays to store student names and scores
const studentNam = ["Michael", "John", "Tony"];
const studentScores = [320, 230, 480];

// Calculate the percentages for each student
const totalMarks = 500;
const studentPercentages = studentScores.map(score => (score / totalMarks) * 100);

// Create an HTML box element to display the student information
const studentNamBox = document.createElement("div");

// Display the student scores and percentages
for (let i = 0; i < studentNam.length; i++) {
  const studentScore = document.createElement("h3");
  studentScore.innerText = `${studentNam[i]} scored ${studentScores[i]} marks, which is ${studentPercentages[i]}% of the total marks.`;
  studentNamBox.appendChild(studentScore);
}
// add some styles to the qualifications box
studentNamBox.style.border = "1px solid blue";
studentNamBox.style.padding = "20px";
studentNamBox.style.margin = "20px";
studentNamBox.style.width = "350px"
// Add the output box to the HTML document
// Add the output box to the HTML document
document.body.appendChild(studentNamBox);



// 12. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end &
// add that color to the end of the array. Display the updated
// array in your browser.
// c. Add two more color to the beginning of the array. Display
// the updated array in your browser. d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color &
// color name. Then add the color to desired position/index.
// . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.



		var color = ["Red", "Green", "Blue"];
		document.write("<h3>Original Array: " + color + "</h3>");

		// Part a
		var addColorBegin = prompt("Enter color name to add at the beginning:");
		color.unshift(addColorBegin);
		document.write("<h3>After adding color at beginning: " + color + "</h3>");

		// Part b
		var addColorEnd = prompt("Enter color name to add at the end:");
		color.push(addColorEnd);
		document.write("<h3>After adding color at end: " + color + "</h3>");

		// Part c
		color.unshift("Yellow", "Orange");
		document.write("<h3>After adding two colors at beginning: " + color + "</h3>");

		// Part d
		color.shift();
		document.write("<h3>After deleting first color: " + color + "</h3>");

		// Part e
		color.pop();
		document.write("<h3>After deleting last color: " + color + "</h3>");

		// Part f
		var addColorIndex = prompt("Enter the index at which you want to add a color:");
		var addColorName = prompt("Enter color name to add at index " + addColorIndex + ":");
		color.splice(addColorIndex, 0, addColorName);
		document.write("<h3>After adding color at index " + addColorIndex + ": " + color + "</h3>");

		// Part g
		var deleteColorIndex = prompt("Enter the index from where you want to delete color(s):");
		var deleteColorCount = prompt("How many colors you want to delete from index " + deleteColorIndex + "?");
		colors.splice(deleteColorIndex, deleteColorCount);
		document.write("<h3>After deleting " + deleteColorCount + " colors from index " + deleteColorIndex + ": " + color + "</h3>");


//  13. Write a program to store student scores in an array & sort
// the array in ascending order using Array’s sort method. 
	

// Define an array of student scores
let scores = [78, 95, 82, 67, 92, 85];

// Sort the array in ascending order using Array's sort method
scores.sort(function(a, b) {
  return a - b;
});


// add some styles to the qualifications box
scoreBox.style.border = "1px solid blue";
scoreBox.style.padding = "20px";
scoreBox.style.margin = "20px";
scoreBox.style.width = "350px"
// Add the output box to the HTML document
// Add the output box to the HTML document
document.body.appendChild(scoreBox);
// Display the sorted array in the console
document.write(scoreBox);
