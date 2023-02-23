// querySelector only returns the first match.
var el = document.querySelector('li.text-danger');
el.className = 'text-primary';

// querySelectorAll returns a NodeList.
// The third li element is then selected and changed.
var els = document.querySelectorAll('li.text-danger');
els[1].className = 'text-success';