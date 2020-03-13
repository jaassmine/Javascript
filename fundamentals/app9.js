const person ={            //defining object
    firstName: 'Steve',
    lastName: 'Andrew',
    age: 30,
    email: 'steve@out.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'miami',
        state: 'Ml'
    },
    getBirthYear: function(){
        return 2017 - this.age;
    }
}

let val ;
val = person ;
// Get specific value
val = person.firstName;
val= person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people= [
    {name: 'John', age: 30},
    {name: 'Brad', age: 32}
];

for(let i =0; i<people.length ; i++){
    console.log(people[i].name);
}