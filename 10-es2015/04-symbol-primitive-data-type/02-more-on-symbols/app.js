// 1 Primitive data types
// Boolean
// null
// undefined
// Number
// String

// Non-primitive data types
// Object, function (type of object), array (type of object)

// New primitive datatype
// Symbol

// 2 Like a String
// const str = String("Hello world");
// const aSymbol = Symbol(descriptor);
// console.log(str);
// console.log(aSymbol);

// 3 Symbols are unique
// console.log(String("a") === String("a")); // true
// console.log(Number(2) === Number(2)); // true
// console.log({} === {}); // false; Is the reference to the first object the same as the reference to the second object? No.
// console.log(undefined === undefined); // true
// console.log(Symbol("a") === Symbol("a")); // false; unique

// 4 Symbols - to avoid name collisions!
// const a = Symbol();
// const b = Symbol();
// console.log(a === b); // false

// 5 Use case - Make private variables.
// No one can access the symbol properties if we place
// in another file that is limited to the class.
const CARCOLOR = Symbol();
const CARMAKE = Symbol();
const CARMODEL = Symbol();

class Car {
  constructor(color, make, model) {
    // this.color = color;
    // this.make = make;
    // this.model = model;

    // [] used to "evaluate what is inside of the []"
    this[CARCOLOR] = color;
    this[CARMAKE] = make;
    this[CARMODEL] = model;
  }

  get color() {
    return this[CARCOLOR];
  }
  set color(newColor) {
    this[CARCOLOR] = newColor;
  }
}

let myCar = new Car("Red", "Chevy", "Tahoe");
console.log(myCar);
myCar.color = "Blue"; // Issue is property is public and can be changed from the outside.  Also this is a property that is created.
console.log(myCar);
