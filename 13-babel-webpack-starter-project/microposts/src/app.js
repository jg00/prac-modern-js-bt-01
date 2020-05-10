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
