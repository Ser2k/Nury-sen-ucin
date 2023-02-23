// Create a new element and store it in a variable.
var newEl = document.createElement('li'); // <li></li>

// Create a text node and store it in a variable.
var newText = document.createTextNode('Alma'); // Alma

// Attach the new text node to the new element.
newEl.appendChild(newText); // <li>Alma</li>

// Find the position where the new element should be added.
var position = document.getElementsByTagName('ul')[0];

// Insert the new element into its position.
position.appendChild(newEl); // <ul><li>Alma</li></ul>

// document.getElementsByTagName('ul')[0].innerHTML += '<li>Armyt</li>';

// document.getElementById('one').remove()