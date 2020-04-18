// // 1 Generators ARE Iterators!  Main use of generator is to create iterators easier.
// function* counter() {
//   let i = 0;
//   while (i < 10) {
//     const dataFromNext = yield i++;

//     if (dataFromNext) i = 0;
//   }
// }

// const myGenerator = counter();
// console.log(myGenerator);
// console.log(myGenerator.next().value); // 0 // yield=0; dataFromNext=1
// console.log(myGenerator.next().value); // 1 // yield=1; dataFromNext=2
// console.log(myGenerator.next().value); // 2 // yield=2; dataFromNext=3
// console.log(myGenerator.next().value); // 3 // yield=3; dataFromNext=4
// console.log(myGenerator.next(true).value); // 0 yield=0; dataFromNext=1
// console.log(myGenerator.next().value);
// console.log(myGenerator.next().value);
console.log();

// 2a Basic Iterator
// i Iterators return an object that must have a property called next
// ii next needs to be a function that must return an object with properties value and done
// function myIterator(myArray) {
//   let i = 0;
//   // The iterator object
//   return {
//     next: function () {
//       if (i < myArray.length) {
//         return {
//           value: myArray[i++], // assign first and then handles increment
//           done: false,
//         };
//       } else {
//         return {
//           done: true,
//         };
//       }
//     },
//   };
// }
console.log();

// 2b Replace same basic iterator with a generator
function* myIterator(myArray) {
  for (let i = 0; i < myArray.length; i++) {
    yield myArray[i];
  }

  // Works to
  // while (i < myArray.length) {
  //   yield myArray[i++];
  // }
}

let anArray = [88, 4, 21, 5, 4, 2, 11121, 7, 86, 3];
const gen = myIterator(anArray);

// console.log(gen); // {next: f}
// console.log(gen.next()); // {value: 88, done: false}
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next()); // {value: 3, done: false}
// console.log(gen.next()); // {done: true}

// 2c We can now use for..of
for (let elem of gen) {
  console.log(elem);
}

console.log();
