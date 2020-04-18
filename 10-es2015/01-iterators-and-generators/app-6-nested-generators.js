// Nested generators (ie iterators).  Working with multiple generators.

// This is used as the inner generator
function* inigo() {
  yield "Hello. My name is inigo montoya.";
  yield "You killed my father.  Prepare to die.";
}

// yield* from another generator
function* countR() {
  yield "Good heavens, are you still trying to win?";
  yield "You've got an overdeveloped sense of vengence, that's going to get you in trouble someday.";
  yield* inigo();
  yield* inigo();
  yield* inigo();
  yield "Stop saying that!";
  yield* inigo();
}

const princessBride = countR(); // Our Generator that will yield to an inner generator
// console.log(princessBride.next().value);
// console.log(princessBride.next().value);
// console.log(princessBride.next().value);

for (let lines of princessBride) {
  console.log(lines);
}
