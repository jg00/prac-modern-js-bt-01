// Ex1 - Generator
// function* sayNames(namesArr) {
//   yield "Jack";
//   yield "Jill";
//   yield "John";
// }

// const name = sayNames();
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());

// Ex2 - ID Creator
function* createIds() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
