// Map is a key-value pair and is more protected than a regular object.
// Objects are not iterable.  Map, however, is iterable and maintain their
// sort order.
// Map object come with members we can use like get() and set();

// Object with key and a value.
// const myContacts = {
//   "Rob": "555-4444",
//   "Jim": "555-1111"
// }

let myContacts = new Map();
myContacts.set("Rob", "555-4444");
console.log(myContacts.get("Rob"));

// You can actually use a function as a key to a Map();
let keyFunction = () => {
  console.log("Hello World");
};
myContacts.set(keyFunction, "I used a function as a key");
console.log(myContacts.get(keyFunction));
