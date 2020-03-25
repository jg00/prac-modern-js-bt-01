// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor - for set of prototype methods like add book to the list, delete the book, show alerts, etc.
function UI() {}

// Event Listeners
document.getElementById("book-form").addEventListener("submit", function(e) {
  console.log(e.target);

  e.preventDefault();
});
