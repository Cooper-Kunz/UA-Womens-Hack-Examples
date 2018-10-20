/* 
    Step 1: Define a function, fetchMockAPI() 
    This will only be invoked by the button onclick() method in our HTML
*/ 

function fetchMockAPI() {
    /* Fetch from a mock REST API */
    fetch('https://jsonplaceholder.typicode.com/todos/').then(response => response.json()).then(json => renderItems(json));
}

/* Step 2, render JSON data */
/* Almost the same as the renderItems() method in example-4.js */

function renderItems(data) {

    // Create a temporary variable to store the item for each iteration
    var temp;

    /* For each item in the items array */
    for (i = 0; i < data.length; i++) {

        /* Create a new HTML <div></div> */
        temp = document.createElement('div');

        /* Example of adding a CSS class name */
        temp.className = 'item';

        /* Example of editing CSS directly in JS */ 
        temp.style.backgroundColor = 'purple';
        temp.style.color = 'white';
        temp.style.padding = '40px';

        /* Set the value of this <div> to the item[currentIndex] */
        temp.innerHTML = data[i].id;

        /* Print each item in the API's JSON request */
        console.log(data[i]);

        /* Append to end of the current <body></body> */ 
        document.getElementsByTagName('body')[0].appendChild(temp);
    }
}

