// 1 Symbol()
// - Returns a unique value of type symbol and makes it valuable in terms of "object property identifiers".
// - Does not support syntax "new Symbol()". It is not a constructor, it is an actual primitive value.
// -

// const sym1 = Symbol();
// const sym2 = Symbol("sym2"); // You can add an identifier

// console.log(sym1);
// console.log(typeof sym2); // "symbol" primitive type
// console.log(Symbol() === Symbol()); // false; Can never be the same.

// 2 Unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol("sym2");

const myObj = {};

// 3 Use [] syntax to use the actual Symbol (unique) as a property
myObj[KEY1] = "Prop1";
myObj[KEY2] = "Prop2";
myObj.key3 = "Prop3"; // remember assigning this way is not using the symbol. It is just a simple property.
myObj.key4 = "Prop4";

// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

// 4 Symbols are not enumerable in for..in
for (let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

// 5 Symbols are ignored by JSON.stringyfy (turns JS object literal to a string)
console.log(JSON.stringify({ key: "prop" })); // {"key":"prop"}
console.log(JSON.stringify({ [Symbol("sym1")]: "prop" })); // {}
