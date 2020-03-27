// For single Instances
    // const brad = {
    //     name : 'Brad',
    //     age : 30 ,
    // }
    // console.log(brad);



//  For Multiple Instances
    //  constructor Method
    
//  Person constructor
function Person(name , dob) {         // constructor should start with capital letter
    this.name = name ;
    // this.age = age ;
    this.birthdate = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthdate.getTime();
        const age = new Date(diff);
        return Math.abs(age.getUTCFullYear()-1970);
    }
} 

// console.log(this);          // In global scope (outside the funcction) this keyword gives the current window object
// this.alert();
// const john = new Person('John' 23) ;
const brad = new Person('Brad' , '9-10-1998');


console.log(brad);
console.log(brad.calculateAge());
// console.log(john);