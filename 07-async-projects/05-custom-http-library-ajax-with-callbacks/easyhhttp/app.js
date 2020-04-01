const http = new easyHTTP();

// Get Posts
http.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

/* Original - without using our custom http library
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  xhr.onload = function() {
    console.log(xhr.status); // 200
    console.log(xhr.readyState); // 4
    console.log(xhr.responseText); // [{},{},{},...]
  };

  xhr.send();
*/
