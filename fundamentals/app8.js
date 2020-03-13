// Create some Arrays

const number1 = [23,50,12,32,4,11];
const number2 = new Array(22,33,44,55);

// Array of strings
const fruit =  ['Apple', 'Banana', 'Orange', 'Pear'];

// Mixed Array
const mixed = [22,'hello', true, null,undefined, {a:1,b:1}, new Date()];
console.log(mixed);

let val;

//get array length
val = number1.length;

// Check if is array
val = Array.isArray(number1);

// Get a Single value
val = number1[3];

//insert into array
number1[2]= 100;

//find index of value 
val = number1.indexOf(100);

// Mutating array
//Add on to end
number1.push(200);
//add on to front
number1.unshift(250);
//take off from End
number1.pop();
//take off from front
number1.shift();
//Splice values
number1.splice(1,1);
//reverse 
number1.reverse();
// concatenate array
val = number1.concat(number2);
//sorting array
val = fruit.sort();
val = number1.sort();
// use the "compare function"
val = number1.sort()   //sort number by comparing the first digit i.e. 103, 34 is compared by comparing 1 and 3

//use the compare function
val = number1.sort(function(x,y){
    return x-y;
});

//find 
function under50(num){
    return num<50;
}

val = number1.find(under50); 

console.log(number1);
console.log(val);