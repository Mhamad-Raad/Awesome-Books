let id = 2;
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
  id+=1;
  books.push({
    title: titleInput.value,
    author: authorInput.value,
    id: id.toString(),
  });

  bookSection.innerHTML += 
  `
  <div class="book">
  <p class="title">${titleInput.value}</p>
  <p class="author">${authorInput.value}</p>
  <button class="remove" onclick="deleteBook(${id})">Remove</button>
  <hr>
</div>
  `;
  e.preventDefault();
  localStorage.setItem('books', JSON.stringify(books));
  console.log(books);
});


function deleteBook(bookID) {
  const divTitle = document.querySelectorAll('.book .title')
 const bookDiv = document.querySelectorAll('.book')
 console.log(bookID);
 for (let i = 0; i < bookDiv.length; i++) {
  if (divTitle[i].value === books[i].title) {
    bookDiv[bookID].remove();
  }
 }
 books = books.filter((book) => (book.id !== bookID.toString()));
}

