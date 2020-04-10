/*
  Notes:
  1 We can catch and handle errors without stopping the rest of the script.
  2 Below show different types of global errors
  3 We throw our own errors.
*/

const user = { email: "jdoe@gmail.com" };

try {
  // 1 ReferenceError
  // myFunction();

  // 2 TypeError
  // null.myFunction(); // We can't call something like a property from null.  This will simulate a TypeError

  // 3 SyntaxError
  // console.log(eval("2+2")); // result> 4; eval() function will evaluate javascript within a string
  // console.log(eval('"Hello World"')); // result> Hello World; Not a SyntaxError because it is evaluated as a string.  ' "Hello World" '
  // console.log(eval("Hello World")); // result> Simulate SyntaxError

  // 4 URIError
  // decodeURIComponent("%"); // result> URIError: URI malformed at decodeURIComponent()

  // 5 Throw an exception
  if (!user.name) {
    // throw "User has no name";
    // You can format as a certain type of error
    throw new SyntaxError("User has no name");
  }

  // Catch
} catch (e) {
  console.log(`User Error: ${e.message}`); // Custom error
  // console.log(e); // default error; Capture "throw" exceptions.
  // console.log(e.name, "-", e.message, "-", "SOME ERROR"); // custom error

  // console.log(e.message); // myFunction is not defined
  // console.log(e.name); // Reference error
  // console.log(e instanceof ReferenceError); // true; Used to check what kind of error
  // console.log(e instanceof TypeError); // false
} finally {
  console.log("Finally runs regardless of result..");
}

console.log("Program continues..");
