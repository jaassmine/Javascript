const personPrototype = {
    greeting: function(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried:  function(newlastName){
        this.lastName = newlastName ;
    }
}

const mary = Object.create(personPrototype);
mary.firstName = 'Mary' ; 
mary.lastName = 'Williams';
mary.age = 30;

console.log(mary);
console.log(mary.greeting());
mary.getsMarried('Thompson');
console.log(mary.greeting());

const brad = Object.create(personPrototype ,{
    firstName : {value: 'Brad'},
    lastName : {value: 'Traversey'},
    age : {value:36}
});

console.log(brad);
console.log(brad.greeting());
