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

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be an a or an e unlike optional ? metachar that can be nothing since it is optional.
re = /[GF]ray/i; // Must be a G or F
re = /[^GF]ray/i; // Match anything except a G or F; Notice [^] inside means NOT one of the characters inside of the []
re = /^[^GF]ray/i; // Match anything except a G or F; Notice ^[^] outside ^ means begins with and inside ^ means NOT one of the characters inside the []
re = /[A-Z]ray/; // Match any uppercase letter unless you add i for case insensitive as well
re = /[a-z]ray/; // Match any lowercase letter only
re = /[A-Za-z]ray/; // Match any case of any letter
re = /[0-3]ray/; // Match any digit 0 thru 3; note that "10ray" will match b/c it matches from "0ray".
re = /[0-9][0-9]ray/; // Match first two digits first

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // Must occur exactly between inclusive {m} amount of times
re = /Hel{2,}o/i; // Must occur at least {m} times

// Parentheses () - Grouping
re = /([0-9]x){3}/; // 3x3x3x3x3x is a match
re = /([0-9]x){3}$/; // 3x3x3x3x3x is a match
re = /^([0-9]x){3}$/; // 3x3x3x3x3x is NOT a match.  3x3x3x is a match (has to be exact).

// String to match
const str = "3x3x3x3x";

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
