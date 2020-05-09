// CommonJS (Node)
// const person = require("./mymodule1");
// console.log(person.name);

// ES2015 Module
import { person, sayHello } from "./mymodule2";
import * as mod from "./mymodule2";
import greeting from "./mymodule2";

console.log(person.name);
console.log(mod.sayHello());
console.log(greeting);
