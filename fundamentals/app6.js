const firstname = 'Jhon';
const lastname = 'Andrew';
const Age =26 ;
const str = 'Hello there my name is Brad';
const tags = 'web Developer, software Engineer, data analysit';
let va ;

va = firstname+lastname ;

// Concatenation
va = firstname + ' ' + lastname;

// Append
va = 'Brad' ;
va += 'Traversey';

va = ' Hello, My name is '+ firstname+ 'and i am '+ age;

// Escaping 
va = 'That\'s awesome, I can\'t Wait';

//Length 
va = firstname.length;
 
// Concat
va = firstname.concat(' ', lastname) ;

// change case
va = firstname.toUpperCase();
va = firstname.toLowerCase();

// indexof()
va = firstname[2];
va = firstname.indexOf('h');
va = firstname.lastIndexOf('h');

// Charat()
va = firstname.charAt('2');

// Get last character 
va = firstname.charAt(firstname.length - 1);

//Substring
va = firstname.substring(0,2);

// slice()
va = firstname.slice(0,4);
va = firstname.slice(-3);

// split()
va = str.split(' ');
va = tags.split(',');

// replace
va = str.replace('Brad', 'jack');

// includes()  = return true or false if something is inside the string
va = str.includes('Hello');

console.log(va);
