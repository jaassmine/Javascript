//var , let , const 
/* var declarations are globally scoped or function scoped while 
   let and const are block scoped. 
   var variables can be updated and re-declared within its scope; 
   let variables can be updated but not re-declared; 
   const variables can neither be updated nor re-declared.
*/
//VAR
var name = 'John Doe';
console.log(name);
name = 'Steve Smith' ;
console.log(name);

//Init var 
var greeting;
//console.log(greeting);  Error because greeting is not defined 
greeting = 'Hello';
console.log(greeting);

/*rule for varibale 
    Letter, numbers, underscore(_), $ 
    cannot start with number 
*/
var $na = 'jas';
console.log($na);

var firstName = 'Jhon'  //camel case 
var first_name = 'Tara'  // underscore 
var FirstName = 'tom' //pascal case 


//LET
let NAME;
NAME = 'John Doe';
console.log(NAME);
NAME = 'Steve Smith' ;
console.log(NAME);

//CONST 
const Name = 'Jhon';
console.log(Name);
//can not reassign 
//name = 'sara';

const person = {   //class
    name: 'john',
    age: 30
} 
person.name = 'sara';
person.age = 32 ;

console.log(person);

const numbers = [1,2,3,4]; //array
numbers.push(6);
//Error number = [1,2,3,4,6] because its a whole new array 
console.log(numbers);