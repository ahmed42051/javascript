// Assignment	#	56-48

// SWITCH	STATEMENTS	
// AND	
// WHILE… DO-WHILE	LOOPS

// 1. About Me: Every webpage needs an &quot;About&quot; section.
// Start with this HTML and save it as &quot;aboutme.html&quot;: a. Add a script tag to the bottom.
// b. Change the body style so it has a font-family of
// &quot;Arial, sans-serif&quot;.
// c. Replace each of the spans (nickname, favorites,
// hometown) with your own information.
// d. Add a style tag that sets a rule for &quot;listitem&quot; to make
// the color red. Iterate through each li and change the
// class to &quot;listitem&quot;.
// e. Create a new img element and set its src attribute to
// a picture of you. Append that element to the page. 


// 2. The Logo Hijack:
//  Open up www.google.com in Chrome or Firefox, and
// open up the console.
//  Find the Google logo and store it in a variable.
//  Modify the source of the logo IMG so that it&#39;s a Yahoo
// logo instead.
//  Find the Google search button and store it in a variable.
//  Modify the text of the button so that it says &quot;Yahooo!&quot;
// instead.


// 3. Write a JavaScript program that
// a. Display a paragraph of text through HTML (the
// paragraph text should contain some bold/strong
// words).

// Get the paragraph element
let paragraph = document.getElementById("my-paragraph");
let boldWords = paragraph.getElementsByTagName("strong");

for(let i=0; i<boldWords.length; i++) {
  boldWords[i].addEventListener("mouseover", function() {
    this.classList.add("red");
  });

  boldWords[i].addEventListener("mouseout", function() {
    this.classList.remove("red");
  });
}


// 4. Write a JavaScript program to count and display the
// items of a dropdown list, in an alert window.


function countItems() {
  var select = document.getElementById("myList");
  var count = select.options.length;
  alert("The dropdown list has " + count + " items.");
}


// 5. Write a JavaScript function that creates a table, accept
// row, column numbers from the user, and input row-
// column number as content (e.g. Row-0 Column-0) of a
// cell.

function createTable(rows, columns) {
  // create a table element
  var table = document.createElement("table");

  // create rows and columns
  for (var i = 0; i < rows; i++) {
    // create a row element
    var row = document.createElement("tr");

    for (var j = 0; j < columns; j++) {
      // create a column (cell) element
      var cell = document.createElement("td");

      // add content to the cell
      cell.textContent = "Row-" + i + " Column-" + j;

      // add the cell to the row
      row.appendChild(cell);
    }

    // add the row to the table
    table.appendChild(row);
  }

  // return the table element
  return table;
}

// example usage: create a table with 3 rows and 4 columns
var myTable = createTable(3, 4);

// add the table to the body of the document
document.body.appendChild(myTable);


// 6. Here is a sample html file with a submit button. Write a
// JavaScript function to get the value of the href, hreflang,
// rel, target, and type attributes of the specified link.
// &lt;p&gt;
// &lt;a id=&quot;myLink&quot; type=&quot;text/html&quot; hreflang=&quot;en-us&quot; rel=&quot;nofollow&quot; target=&quot;_self&quot;
// href=&quot;http://www.abc.com/&quot;&gt;Visit ABC factory&lt;/a&gt;
// &lt;/p&gt;
// &lt;button onclick=&quot;getAttributes()&quot;&gt; Click here to get attributes value&lt;/button&gt;


function getLinkAttributes() {
  // Get the link element
  const linkElement = document.querySelector('a');

  // Get the values of the link attributes
  const href = linkElement.getAttribute('href');
  const hreflang = linkElement.getAttribute('hreflang');
  const rel = linkElement.getAttribute('rel');
  const target = linkElement.getAttribute('target');
  const type = linkElement.getAttribute('type');

  // Log the values to the console
  console.log(`href: ${href}`);
  console.log(`hreflang: ${hreflang}`);
  console.log(`rel: ${rel}`);
  console.log(`target: ${target}`);
  console.log(`type: ${type}`);
}





// 7. Write a JavaScript program to set the background color of
// a paragraph.

function setBackgroundColor() {
  // Get the paragraph element
  const paragraphElement = document.getElementById('paragraph');

  // Set the background color to red
  paragraphElement.style.backgroundColor = 'green';
}



// 8. Assume we have some US dollars. Write a JavaScript
// program that converts the total currency to Pakistani
// Rupees and vice versa. The conversion should be
// performed in real time while user types any number in any
// of the fields.
// (Exchange rates : 1 US Dollar = 105 Pakistani
// Rupees)
// Demo: https://youtu.be/jqSNv-ZgTa8

function usdToPkr() {
  let usdInput = document.getElementById("usd-input").value;
  let pkrOutput = usdInput * 105;
  document.getElementById("pkr-input").value = pkrOutput;
}

function pkrToUsd() {
  let pkrInput = document.getElementById("pkr-input").value;
  let usdOutput = pkrInput / 105;
  document.getElementById("usd-input").value = usdOutput;
}

// 9. Write a program that shows the following web page. If
// user clicks any of the link in the given navigation bar, the
// content of area changes according to user’s click.
// Demo:
// https://www.youtube.com/watch?v=7JI4kil7WAk&amp;featur
// e=youtu.be


function showHome() {
  document.getElementById("home").style.display = "block";
  document.getElementById("about").style.display = "none";
  document.getElementById("services").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

function showAbout() {
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "block";
  document.getElementById("services").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

function showServices() {
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("services").style.display = "block";
  document.getElementById("contact").style.display = "none";
}

function showContact() {
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("services").style.display = "none";
  document.getElementById("contact").style.display = "block";
}


// 10. Memory Game: Implement the memory game web
// app. The game splits the screen into a 4x4 game board.
// Under each square hides a letter. When a player clicks on
// a square, that letter is revealed, and the player gets a
// chance to find its match by clicking on another square. If
// the two letters match, both letters remain visible; if they
// don&#39;t, they both return to their hidden state. The game


