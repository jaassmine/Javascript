const form = document.querySelector('form');
const taskinput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');
//Clear input
taskinput.value= '';
// form.addEventListener('submit', runEvent);

//Key Down
taskinput.addEventListener('keydown',runEvent);

//Key Up
taskinput.addEventListener('keyup',runEvent);

//Key press
taskinput.addEventListener('keypress',runEvent);

//focus
taskinput.addEventListener('focus',runEvent);

//blur
taskinput.addEventListener('blur',runEvent);

//Cut
taskinput.addEventListener('cut',runEvent);

//paste
taskinput.addEventListener('paste',runEvent);

//Input
taskinput.addEventListener('input',runEvent);

//Change
//select.addEventListener('change', runEvent);

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

    console.log(e.target.value);
    
    //heading.innerText= e.target.value;
    
//    Get Input value
//     console.log(taskinput.value);
//     e.preventDefault();
 }