let books = localStorage.getItem('books') === null ? 
[
  {
  title : 'The Hobbit',
  author: 'Shaker',
  id: '0',
  },
  {
  title : 'Harry Potter',
  author: 'Jonathan',
  id: '1',
  },
  {
  title : 'Art of War',
  author: 'San Tzu',
  id: '2',
  },
] 
: 
JSON.parse(localStorage.getItem('books'));

const bookSection = document.querySelector('.books');

for(let i = 0; i < books.length; i++){
  bookSection.innerHTML += 
  `
  <div class="book">
  <p class="title">${books[i].title}</p>
  <p class="author">${books[i].author}</p>
  <button class="remove" onclick="deleteBook(${books[i].id})">Remove</button>
  <hr>
</div>
  `;
}

const addBookbtn = document.querySelector('.add-btn');
const deleteBookbtn = document.querySelector('.remove');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');

addBookbtn.addEventListener('click', (e) => {
  books.push({
    title: titleInput.value,
    author: authorInput.value,
    id: (books.length).toString(),
  });

  bookSection.innerHTML += 
  `
  <div class="book">
  <p class="title">${titleInput.value}</p>
  <p class="author">${authorInput.value}</p>
  <button class="remove" onclick="deleteBook(${books.length})">Remove</button>
  <hr>
</div>
  `;
  e.preventDefault();
  localStorage.setItem('books', JSON.stringify(books));
  console.log(books);
});


function deleteBook(bookID) {
  
 const bookDiv = document.querySelectorAll('.book')

  books = books.filter((book) => (book.id !== bookID.toString()));
  bookDiv[bookID].remove();
}

