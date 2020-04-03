const http = new EasyHTTP();

// Get Users
http
  .get("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log("Data or error:", data));
// .catch(err => "");

// Post User
let data = {
  name: "Den",
  username: "DenDen",
};

http
  .post("https://jsonplaceholder.typicode.com/users", data)
  .then((data) => console.log("Data added:", data))
  .catch((err) => console.log(err));

// Put User - update user info
let data2 = {
  name: "Den2222",
  username: "Den2222",
};

http
  .put("https://jsonplaceholder.typicode.com/users/1", data2)
  .then((data) => console.log("Data updated:", data))
  .catch((err) => console.log(err));

// Delete User - update user info
http
  .delete("https://jsonplaceholder.typicode.com/users/2")
  .then((data) => console.log("Data deleted:", data))
  .catch((err) => console.log(err));

/*
  1 Reference only
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
*/
