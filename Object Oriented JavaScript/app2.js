// Strings

const name1 = 'jeff';
const name2 = new String('jeff');

// name2.foo = 'baar';
console.log(name2);

console.log(typeof name1) ;  // String
console.log(typeof name2) ; // its an abject

if(name1 === 'jeff'){
    console.log('yes');
} else {
    console.log('No')
}

if(name2 === 'jeff'){
    console.log('yes');
} else {
    console.log('No')
}

// Number
const num1 = 5;
const num2 = new Number(5);
console.log(num1);
console.log(num2);

//Boolean
const bool1 = true;
const bool2 = new Boolean(true);
console.log(bool1 , typeof bool1);
console.log(bool2 , typeof bool2) ;

// Function
const getSum1 = function(x,y){
    return x+y ;
}
console.log(getSum1(1,1) , typeof(getSum1));
const getSum2 = new Function('x', 'y' ,'return 1+1');
console.log(getSum2(1,1), typeof getSum2);

//Object
const john1 = {name:"john"};
const john2 = new Object({name:"john"}) ; 
console.log(john1);
console.log(john2);

//Arrays
const arr1 = [1,2,3,4] ;
const arr2 = new Array(1,2,3,4);
console.log(arr1, typeof arr1);
console.log(arr2 , typeof arr2);

//Regular Expression
const rel1 = /\w+/;
const rel2 = new RegExp('\w+');

console.log(rel1, typeof rel1);
console.log(rel2, typeof rel2);
