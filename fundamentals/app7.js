const name = 'Brad' ;
const age = 30 ;
const job = 'Web Developer';
const city = 'Miami';

// without template String (es5)
html = '<ul><li>Name: '+ name + '</li><li>Age: ' + age + '</li><li>Job: '+ job +
       '</li><li>City: '+ city + '</li></ul>';
document.body.innerHTML = html ;      

function hello(){
    return 'Hello' ;
}
// With template Strings (es6)
html1 = `
   <ul>
     <li>Name: ${name}</li>
     <li>Age: ${age}</li>
     <li>Job: ${job}</li>
     <li>City: ${city}</li>
     <li>${2+2}</li>        
     <li>${hello()}</li>
     <li>${age>30 ? 'over 30': 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html1;