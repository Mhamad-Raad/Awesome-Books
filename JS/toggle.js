/* eslint-disable no-unused-vars */
const bookTable = document.querySelector('.books-table');
const header = document.getElementsByTagName('h1');
const form = document.querySelector('.add-book');
const contact = document.querySelector('.contact');
let listNav = document.querySelector('.listNav');
let addNewNav = document.querySelector('.addNewNav');
let constactNav = document.querySelector('.contactMe');

function displayList() {
  bookTable.classList.add('mid-section');
  bookTable.classList.remove('hdn');
  form.classList.remove('mid-section');
  form.classList.add('hdn');
  contact.classList.remove('mid-section');
  contact.classList.add('hdn');
  listNav.classList.add('active-nav');
  addNewNav.classList.remove('active-nav');
  constactNav.classList.remove('active-nav');
}

function newBook() {
  bookTable.classList.remove('mid-section');
  bookTable.classList.add('hdn');
  form.classList.add('mid-section');
  form.classList.remove('hdn');
  contact.classList.remove('mid-section');
  contact.classList.add('hdn');
  header[0].textContent = 'Add a New Book';
  listNav.classList.remove('active-nav');
  addNewNav.classList.add('active-nav');
  constactNav.classList.remove('active-nav');
}

function contactInfo() {
  bookTable.classList.remove('mid-section');
  bookTable.classList.add('hdn');
  form.classList.remove('mid-section');
  form.classList.add('hdn');
  contact.classList.add('mid-section');
  contact.classList.remove('hdn');
  header[0].textContent = 'Contact Information';
  listNav.classList.remove('active-nav');
  addNewNav.classList.remove('active-nav');
  constactNav.classList.add('active-nav');
}
