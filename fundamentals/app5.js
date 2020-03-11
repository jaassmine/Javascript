const num1 = 100;
const num2 = 50 ;
let value ;

// Simple math With number
value = num1+num2 ; //Addition
value = num1-num2 ; //Subtraction
value = num1*num2 ; //Multiplucation
value = num1/num2 ; //Division
value = num1%num2 ; //Modulus 

//Math object 
value = Math.PI;                      // Value = 3.1
value = Math.E ;                      //
value = Math.round(2.67);             //round method
value = Math.ceil(2.4);
value = Math.floor(34);    
value = Math.sqrt(36);                //sqaure root of 34
value = Math.abs(-3);                 // abstract value of -3
value = Math.pow(8,2);                //8 to the power 2
value = Math.min(1,12,-3,4,55);       // give minimum number 
value = Math.max(112,33,-3,4,444);    //give maximun number
value = Math.random();                //give random number  

value = Math.floor(Math.random()*20 + 1);    //random number between 0 to 21

console.log(value);