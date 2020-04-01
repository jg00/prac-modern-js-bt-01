/* Custom HTTP API for fetching resources */
const http = new easyHTTP();

// Get Posts
// http.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts); // returns array of objects
//   }
// });

// Get Single Post
// http.get("https://jsonplaceholder.typicode.com/posts/1", function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post); // returns a single object
//   }
// });

// Post Data
const newPost = {
  title: "Post 1 title",
  body: "Post 1 body"
};

// http.post("https://jsonplaceholder.typicode.com/posts", newPost, function(
//   err,
//   responseData
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(responseData);
//   }
// });

// Put Data (update data)
const updatedData = {
  title: "Updated post 1 title",
  body: "Post 1 body"
};

// http.put("https://jsonplaceholder.typicode.com/posts/1", updatedData, function(
//   err,
//   responseData
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(responseData);
//   }
// });

// Delete Post
http.delete("https://jsonplaceholder.typicode.com/posts/1", function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response); // return response of a resource deleted
  }
});

/* 1 Original - without using our custom http library
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  xhr.onload = function() {
    console.log(xhr.status); // 200
    console.log(xhr.readyState); // 4
    console.log(xhr.responseText); // [{},{},{},...]
  };

  xhr.send();
*/

/* 2 Class structure reference only
  class MyTest {
    constructor() {
      this.field1 = "field1";
    }

    getMyName() {
      console.log(this.field1);
    }
  }

  const myTest = new MyTest();
*/
