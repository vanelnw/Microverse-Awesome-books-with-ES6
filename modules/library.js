import Book from './book.js';
import displayBook from './functions.js';

export default class Library {
  constructor(Books) {
    this.Books = Books;
  }

  addBook = (data) => {
    const id = this.Books.length
      ? this.Books.findLast((element) => element.id > 0).id + 1
      : 1;

    const book = new Book(id, data.get('title'), data.get('author'));
    this.Books.push(book);
    this.addBookInLocalStorage();
    displayBook(book);
  };

  addBookInLocalStorage = () => {
    localStorage.setItem('awesomeBooks', JSON.stringify(this.Books));
  };

  removeBook = (id) => {
    const newBooks = this.Books.filter((b) => b.id !== parseInt(id, 10));

    this.Books = newBooks;
    document.getElementById(`${id}`).remove();
    localStorage.setItem('awesomeBooks', JSON.stringify(this.Books));
  };
}
