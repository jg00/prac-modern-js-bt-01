/*
  Generators
    - allow you to define an iterative algorithm by writing a single function whose execution is not continuous.
    - function* 
    - When called initially, generator functions do not execute any of their code, instead returning a type of iterator called a Generator.
    - When the iterator's next() method is called, the generator's function body is executed until the first yield expression, which specifies
      the value to be returned from the iterator, or with yield*, delegates to another generator function.
    - The Generator function executes until it encounters the yeild keyword.
    - Like a disposable camera a Generator (Iterator) can only be used once.
*/

// Ex 1 - generator example
function* aGenerator() {
  console.log("I ran");

  const dataFromNext = yield 88; // Stops at yield 88 and also the value 88 is sent to caller;  Variable dataFromNext does not seem to be set until the second .next();

  console.log("I ran again and dataFromNext finally shows on", dataFromNext);
}

let gen = aGenerator();
console.log(gen); // Returns aGenerator {<suspended>} object

const a = gen.next(100); // Run till it sees yield and an IteratorResult object is returned. {value: 88, done: false}.
console.log("a:", a); // {value: 88, done: false}  is an IteratorResult object with two properties.

const b = gen.next(101); // Picks up on the second .next(101), the 101 will be passed in.
console.log("b:", b); // IteratorResult also returned at the end; b: {value: undefined, done: true}

// Ex 2 - counter generator
function* counter() {
  let i = 0;
  while (true) {
    console.log("I'm before the yield");
    const dataFromNext = yield i++;
    console.log(dataFromNext, i);
  }
}

// yield i++ means i does not get incremented until the statement is finished
// yield ++i before yield runs increment i

const gen2 = counter();

document.querySelector(".btn").addEventListener("click", () => {
  const iteratorResultObj = gen2.next("This is some data"); // (IMPORTANT NOTE) A value passed to next() will be treated as the result of the last yield expression that paused the generator.
  console.log("-", iteratorResultObj);
});
