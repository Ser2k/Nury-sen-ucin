var elements = document.getElementsByTagName('li'); // Find <li> elements

if (elements.length > 0) { // If 1 or more are found
    var el = elements[0]; // Select the first one using array syntax
    el.className = 'text-primary'; // Change the value of the class attribute
}

for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.className = 'text-primary';
}