import Store from './storeClass.js';

const bookSection = document.querySelector('.books');

const displayBooks = () => {
  const books = Store.getBooks();

  books.forEach((book) => addBookToList(book));
};

const addBookToList = (book) => {
  bookSection.innerHTML += `
    <tr>
        <td class="title-author">"${book.title}" by ${book.author}</td>
        <td><button class="remove-btn ${book.id}">Remove</button></td>
    </tr>
  `;
};

const deleteBook = (element) => {
  if (element.classList.contains('remove-btn')) {
    element.parentElement.parentElement.remove();
  }
};

export {displayBooks, addBookToList, deleteBook};