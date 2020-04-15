/*
I Iterable
  1 Iterable:
  - Iterables can be iterated over with for..of 
  - Iterables have an iterator defined for them
  - Iterable has a [Symbol.iterator] property (the defined iterator).

  2 Default: Array, Map, WeakMap, String, TypedArray, Set, WeakSet
  - Some built-in types (Arrays, Map, etc.) have a default iteration behavior while others do not (Object)
  - To be an iterable, an object must implement the @@iterator method meaning
    the object must have a property with a Symbol.Iterator key.

  3 Symbol.iterator:
  - Specifies the default iterator for an object.
  - We can make an {} Object iterable so long as we define this [Symbol.iterator] property. (See mozilla docs.)
  - side note a Symbol is simply a 'something' that gives you a reference

  4 aString - is the Iterable that has an Iterator 
  aString[Symbol.iterator] - is the Iterator property
  .next() - is a method of the Iterator that must return an object with the properties value and done.

II Iterator object implements the Iterator protocol.
  1. An iterator is an object which implements the Iterator protocol by having a next() method
     which returns an object with two properties: 
        - value, the next value in the sequence
        - done, which is true if the last value in the sequence has already been consumed.

  2. Strings are iterables NOT iterator!  The iterator is in the [Symbol.iterator] property.
*/
const aString = "Hello";
console.log(aString[Symbol.iterator]);
console.log(aString[Symbol.iterator]().next()); // {value: "H", done: false}
