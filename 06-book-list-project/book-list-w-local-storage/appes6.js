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

// Store class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  // Capture all books and pass to UI
  static displayBooks() {
    const books = Store.getBooks();

    const ui = new UI();
    books.forEach(function(book) {
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    // Remove from LS books list
    const books = Store.getBooks();

    // ISBN value passed in directly instead
    // console.log(target.parentElement.previousElementSibling.textContent);
    // const isbn = target.parentElement.previousElementSibling.textContent;

    // Remove book; mutates books list
    books.forEach(function(book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    // Update books list
    localStorage.setItem("books", JSON.stringify(books));
  }
}

// DOM load event
document.addEventListener("DOMContentLoaded", Store.displayBooks);

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

    // Add to LS
    Store.addBook(book);

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

  // Remove item from display; pass <a> element
  ui.deleteBook(e.target);

  // Remove from LS; pass isbn text
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show message
  ui.showAlert("Book Removed", "success");

  e.preventDefault();
});
