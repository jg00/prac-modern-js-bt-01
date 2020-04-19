// 1 Variables can be stored by reference or by value
// All data types in JS are either primitive or objects

// 2 Primitives are stored by value

// 3 Objects are stored by reference
// Objects are mutable
let obj = {
  name: "Popeye",
};

let cartoon = obj;

console.log(obj);
console.log(cartoon);

cartoon.girlfriend = "Olive Oil";

console.log(obj);
console.log(cartoon);

// 4 Arrays are stored by reference
let arr = [1, 2, 3];
let arr2 = arr;
arr2.push(4);
console.log(arr);
console.log(arr2);

// 5 Primitive data types are immutable (ie cannot be changed); Stored by value;
let name = "Garfield"; // The value is immutable ie "Garfield" cannot be changed.
console.log(name); // Garfield
console.log(name.toUpperCase()); // GARFIELD; Display but does not mutate value "Garfield"
console.log(name); // Garfield
name = "Odie"; // In this case we changed the variable but you cannot change the value.
console.log(name); // Odie

// 6 Primitive data types
let x = 5;
function sum(x, y) {
  x = x + y;
}

sum(x, 3);
console.log(x); // Still 5

// 7 Mutating the array
let arr3 = [1, 2, 3];
arr3.push(1); // We have mutated the array; We have not changed the reference.
console.log(arr3);
