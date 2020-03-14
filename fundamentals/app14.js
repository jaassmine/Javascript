//FOR LOOP
for(let i = 0 ; i < 5 ; i++){
    console.log('Number ' + i);
}

for(let i = 0 ; i < 5 ; i++){
   if((i % 2) == 0)
      console.log('Number '+i +'is divisivle by 2');
  if(i === 5){
    console.log('Stop the loop');
    break ;
   }
}

//WHILE LOOP
let j = 0;
while(j<5){
    console.log('Number ' + j );
    j++ ;
}

//DO WHILE
let k = 0;
do{
    console.log('Number '+ k );
    k++;
}while(k<5);

const cars = ['ford' , 'chevy', 'Honda', 'Toyota'];
for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

//FOR eACH
cars.forEach(function(car , index , array){
  console.log(car);
  console.log(array);
});

//MAP
const users = [
    {id:1, name: 'John'},
    {id:2, name: 'Sara'},
    {id:3, name: 'Karen'},
];

const ids = users.map(function(user){
    return user.id;
});
console.log(ids) ;

//FOR IN LOOP
const user= {
    firstName: 'John',
    lastNamr: 'Doe',
    age: 35
}
for(let x in user){
    console.log(`${x} : ${user[x]}`);
}