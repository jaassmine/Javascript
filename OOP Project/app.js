// Book constructor
function Book(title , author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI constructor
function UI(){
    UI.prototype.addBookToList = function(book){
        const list  = document.getElementById('book-list');
        //Create tr element
        const row =  document.createElement('tr');
        // insert cols
        row.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href= "#" class= "delete">X</a></td>
        `;
        list.appendChild(row)
    }

    //Show Alert
    UI.prototype.showAlert = function(message , className) {
         //Create div
         const div = document.createElement('div');
         //Add class 
         div.className = `alert ${className}`;
         //Add textField
         div.appendChild(document.createTextNode(message));
         //get parent
         const container = document.querySelector('.container');
         //Get Form
         const form = document.querySelector('#book-form');
         //InsertAlert
         container.insertBefore(div,form);
         //Set Timeout
         setTimeout(function(){
             document.querySelector('.alert').remove();
         },3000);
    }


    //Delete Book
    UI.prototype.deleteBook = function(target){
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }
    // Clear Fields
    UI.prototype.clearFields = function(book){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

//event Listener
const B = document.getElementById('book-form');


B.addEventListener('submit', function(e){

    //Get Form Values 
    const title = document.getElementById('title').value,
         author = document.getElementById('author').value,
         isbn = document.getElementById('isbn').value;
    //Instantiate Book
    const book = new Book(title , author , isbn) ;

    //Instantiate UI
    const ui = new UI();
    
    //Validate
    if(title === '' ||author === ''|| isbn === ''){
        // error Alert
        ui.showAlert('Please fill in all fields', 'error');

    }else {
        //Add Book to the List
        ui.addBookToList(book);
        //show success
        ui.showAlert('Book Added!', 'success');

        //Clear fields
        ui.clearFields(book);
    }
  
    e.preventDefault();
});

//Event Listener for delete book
document.getElementById('book-list').addEventListener('click' , function(e){
    const ui = new UI();
    ui.deleteBook(e.target);

    //Show Alert
    ui.showAlert('Book Removed!' , 'success');
    e.preventDefault();
});