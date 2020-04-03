// Part of ES7 or ES2016 stardard.  Implemented in Chrome.  May need to be compiled down to ES5.

// Example 3
async function getUsers() {
  // await response of the fetch call
  const response = await fetch("https://jsonplaceholder.typicode.com/users"); // Already returns a promise

  // Only proceed once that promise is resolved
  const data = response.json();

  // Only proceed once the second promise is resolved
  return data;
}

getUsers().then((users) => console.log(users));

/*
// Example 2 - Test async operation.
async function myFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello"), 2000);
  });

  // Fabricate an error
  const error = true;

  if (!error) {
    const res = await promise; // Wait until the promise is resolved
    return res;
  } else {
    await Promise.reject(new Error("Something went wrong"));
  }
}

myFunc()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
*/

/* 
  // Example 1 Adding async alone returns a promise instead of having to wrap the async operation 
  // with a new Promise and returning it.
  async function myFunc() {
    return "Hello";
  }

  myFunc().then(res => console.log(res));
*/
