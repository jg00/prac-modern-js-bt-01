// Iterator and apply to an Iterable.

/*
  In this example we will create a custom Iterator and change the default Iterator
  property [Symbol.iterator] of an iterable like String type.
*/
let aString = new String("Hi");

// 1 Just shows there already exists an [Symbol.iterator] property (ie a default Iterator is defined for String type).
// console.log(aString[Symbol.iterator]()); // returns the default StringIterator {} object.
// console.log(aString[Symbol.iterator]); // Shows Strings already have a default iterator.

// Works with for..of (uses the default iterator)
// for (let letter of aString) {
//   console.log(letter);
// }

// 2 Let's make our custom Iterator and set the string's [Symbol.iterator] property to our custom Iterator object.
aString[Symbol.iterator] = function () {
  // 1 Return an object.  This IS the custom iterator object.
  // 2 It MUST have a next property
  return {
    // We need another property to check if we are all done.
    allDone: false,

    // Counter of testing
    counter: 0,

    next: function () {
      if (!this.allDone) {
        // Test
        this.counter++; // assign then increment
        if (this.counter === 6) {
          this.allDone = true; // In this example we are going to flag as done at some counter value
        }

        return {
          value: "Haha, you exprected letters and did not get any!",
          done: false,
        };
      } else {
        return { done: true };
      }
    },
  };
};

// Note the for..of is going to run until it gets back an object with a property done: true.  {done:true}.
// Below works because an iterator (ie aString) has an iterator (ie [Symbol.iterator])
for (let letter of aString) {
  console.log(letter);
}

// console.log(aString[Symbol.iterator]().next());
// console.log(aString[Symbol.iterator]().next());
// console.log(aString[Symbol.iterator]().next());
// console.log(aString[Symbol.iterator]().next());
// console.log(aString[Symbol.iterator]().next());
// console.log(aString[Symbol.iterator]().next());
