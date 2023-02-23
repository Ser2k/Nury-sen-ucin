var firstItem = document.getElementById('one'); // Get the first item
firstItem.className = 'text-success';           // Change its class attribute

// Get fourth item
var fourthItem = document.getElementsByTagName('li').item(3);

// NOTE: The following line should say fourthItem (not el2)
fourthItem.setAttribute('class', 'text-primary');    // Add an attribute to it
