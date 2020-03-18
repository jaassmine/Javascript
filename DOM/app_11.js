// Set local storage item
localStorage.setItem('name','john');
localStorage.setItem('age','30');

// Set Session storage item
//sessionStorage.setItem('name','john');

// //Remove from storage
// localStorage.removeItem('name');

//Get from storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age')
console.log(name) ;
console.log(age) ;

//clear local storage
localStorage.clear();
console.log(name,age);

document.querySelector('form').addEventListener('submit', 
function(e){
    const task = document.getElementById('task').value;
    let tasks ;
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
   
    localStorage.setItem('tasks',JSON.stringify(tasks));
    alert('task Saved');

   e.preventDefault();
});

const tasks  = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
});