// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor - for set of prototype methods like add book to the list, delete the book, show alerts, etc.
function UI() {}

// Add book to list
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById("book-list");

  // Create tr element
  const row = document.createElement("tr");

  // Insert columns
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class='delete'>X</a></td>`;

  list.appendChild(row);
};

// Clear form values
UI.prototype.clearFields = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// Remove item
UI.prototype.removeItem = function(e) {
  if (e.target.className === "delete") {
    console.log(e.target.parentElement);
    console.log(e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.remove();
  }
};

// Event Listeners
// Add New Book
document.getElementById("book-form").addEventListener("submit", function(e) {
  // Get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  // Create book object
  const book = new Book(title, author, isbn);

  // Instantiate UI object
  const ui = new UI();

  // Add book to list
  ui.addBookToList(book);

  // Clear form values
  ui.clearFields();

  e.preventDefault();
});

// Remove item from list
document.getElementById("book-list").addEventListener("click", function(e) {
  // Instantiate UI
  const ui = new UI();

  // Remove item
  ui.removeItem(e);
});
