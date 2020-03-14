const color = 'red';
switch(color){
    case 'red' :
         console.log('color is Red');
         break ;
    case 'Blue' :
        console.log('Color is Blue');
        break;
    default:
        console.log('COlor is not red or blue');
}

let day
switch(new Date().getDay()){
    case 0 :
        day = 'Sunday';
    case 1 :
        day = 'Monday';
    case 2 :
        day = 'Tuesday';
    case 3 :
        day = 'Wednesday';
    case 4 :
        day = 'Thursday';
    case 5 :
        day = 'Friday';
    case 6 :
        day = 'Saturday';
}

console.log(day);