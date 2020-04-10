/*
  Notes:
  1 Regular expressions - describe a pattern of characters to search for in a string (case sensitive)
  2 In JS regular expressions are objects
*/
let re;
re = /hello/gi; // if using a literal, we can add flags after (and combine).  example /hello/i means case insensitive
// re = /hello/g; // Global search means it will search for every instance of the regular expression in for example a paragraph

// console.log(re); // > /hello/
// console.log(re.source); // > hello

// RegEx()
// 1 exec() - Returns result in an array (only info about where pattern found) or null
// const result = re.exec("well hello world hello again");

// console.log(result); // > ["hello", index: 0, input: "hello world", groups: undefined]
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// 2 test() - returns true or false for match
// const result = re.test("wel again Hello there hello and bye");
// console.log(result); // > true b/c we added the i flag

// String()
// 3 match(regex) - Return result array or null
// const str = "Hello There";
// const result = str.match(re);
// console.log(result); // > ["Hello", index: 0, input: "Hello There", groups: undefined]

// 4 search(regex) - Returns index of the first match.  If not found returns -1;
// const str = "Yo Hello There";
// const result = str.search(re);
// console.log(result);

// 5 replace(regex) - Return new string with some or all matches of a pattern
const str = "Hello There, hello again";
const newStr = str.replace(re, "Hi");
console.log(newStr);
