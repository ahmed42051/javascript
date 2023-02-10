//Assignment # 3
        //VARIABLES FOR NUMBERS | JAVASCRIPT
        
        //1. Declare a variable called age & assign to it your age. Show
        //your age in an alert box.
        
        var my_age =  "I am 28 years old";
        alert(my_age)

        //2. Declare & initialize a variable to keep track of how many
        // times a visitor has visited a web page. Show his/her
        // number of visits on your web page. For example: “You
        // have visited this site N times”.

        let visits = 0;

        // Check if the number of visits has been stored in local storage
        if (localStorage.getItem("visits")) {
          visits = parseInt(localStorage.getItem("visits"));
        }
        
        // Increment the number of visits
        visits += 1;
        
        // Store the updated number of visits in local storage
        localStorage.setItem("visits", visits);
        
        // Display the updated number of visits on the page
        const visitCount = document.getElementById("visits");
        visitCount.textContent = visits;

        //3. Declare a variable called birthYear & assign to it your
        //birth year. Show the following message in your browser:

        let birthYear = 1994; // Replace this with your actual birth year

        const message = document.getElementById("birth-year-message");
        message.textContent = `My birth year is ${birthYear}. \n  Data type of my decleared variable is number`;

        //4. A visitor visits an online clothing store
        //www.xyzClothing.com . Write a script to store in variables
        //the following information:
        //a. Visitor’s name
        //b. Product title
        //c. Quantity i.e. how many products a visitor wants to
        //order
        //Show the following message in your browser: “John
        //Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

        let name = "John Doe";
        let product = "T-shirt";
        let quantity = 5;
      
        var store = document.getElementById("order-message");
        store.textContent = `${name} ordered ${quantity} ${product}(s) on XYZ Clothing store.`;
