const booksContent = document.querySelector('.books-content');

export default (book) => {
  booksContent.innerHTML += `
              <div class="single-book" id="${book.id}">
        <div class="title">${book.title} by ${book.author}</div>
        <button class="button">remove</button>
      </div>
          `;
};
