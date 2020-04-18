// Iterator example
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < names.length
        ? {
            value: names[nextIndex++], // assign and also handle increment
            done: false,
          }
        : { done: true };
    },
  };
}

// Create array of names
const namesArr = ["Jack", "Jill", "John"];

// Init iterator
const names = nameIterator(namesArr);

console.log(names.next());
console.log(names.next());
console.log(names.next());

console.log(names.next());
