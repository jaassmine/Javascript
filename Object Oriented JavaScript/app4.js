//Person constructor
function Person(firstName , lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}
const person1 = new Person('john' , 'william');
console.log(person1.greeting());

// Customer constructor
function Customer(firstName , lastName , phone , membership) {
    Person.call(this , firstName , lastName);  //

    this.phone= phone;
    this.membership = membership;
}
// Inherit the person prototype method
Customer.prototype = Object.create(Person.prototype);
//Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;
//create Customer
const customer1 = new Customer('tom' , 'Smith' , '9412398988', 'Standard');
console.log(customer1);
//Customer greeting
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} Welcome to our company`;
}

console.log(customer1.greeting());