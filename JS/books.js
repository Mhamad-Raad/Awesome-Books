let books = localStorage.getItem('books') === null ? 
[
  {
  title : 'The Hobbit',
  author: 'Shaker',
  id: '1',
  },
  {
  title : 'Harry Potter',
  author: 'Jonathan',
  id: '2',
  },
  {
  title : 'Art of War',
  author: 'San Tzu',
  id: '3',
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
  <button class="remove">Remove</button>
  <hr>
</div>
  `;
}

const addBookbtn = document.querySelector('.add-btn');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
addBookbtn.addEventListener('click', (e) => {
  books.push({
    title: titleInput.value,
    author: authorInput.value,
    id: (books.length + 1).toString(),
  });

  bookSection.innerHTML += 
  `
  <div class="book">
  <p class="title">${titleInput.value}</p>
  <p class="author">${authorInput.value}</p>
  <button class="remove">Remove</button>
  <hr>
</div>
  `;
  e.preventDefault();
  localStorage.setItem('books', JSON.stringify(books));
  console.log(books);
});
