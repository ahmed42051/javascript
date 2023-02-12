//Assignment # 5

//MATH EXPRESSIONS | JAVASCRIPT


//1. Write a program that take two numbers & add them in a
//new variable. Show the result in your browser.

var num1 = parseInt(prompt("Enter the first number:"));
var num2 = parseInt(prompt("Enter the second number:"));
var sum = num1 + num2;
document.write("<h2>sum of</h2>");

document.write("The sum of " + num1 + " and " + num2 + " is " + sum);

//2. Repeat task1 for subtraction, multiplication, division & modulus.

      var num1 = parseInt(prompt("Enter the first number:"));
      var num2 = parseInt(prompt("Enter the second number:"));

      var difference = num1 - num2;
      var product = num1 * num2;
      var quotient = num1 / num2;
      var remainder = num1 % num2;
      document.write("<h2>subtraction, multiplication, division & modulus</h2>");


      document.write("The difference of " + num1 + " and " + num2 + " is " + difference + "<br>");
      document.write("The product of " + num1 + " and " + num2 + " is " + product + "<br>");
      document.write("The quotient of " + num1 + " and " + num2 + " is " + quotient + "<br>");
      document.write("The remainder of " + num1 + " divided by " + num2 + " is " + remainder + "<br>");



      //3. Do the following using JS Mathematic Expressions
      //a. Declare a variable.
      //b. Show the value of variable in your browser like “Value
      //after variable declaration is: ??”.
      //c. Initialize the variable with some number.
      //d. Show the value of variable in your browser like “Initial
      //value: 5”.
      //e. Increment the variable.
      //f. Show the value of variable in your browser like “Value
      //after increment is: 6”.
      //g. Add 7 to the variable.
      //h. Show the value of variable in your browser like “Value
      //after addition is: 13”.
      //i. Decrement the variable.
      //j. Show the value of variable in your browser like “Value
      //after decrement is: 12”.
      //k. Show the remainder after dividing the variable’s value
      //by 3.
      //l. Output : “The remainder is : 0”.
      

      var num;
      document.write("<h2>JS math expressions</h2>");

      document.write("Value after variable declaration is: " + num + "<br>");
      num = 5;
      document.write("Initial value: " + num + "<br>");
      num++;
      document.write("Value after increment is: " + num + "<br>");
      num = num + 7;
      document.write("Value after addition is: " + num + "<br>");
      num--;
      document.write("Value after decrement is: " + num + "<br>");
      var remainder = num % 3;
      document.write("The remainder is: " + remainder + "<br>");
     // Value after variable declaration is: undefined
     // Initial value: 5
     // Value after increment is: 6
     // Value after addition is: 13
     // Value after decrement is: 12
     // The remainder is: 0


     //4. Cost of one movie ticket is 600 PKR. Write a script to
     //store
     //ticket price in a variable & calculate the cost of buying 5
     //tickets
     //to a movie. Example output:


     var ticketPrice = 600;
     var numberOfTickets = 5;
     var totalCost = ticketPrice * numberOfTickets;
     document.write("<h2>Tickets price</h2>");

     document.write("The cost of buying " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR.");

     //5. Write a script to display multiplication table of any number in your browser. E.g
     function displayTable() {
      
        var num = 4;
        var result = "";
        for (var i = 1; i <= 10; i++) {
          result += num + " x " + i + " = " + num * i + "<br>";
        }
        document.getElementById("tabl").innerHTML = result;
      }

      //6. The Temperature Converter: It’s hot out! Let’s make a
      //converter based on the steps here.
      //a. Store a Celsius temperature into a variable.
      //b. Convert it to Fahrenheit & output “NNoC is NNoF”.
      //c. Now store a Fahrenheit temperature into a variable.
      //d. Convert it to Celsius & output “NNoF is NNoC”.
      //Conversion Formulae:

       // Step 1: Store a Celsius temperature into a variable
  document.write("<h2>Temperature scale</h2>");
  var celsiusTemperature = 25;

  // Step 2: Convert Celsius to Fahrenheit
  var fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
  document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F" + "<br>");

  // Step 3: Store a Fahrenheit temperature into a variable
  var fahrenheitTemperature = 70;

  // Step 4: Convert Fahrenheit to Celsius
  celsiusTemperature = (fahrenheitTemperature - 32) * 5 / 9;
  document.write(fahrenheitTemperature + "°F is " + celsiusTemperature + "°C");


  //7. Write a program to implement checkout process of a
  //shopping cart system for an e-commerce website. Store
  //the following in variables a. Price of item 1
  //b. Price of item 2
  //c. Ordered quantity of item 1
  //d. Ordered Quantity of item 2
  //e. Shipping charges
  //Compute the total cost & show the receipt in your browser.

  function showReceipt() {
    // Store the prices of the items
    const item1Price = 650;
    const item2Price = 100;
  
    // Store the ordered quantities of the items
    const item1Quantity = 3;
    const item2Quantity = 7;
  
    // Store the shipping charges
    const shippingCharges = 100;
  
    // Calculate the total cost of the items
    const totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
  
    // Show the receipt in the browser
    document.write("<h2>Shopping Cart Receipt</h2>");
    document.write("price of Item 1 is " + item1Price  + "<br>");
    document.write("Quanitity of Item 1 is " + item1Quantity  + "<br>");

    document.write("price of  Item 2 is" + item2Price +  "<br>");
    document.write("Quanitity of  Item 2 is " + item2Quantity  + "<br>");
    document.write("Shipping Charges" + shippingCharges + "<br>");
    document.write("Total Cost of your order is " + totalCost);
  }
  
  // Call the function to show the receipt
  showReceipt();

 // 8. Store total marks & marks obtained by a student in 2
 // variables. Compute the percentage & show the result in
 // your browser


  var totalMarks = 980;
  var marksObtained = 804;
  var percentage = (marksObtained / totalMarks) * 100;
  document.write("<h2>Percentage</h2>");
  document.write("Total marks: 980 " + "<br>");
  document.write("Marks obtained: 804 " + "<br>");
  document.write("Percentage: " + percentage + "%" + "<br>");


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
//script to convert the total currency to Pakistani Rupees.
//Perform all calculations in a single expression.
//(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
//and 1 Saudi Riyal = 28 Pakistani Rupee)



var usd = 10;
var sar = 25;
var pkr = (usd * 104.80) + (sar * 28);
document.write("<h1>Currency in PKR</h1>");

document.write("Total amount in PKR: " + pkr + " PKR");


//10. Write a program to initialize a variable with some
//number and do arithmetic in following sequence:
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
//Perform all calculations in a single expression

var num = 5;
var result = ((num + 5) * 10) / 2;
document.write("<h1>Performing all calculations in a single expression</h1>");

document.write("Result: " + result);

//11. The Age Calculator: Forgot how old someone is?
//Calculate it!
//a. Store the current year in a variable.
//b. Store their birth year in a variable.
//c. Calculate their 2 possible ages based on the stored
//values.
//Output them to the screen like so: “They are either NN or NN
//years old”.

var currentYear = 2023;
var birthYear = 1998;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("<h1>Age Calculator</h1>");
document.write("Current Year: 2023 " + "<br>");
document.write("Birth Year: 1998 " + "<br>");


document.write("You are " + age2 + " or " + age1 + " years old");

//12. The Geometrizer: Calculate properties of a circle.
//a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
//output “The circumference is NN”.
//(Hint : Circumference of a circle = 2 π r , π = 3.142)
//Calculate the area based on the radius, and output “The
//area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;
document.write("<h1>The Geometrizer</h1>");
document.write("Radius of a circle: 20 " + "<br>");

document.write("The circumference is: " + circumference + "<br>");
document.write("The area is " + area);


//13. The Lifetime Supply Calculator: Ever wonder how
//much a “lifetime supply” of your favorite snack is?
//Wonder no more.
//a. Store your favorite snack into a variable
//b. Store your current age into a variable.
//c. Store a maximum age into a variable.
//d. Store an estimated amount per day (as a number).
//e. Calculate how many would you eat total for the rest of
//your life.
//Output the result to the screen like so: “You will need
//NNNN to last you until the ripe old age of NN”.


var snack = "chocolate";
  var currentAge = 28;
  var maxAge = 65;
  var amountPerDay = 3;
  var totalAmount = (maxAge - currentAge) * 365 * amountPerDay;
  document.write("<h1>The Lifetime Supply Calculator</h1>");
  document.write("Favorite Snacke: chocolate chip " + "<br>");
  document.write("Current age: 28 " + "<br>");
  document.write("Estimated Maximum Age: 65 " + "<br>");
  document.write("Amount of Snacke per day: 3 " + "<br>");

  document.write("You will need " + totalAmount + " " + snack + " to last you until the ripe old age of " + maxAge + "<br>");


 

