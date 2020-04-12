let re;

// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Must start with
re = / world$/i; // Must end with
re = /^hello$/i; // Must begin and end with
re = /h..lo/i; // Matches any ONE character
re = /h*o/i; // Matches any character 0 (ie including nothing at all) or more times
re = /gra?e?y/i; // Optional (Can also be none so Gry will match) character
re = /gra?e?y\?/i; // Escape character ex: "Gray?" where ? is a literal. Escape by \?.

// String to match
const str = "Gray?";

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
