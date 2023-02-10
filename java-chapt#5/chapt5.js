//Assignment # 5

//MATH EXPRESSIONS | JAVASCRIPT

//1. Write a program that take two numbers & add them in a
//new variable. Show the result in your browser.

var num1 = parseInt(prompt("Enter the first number:"));
var num2 = parseInt(prompt("Enter the second number:"));
var sum = num1 + num2;
document.write("The sum of " + num1 + " and " + num2 + " is " + sum);

//2. Repeat task1 for subtraction, multiplication, division & modulus.

var num1 = parseInt(prompt("Enter the first number:"));
      var num2 = parseInt(prompt("Enter the second number:"));

      var difference = num1 - num2;
      var product = num1 * num2;
      var quotient = num1 / num2;
      var remainder = num1 % num2;

      document.write("The difference of " + num1 + " and " + num2 + " is " + difference + "<br>");
      document.write("The product of " + num1 + " and " + num2 + " is " + product + "<br>");
      document.write("The quotient of " + num1 + " and " + num2 + " is " + quotient + "<br>");
      document.write("The remainder of " + num1 + " divided by " + num2 + " is " + remainder + "<br>");

      //3. Do the following using JS Mathematic Expressions a.Declare a variable.


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
     
     document.write("The cost of buying " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR.");

     //5. Write a script to display multiplication table of any number in your browser. E.g
      
     function displayTable() {
        var num = 4;
        var result = "";
        for (var i = 1; i <= 10; i++) {
          result += num + " x " + i + " = " + num * i + "<br>";
        }
        document.getElementById("table").innerHTML = result;
      }

      //6. The Temperature Converter: It’s hot out! Let’s make a
      //converter based on the steps here.
      //a. Store a Celsius temperature into a variable.
      //b. Convert it to Fahrenheit & output “NNoC is NNoF”.
      //c. Now store a Fahrenheit temperature into a variable.
      //d. Convert it to Celsius & output “NNoF is NNoC”.
      //Conversion Formulae:

       // Step 1: Store a Celsius temperature into a variable
  var celsiusTemperature = 25;

  // Step 2: Convert Celsius to Fahrenheit
  var fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
  document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F" + "<br>");

  // Step 3: Store a Fahrenheit temperature into a variable
  var fahrenheitTemperature = 70;

  // Step 4: Convert Fahrenheit to Celsius
  celsiusTemperature = (fahrenheitTemperature - 32) * 5 / 9;
  document.write(fahrenheitTemperature + "°F is " + celsiusTemperature + "°C");