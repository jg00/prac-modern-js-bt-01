// 1 Sets - Store unique values of any type
const set1 = new Set();
set1.add(100);
set1.add("A string");
set1.add({ name: "John" });
set1.add(true);
set1.add(100); // duplicate
// console.log(set1);

// 2 Add via iterable
// const set2 = new Set();
// set2.add([1, true, "string"]);
// console.log(set2);

// 3 Check for values
// console.log(set1.has({ name: "John" })); // false; reference type

// 4 Detete
// set1.delete(100);
// console.log(set1);

// 5 for..of - .values(), .keys(), .entries()
// for (let item of set1) {
//   console.log(item);
// }

// 6 forEach()
// set1.forEach((item) => console.log(item));

// 7 Convert to arrays
const setArr = Array.from(set1);
console.log(setArr);
