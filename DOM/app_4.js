let val ;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

//Get Child node
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

//NodeType number
// 1. Element
// 2. Attribute(depricated)
// 3. Text Node
// 8. Comment
// 9. Document itself
// 10. Doctype  

//Get children element node
val = list.children;
val = list.children[0];
list.children[1].textContent = 'Hello';

//children of childern
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];;

//First child
val = list.firstChild;
val = list.firstElementChild;

//Last child
val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

//Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//Get sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

//Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);