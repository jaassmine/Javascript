// Define ui vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load all Event listener
loadEventListerners();

// Load all event listeners
function loadEventListerners() {
    //DOM load Event
    document.addEventListener('DOMContentLoaded', getTasks);
    //Add task Event
    form.addEventListener('submit', addTask);
    // Remove Task
    taskList.addEventListener('click', removeTask);
    // Clear tasks
    clearBtn.addEventListener('click',clearTasks);
    //filter tasks
    filter.addEventListener('keyup', filterTask);
}

//Get tasks from ls
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')=== null){
        tasks = [];
    } else {
        tasks =JSON.parse(localStorage.getItem('tasks'));
    }
 

    tasks.forEach(function(task){
        //Create li element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //create text node and append the child to li
    li.appendChild(document.createTextNode(task));
    //Create new link Element
    const link =document.createElement('a');
    //Add class
    link.className='delete-item secondary-content';
    //Add icon Html
    link.innerHTML='<i class="fa fa-remove"></i>';
    //Append the link to li
    li.appendChild(link);
    //Append li to ul
    taskList.appendChild(li);
    });
}


function addTask(e) {
    if(taskInput.value === '') {
        alert('add a task');
    }

    //Create li element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //create text node and append the child to li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link Element
    const link =document.createElement('a');
    //Add class
    link.className='delete-item secondary-content';
    //Add icon Html
    link.innerHTML='<i class="fa fa-remove"></i>';
    //Append the link to li
    li.appendChild(link);
    //Append li to ul
    taskList.appendChild(li);

    //store in ls
    storetaskInLocalStorage(taskInput.value);
    //Clear Input
    taskInput.value = '';



    e.preventDefault();
}

//STORE TASKS
function storetaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks')=== null){
        tasks = [];
    } else {
        tasks =JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks' , JSON.stringify(tasks));
}

//REMOVE TASKS
function removeTask(e) {
     if(e.target.parentElement.classList.contains('delete-item')) {
         if(confirm('Are You sure ?')){
             e.target.parentElement.parentElement.remove();

             //Remove from ls
             removeTaskFromLocalStorage(e.target.parentElement.parentElement);
         }
     }
}

//REMOVE FROM LS
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks')=== null){
        tasks = [];
    } else {
        tasks =JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task,index) {
        if(taskItem.textContent === task) {
            tasks.splice(index , 1);
        }
    });
 
    localStorage.setItem('tasks',JSON.stringify(tasks));
}


function clearTasks() {
   // taskList.innerHTML = '';
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
     }
     //Clear tasks from ls
     clearTasksFromLocalStorage();
}

//CLEAR TASKS FROM LOCAL STORAGE
function clearTasksFromLocalStorage(){
    localStorage.clear();
}
function filterTask(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item =task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block'; 
        } else{
            task.style.display = 'none';
        }
    });
}