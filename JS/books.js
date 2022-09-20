const bookSection = document.querySelector('.books');
const addBookbtn = document.querySelector('.add-btn');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');

function deleteParent(){
   
}
class Library {
   book = [];
  constructor(book) {
    for (let i = 0; i < book.length; i += 1) {
      this.book.push(book[i]);
    }
  }
 
  Display(book = null) {
    if(book === null) {
        for(let i = 0; i < this.book.length; i += 1) {
        bookSection.innerHTML
        += `
        <tr>
            <td class="title-author">"${this.book[i].title}" by ${this.book[i].author}</td>
            <td><button class="remove-btn">Remove</button></td>
        </tr>
        `;
      }
    } else {
        bookSection.innerHTML
        += `
        <tr>
            <td class="title-author">"${book.title}" by ${book.author}</td>
            <td><button class="remove-btn">Remove</button></td>
        </tr>
        `;
    } 
    const removeBtn = document.querySelectorAll('.remove-btn');
    for (let i = 0; i < removeBtn.length; i += 1) {
      removeBtn[i].addEventListener('click', () => {
        removeBtn[i].parentElement.parentElement.remove();; 
        this.RemoveBook(this.book[i].id);
      });
  }
    
  }

  AddBook(book) {
    console.log('hjere');
    this.book.push(book);
    localStorage.setItem('books', JSON.stringify(this.book));
    this.Display(book);
  }

  RemoveBook(id) {
    this.book = this.book.filter((book) => book.id !== id);
    localStorage.setItem('books', JSON.stringify(this.book));
  }
}
var booksList = JSON.parse(localStorage.getItem('books'));
var library;
if(booksList !== null){
  library = new Library(booksList);
}
else {
  library = new Library([
    {title: 'The Hobbit', author: 'Jonathan', id: '0'}, 
    {title: 'The Lord of the Rings', author: 'Shaker', id: '1'},
    {title: 'Destiny', author: 'Mhamad', id: '2'}
    ]);
}

library.Display();

addBookbtn.addEventListener('click', (e) => {
  library.AddBook({title: titleInput.value, author: authorInput.value, id: (Math.random()*1000).toString()});
  e.preventDefault();
});
