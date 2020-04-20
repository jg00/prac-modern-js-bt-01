// MAPS
// key-value pairs
// key or value can be of "any" type.

const map1 = new Map();
const key1 = "some string",
  key2 = {},
  key3 = function () {};

map1.set(key1, "Value of key 1");
map1.set(key2, "Value of key 2");
map1.set(key3, "Value of key 3");

// console.log(map1.get(key1));

// console.log(map1.size);

// console.log();
// console.log("-for..of-");
// for (let [key, value] of map1) {
//   console.log(`${key} = ${value}`);
// }

// console.log();
// console.log("-for..of; keys()-");
// for (let key of map1.keys()) {
//   console.log(key);
// }

// console.log();
// console.log("-for..of; values()-");
// for (let key of map1.values()) {
//   console.log(key);
// }

// console.log();
// console.log("-forEach()-");
// map1.forEach((value, key) => {
//   console.log(`${key} = ${value}`);
// });

// Create an array of key value pairs
console.log();
console.log("-Create array of k,v -");
const keyValArr = Array.from(map1);
console.log(keyValArr); // [[k,v], [k,v], [k,v]]

// Create an array of values
console.log();
console.log("-Create array of v -");
const valArr = Array.from(map1.values());
console.log(valArr);

// Create an array of keys
console.log();
console.log("-Create array of k -");
const keyArr = Array.from(map1.keys());
console.log(keyArr);
