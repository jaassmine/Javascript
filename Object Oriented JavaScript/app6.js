class Person{
    constructor(firstName, lastName , dob){
        this.firstName=firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting(){
        return `Hello There ${this.firstName} ${this.lastName}`
    }

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const Age = new Date(diff);
        return Math.abs(Age.getUTCFullYear()-1970);
    }

    getsMarried( newLAstName) {
        this.lastName = newLAstName;
    }

    static adddNumber(x,y){
        return x+y;
    }
}

const mary = new Person('Mary' , 'Williams', '11-3-1979'); // Instantiating an object
console.log(mary);
mary.getsMarried('Thompson');
console.log(mary);

// console.log(mary.adddNumber(1,3));      //Its an error because addNumber is static method its not member of class

console.log(Person.adddNumber(1,3));