// Object.prototype
// E.g Person.prototype
function Person(firstName, lastName, dob) {         // constructor should start with capital letter
    this.firstName = firstName;                     //Property
    this.lastName = lastName ;                      //Property
    this.birthdate = new Date(dob);                 //Property
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthdate.getTime();
    //     const age = new Date(diff);
    //     return Math.abs(age.getUTCFullYear()-1970);
    // }
} 

// Calcualte Age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthdate.getTime();
    const age = new Date(diff);
    return Math.abs(age.getUTCFullYear()-1970);
}

//Get full name
Person.prototype.getFullName =function(){
    return `${this.firstName} ${this.lastName}`;
}

//Gets mary
Person.prototype.getMaried = function(newLastName){
    this.lastName = newLastName; 
}

const john = new Person('john', 'William','5-6-1998');
const mary = new Person('Mary', 'Susane' , '9-10-1997');
console.log(mary) ;
console.log(john.calculateAge());
console.log(mary.getFullName());

mary.getMaried('Louis');

console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));         //it will return true
console.log(mary.hasOwnProperty('getFullName()'));     //it will return false because getFullName is a prototype not a property