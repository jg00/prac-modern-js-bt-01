class Book {
  constructor(title, author, isbn) {
    (this.title = title), (this.author = author), (this.isbn = isbn);
  }
}

class UI {
  addBookToList(book) {
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
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }

  showAlert(message, className) {
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
  }

  deleteBook(target) {
    if (target.className === "delete") {
      // console.log(e.target.parentElement);
      // console.log(e.target.parentElement.parentElement);
      target.parentElement.parentElement.remove();
    }
  }
}

// Event Listeners for Add Book
document.getElementById("book-form").addEventListener("submit", function(e) {
  // Get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  // Create book object
  const book = new Book(title, author, isbn);

  // Instantiate UI object
  const ui = new UI();
  // console.log(ui);

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

// Event Listener for Delete
document.getElementById("book-list").addEventListener("click", function(e) {
  // Instantiate UI
  const ui = new UI();

  // Remove item
  ui.deleteBook(e.target);

  // Show message
  ui.showAlert("Book Removed", "success");

  e.preventDefault();
});
