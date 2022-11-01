import Library from './modules/library.js';
import displayBook from './modules/functions.js';
import { DateTime } from './modules/luxon.js';

const MyLibrary = new Library(
  JSON.parse(localStorage.getItem('awesomeBooks')) || [],
);

const form = document.getElementById('form');
const navLi = document.querySelectorAll('nav ul li');
const sections = document.querySelectorAll('section');

MyLibrary.Books.forEach((book) => displayBook(book));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  MyLibrary.addBook(new FormData(form));
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav-link')) {
    navLi.forEach((li) => {
      li.classList.remove('active');
      e.target.parentNode.classList.add('active');
    });

    sections.forEach((section) => {
      section.classList = 'hide-section';

      if (e.target.getAttribute('id').includes(section.getAttribute('id'))) {
        section.classList = 'show-section';
      }
    });
  }

  if (e.target.classList.contains('button')) {
    const currentId = e.target.parentNode.getAttribute('id');
    MyLibrary.removeBook(currentId);
  }
});

setInterval(() => {
  const dateTime = DateTime.now().toLocaleString(
    DateTime.DATETIME_FULL_WITH_SECONDS,
  );
  document.querySelector('#date_time').textContent = `${dateTime}`;
}, 1000);
