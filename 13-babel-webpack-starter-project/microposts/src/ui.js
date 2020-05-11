class UI {
  constructor() {
    this.posts = document.querySelector("#posts");
    this.titleInput = document.querySelector("#title");
    this.bodyInput = document.querySelector("#body");
    this.idInput = document.querySelector("#id");
    this.postSubmit = document.querySelector(".post-submit");
    this.formState = "add";
  }

  // Show all posts
  showPosts(posts) {
    let output = "";

    posts.forEach((post) => {
      output += `
        <div class="card mb-3">
          <div class="card-body">
            <h4 class="card-title">${post.title}</h4>
            <p class="card-text">${post.body}</p>
            <a href="#" class="edit card-link" data-id="${post.id}">
              <i class="fa fa-pencil"></i>
            </a>
            <a href="#" class="delete card-link" data-id="${post.id}">
              <i class="fa fa-remove"></i>
            </a>
          </div>
        </div>  
      `;
    });

    this.posts.innerHTML = output;
  }

  // Show alert message
  showAlert(message, className) {
    this.clearAlert();

    // Create div
    const div = document.createElement("div");
    // Add classes
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector(".postsContainer");
    // Get posts
    const posts = document.querySelector("#posts");
    // Insert alert div
    container.insertBefore(div, posts);

    // Timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear hidden id field
  clearIdInput() {
    this.idInput.value = "";
  }

  // Clear all fields
  clearFields() {
    this.titleInput.value = "";
    this.bodyInput.value = "";
  }

  // Fill form to edit
  fillForm(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id; // Hidden element (will be used to check if editing or adding)

    // Other things we want to happen when editing a form
    this.changeFormState("edit");
  }

  // Change the form state
  changeFormState(type) {
    if (type === "edit") {
      this.postSubmit.textContent = "Update Post";
      this.postSubmit.className = `post-submit btn btn-warning btn-block`;

      // Create cancel button
      const button = document.createElement("button");
      button.className = "post-cancel btn btn-light btn-block";
      button.appendChild(document.createTextNode("Cancel Edit"));

      // ParentElement.insertBefore(newChild, refChild)
      // Get parent
      const cardForm = document.querySelector(".card-form");
      // Get element to insert before
      const formEnd = document.querySelector(".form-end");
      cardForm.insertBefore(button, formEnd);
    } else {
      this.postSubmit.textContent = "Post It";
      this.postSubmit.className = `post-submit btn btn-primary btn-block`;

      // Remove cancel btn if it is there
      if (document.querySelector(".post-cancel")) {
        document.querySelector(".post-cancel").remove();
      }

      // Clear ID from the hidden field
      this.clearIdInput();

      // Clear text fields
      this.clearFields();
    }
  }
}

export const ui = new UI();
