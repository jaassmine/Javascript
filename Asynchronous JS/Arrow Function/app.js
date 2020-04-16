// const sayHello = function(){
//     console.log('Hello');
// }

//Arrow function
// const sayHello = () => {
//     console.log('Hello');
// }

//One line function does not need bracess
// const sayHello=() => console.log('Hello');
// sayHello();

//Returning a value
// const sayHello = () => 'Hello'; 

//Equivalent to above
// const sayHello = function(){
//     return 'Hello';
// }

// const sayHello = () => ({msg : 'Hello'});  //Returning object literal 
// console.log(sayHello());

// const sayHello = (firstName, lastName) => console.log(`hello ${name}`);
// sayHello('John' , 'Doe');

// single parameter doesnot need parenthesis
// const sayHello = name => console.log(`hello ${name}`);
// sayHello('john');

const users = ['Nathen', 'John' , 'William'];

// const nameLenghts = users.map(function(name){
//     return name.length ;
// });

//Arrow function
// const  nameLenghts = users.map((name) => {
//     return name.length ;
// });

//Shortest
const nameLenghts = users.map(name => name.length);
console.log(nameLenghts);