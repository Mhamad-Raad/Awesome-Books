import Store from './storeClass.js';
import { Book } from './modules/book.js';
import * as DisplayScreen from './display.js';
import { getDateTime } from './modules/date.js';

let counter = 0;

// display books event
document.addEventListener('DOMContentLoaded', DisplayScreen.displayBooks);

const displayTime = () => setInterval(() => {
  document.querySelector('#time').innerHTML = getDateTime();
}, 1000);

// display time
window.addEventListener('load', displayTime);

// Add book event
document.querySelector('.add-book').addEventListener('submit', (e) => {
  counter += 1;
  e.preventDefault();
  // getting form values
  const title = document.querySelector('.title-input').value;
  const author = document.querySelector('.author-input').value;
  const id = counter;

  // instatiate books
  const book = new Book(title, author, id);
  document.querySelector('.title-input').value = '';
  document.querySelector('.author-input').value = '';
  // Display Book to screen
  DisplayScreen.addBookToList(book);
  // Add to local Storage
  Store.addBook(book);
});

document.querySelector('.books').addEventListener('click', (e) => {
  DisplayScreen.deleteBook(e.target);
  // Remove book from Local Storage
  Store.removeBook(parseInt(e.target.classList[1], 10));
});
