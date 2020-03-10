let val 

//Number to string
val = '5' 
val = String(4+4); //wrapping 555 to string

// Bool to string
val = String(false);

// Date to String
val = String(new Date());

// Array to String
val = String([1,2,3]); // its length will be 5 ; 1,2,3 every charater is counted as a string

// toString()
val =(5).toString();
val = (true).toString();

console.log(val);
console.log(typeof val);
console.log(val.length);   //length is property of string 
 
// String to Number
val = Number('10');
val = Number(true);
val = Number(null);
val = Number('helo');
val = Number([1,2,3]);

val = parseInt('100.23');
val = parseFloat('122.122');

// Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));  //tofixed is function for fixing decimal point

const val1='5';
const val2 = 10 ;
const sum = val1+val2; //val1 is string so it concatinat with val2 and form 510

 console.log(sum);
 console.log(typeof sum);