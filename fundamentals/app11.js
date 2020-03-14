const id = 100;
 
// Equal to
if( id == 100 )
  {
      console.log('Correct');
  } else {
      console.log('Incorrect');
  }

// Not Equal to
if( id != 100 )
  {
      console.log('Correct');
  } else {
      console.log('Incorrect');
  }
// Equal to value and type
if( id === 100 )
  {
      console.log('Correct');
  } else {
      console.log('Incorrect');
  }

// Not Equal to value and type
if( id !== 100 )
  {
      console.log('Correct');
  } else {
      console.log('Incorrect');
  }

// Test if undefined
if(typeof id !== 'undefined' ){
    console.log('The ID is ${id}');
}
else{
    console.log('No ID')
} 

// Greater or less than 
if( id >= 90 )
  {
      console.log('Correct');
  } else {
      console.log('Incorrect');
  }

// IF ELse
const color = 'Yellow';
if(color === 'red'){
    console.log('Color is Red'); 
}
else if(color === 'blue'){
    console.log('color is blue');
}
else
  console.log('color is yellow');

// Logical operations
const name = 'steve';
const age = 20;

// AND &&
if(age >0 && age < 12){
    console.log(`${name} is a child `);
}else if(age > 12 && age <= 19 ){
    console.log(`${name} is a teenager`);
}else{
    console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
}else {
    console.log(`${name} id registered for the race `);
}

//Ternary Operator
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if( id === 100)
  console.log('Correct');
else 
  console.log('Incorrect');