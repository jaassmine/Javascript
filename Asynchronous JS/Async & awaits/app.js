// async function myFunction(){
//     const promise = new Promise((resolve,reject)=> {
//         setTimeout(() => resolve('hello'), 1000);
//     });

//     const error = true;
//     if(!error){
//         const res= await promise ; 
//         return res ;
//     }else {
//         await Promise.reject(new(Error('Something went wrong')));
//     }
// }

// myFunction()
//     .then(res => console.log(res))
//     .catch(res => console.log(err));

async function getUsers(){

    //Await response of the fetch ca;;
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    //only procees once its resolved
    const data = await response.json();

    //only proceed once secoond promise is reolved
    return data ;
}

getUsers().then(users => console.log(users));