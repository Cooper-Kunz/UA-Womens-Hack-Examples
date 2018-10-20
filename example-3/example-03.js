// Step 1: Define an array of strings

var items = ["Laptop", "Desktop", "Watch", "mouse", "Mouse",
            "Monitor", "Phone", "Snack", "Backpack"];

/* 
    Step 2: When the window loads, 
    Set the value to the items on initial load
*/

window.onload = function() { 
    document.getElementById("sorting-example").innerHTML = items;
}


/* 
    Step 3: Define a function, sortItems() 
    This will only be invoked by the button onclick() method in our HTML
*/ 

function sortItems() {

    // Step 4: Call a default sorting algorithm built into JavaScript
    items.sort();

    //Step 5: Render the now sorted values
    document.getElementById("sorting-example").innerHTML = items;
}
