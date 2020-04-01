// Mimic data from server
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);

      // Test an error
      const error = false;

      if (!error) {
        resolve(); // calls .then()
      } else {
        reject("Error: .catch() called by reject()"); // calls .catch()
      }
    }, 3000);
  });
}

function getPosts() {
  setTimeout(function() {
    let output = "";
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Three", body: "This is post three" })
  .then(getPosts)
  .catch(function(err) {
    console.log(err);
  });

/*
    Note:
    If we did not have a .catch() we get "Uncaught (in promise) .."
  */
