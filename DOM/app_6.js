//Replace Element

//Create Element
const newHeading = document.createElement('h2');

//Add id
newHeading.id = 'task-title';

//New Text mode
newHeading.appendChild(document.createTextNode('Tasks List'));

// Get old Heading 
const oldHeading = document.getElementById('task-title');

// Parent
const cardAction = document.querySelector('.card-action');

//Replace
cardAction.replaceChild(newHeading , oldHeading);
console.log(newHeading);


// REMOVING ELEMENTS
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove Child Element
list.removeChild(lis[3]);

// CLASSES & ATTR
const firstli = document.querySelector('li:first-child');
const link = firstli.children[0];

let val ;
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('text');
val = link;

//Attribute
val = link.getAttribute('href');
val - link.setAttribute('href', 'http://google.com');
link.setAttribute('title','Google');
val =link.hasAttribute('title');
link.removeAttribute('title');
val = link;


console.log(val);
