// Array Destructuring
let a, b;
[a, b, c, ...rest] = [100, 200, 300, 400, 500];
console.log(rest); // [400, 500]

// Object Destructuring
({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
console.log(a, b);
console.log(rest); // {c: 300, d: 400, e: 500}

// Object Destructuring
const person = {
  name: "John Doe",
  age: 32,
  city: "Miami",
  gender: "Male",
  sayHello: function () {
    console.log("Hello");
  },
};

const { name, age, sayHello } = person;
console.log(name, age);
sayHello();
