document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    //create an xhr object
    const xhr =new XMLHttpRequest();

    //OPEN 
    xhr.open('GET', 'data.txt' , true);

    // console.log('READYSTATE' , xhr.readyState);

    //OPTIONAL - used for spinner or loaders
    xhr.onprogress = function(){
        console.log('READYSTATE' , xhr.readyState);
    }
    xhr.onload = function(){
        console.log('READYSTATE' , xhr.readyState);
        if(this.status === 200  && this.readyState === 4){
            console.log(this.responseText , this.readyState);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    // xhr.onreadystatechange = function(){
    //     console.log('READYSTATE' , xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onerror = function(){
        console.log("REquest error...");
    }
    xhr.send();
}


    //readyState values
    // 0 : REquest not initialized
    // 1: server connection established
    // 2: Request received
    // 3: Processing request
    // 4: request finished and response is ready


     // HTTP status
     // 200 : 'OK'
     // 403 : 'Forbidden'
     // 404 : 'Nit Found'