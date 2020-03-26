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

// Clear fields
UI.prototype.clearFields = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// Show message
UI.prototype.showAlert = function(message, className) {
  // Create message element
  const messageElement = document.createElement("div");
  messageElement.className = `alert ${className}`;
  messageElement.appendChild(document.createTextNode(message));

  // Insert to the DOM
  // Get parent
  const container = document.querySelector(".container");
  // Get child ie form
  const bookForm = document.getElementById("book-form");
  // Insert to the DOM before the form
  container.insertBefore(messageElement, bookForm);

  // Timeout after three seconds
  setTimeout(function() {
    document.querySelector(".alert").remove();
    // messageElement.remove(); // Worked as well
  }, 3000);
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

  // Validate input
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please check entries", "error");
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Show message
    ui.showAlert("Book added", "success");

    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Remove item from list
document.getElementById("book-list").addEventListener("click", function(e) {
  // Instantiate UI
  const ui = new UI();

  // Remove item
  ui.removeItem(e);
});
