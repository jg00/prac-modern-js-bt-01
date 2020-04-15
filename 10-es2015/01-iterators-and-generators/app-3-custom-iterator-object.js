// Custom Iterator Object returned
function makeRangeIterator(start, end, step) {
  let nextIndex = start;
  let returned = false;

  return {
    next: function () {
      let result = {};

      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
      } else if (!returned) {
        // we are not yet finished, send one last time
        result = {
          value: nextIndex,
          done: true,
        };
        returned = true;
      } else {
        result = { done: true };
      }
      return result;
    },
  };
}

let it = makeRangeIterator(1, 10, 2); // returns the object ie Iterator object

let result = it.next(); // method must return and object with properties value and done;

while (!result.done) {
  console.log(result.value);
  result = it.next();
}

console.log("Iteraged over sequence of size: ", result.value);
