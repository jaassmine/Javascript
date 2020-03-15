//GLOABAL SCOPE
var a=1;
let b=2;
const c=3;
console.log(`Global Scope: a=${a}, b=${b}, c=${c}`);

function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`function Scope: a=${a}, b=${b}, c=${c}`);

}
test();
console.log(`Global Scope: a=${a}, b=${b}, c=${c}`);


if( a === 1){
    //Block Scope
    var a=10;
    let b=5;
    const c=6;
    console.log(`Block Scope: a=${a}, b=${b}, c=${c}`);
}

for(let a=0 ; a<5; ++a){
    console.log(`loop a:${a}`);
}
for(var a=0 ; a<5; ++a){
    console.log(`loop a:${a}`);
}
console.log(`Global Scope: a=${a}, b=${b}, c=${c}`);
