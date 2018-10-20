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

function renderItems() {

    // Create a temporary variable to store the item for each iteration
    var temp;

    /* For each item in the items array */
    for (i = 0; i < items.length; i++) {

        /* Create a new HTML <div></div> */
        temp = document.createElement('div');

        /* Example of adding a CSS class name */
        temp.className = 'item';

        /* Example of editing CSS directly in JS */ 
        temp.style.backgroundColor = 'purple';
        temp.style.color = 'white';
        temp.style.padding = '40px';

        /* Set the value of this <div> to the item[currentIndex] */
        temp.innerHTML = items[i];

        /* Append to end of the current <body></body> */ 
        document.getElementsByTagName('body')[0].appendChild(temp);
    }
}
