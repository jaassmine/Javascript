// function declarations
function gret(){
     console.log('Hello'); 
}
//functon calling
gret();

//Function with return 
function greet(){
   return 'heello';
}
console.log(greet());

//Function with parameter
function Greet(firstName){
    //console.log('Hello');
    return 'Hello' + firstName; 
}
console.log(Greet('Jhon'));

//DEfault parameters
function Greeting(firstName = 'john'){
    //console.log('Hello');
    return 'Hello' + firstName; 
}
console.log(Greeting());

//Immediatley invokable function Expression = IIFEs
(function(){
    console.log('IIFEs Ran.. ');
})();

(function(name){
    console.log('Hello '+ name);
})('Brad');

// Property methods
const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`edit todo ${id}`);
    }
}
todo.delete = function(){
    console.log('Delete todo..');
}

todo.add();
todo.edit(22);
todo.delete();