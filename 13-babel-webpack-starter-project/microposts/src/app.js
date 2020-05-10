/*
  Utilizes JSONPlaceholder - Fake Online REST API for Testing and Prototyping
  npm install json-server --save (initial setup)
  Create db.json (initial setup)
    > npm run json:server (custom script)

  For our app:
    > npm start
*/

import { http } from "./http";
import { ui } from "./ui";

// Get posts on DOM load
document.addEventListener("DOMContentLoaded", getPosts);

// Listen for submit post
document.querySelector(".post-submit").addEventListener("click", submitPost);

// Listen for remove post
document.querySelector("#posts").addEventListener("click", deletePost);

// Listen for edit state
document.querySelector("#posts").addEventListener("click", enableEdit);

// Get posts
function getPosts() {
  http
    .get("http://localhost:3000/posts")
    .then(function (data) {
      ui.showPosts(data);
    })
    .catch((err) => console.log(err));
}

// Submit post
function submitPost() {
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;

  const data = {
    title: title,
    body: body,
  };

  // Create post
  http
    .post("http://localhost:3000/posts", data)
    .then((data) => {
      ui.showAlert("Post added", "alert alert-success");
      getPosts();
      ui.clearFields();
    })
    .catch((err) => console.log(err));
}

function deletePost(e) {
  e.preventDefault();

  if (e.target.parentElement.classList.contains("delete")) {
    const id = e.target.parentElement.dataset.id;
    if (confirm("Are you sure")) {
      http
        .delete(`http://localhost:3000/posts/${id}`)
        .then((data) => {
          ui.showAlert("Post removed", "alert alert-success");
          getPosts();
        })
        .catch((err) => console.log(err));
    }
  }
}

function enableEdit(e) {
  e.preventDefault();

  if (e.target.parentElement.classList.contains("edit")) {
    console.log("here", e.target);
  }
}
