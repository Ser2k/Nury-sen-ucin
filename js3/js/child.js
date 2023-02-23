// Select the starting point and find its children.
var currentItem = document.getElementById('todo');

console.log(currentItem.children[2]); // 3. child

var firstItem = currentItem.firstElementChild;
var lastItem = currentItem.lastElementChild;

// Change the values of the children's class attributes.
firstItem.className = 'text-primary';
lastItem.className = 'text-success';