// Add () to return object in the case below else {} is treated as the function body.
const sayHello = () => ({
  msg: "Hello"
});

console.log(sayHello());
