// Map methods
let keyFunction = () => {
  console.log("Hello");
};

let myContacts = new Map();

// get and set methods
myContacts.set("Rob", "555-1234");
const rob = myContacts.get("Rob");
console.log(rob);

myContacts.set(keyFunction, "I just used a function as a key");
const huh = myContacts.get(keyFunction);
console.log(huh);

// size property
console.log(myContacts.size);

// iterable and maintains order
for (value of myContacts) {
  console.log(value);
}

// clear method
// myContacts.clear();
// console.log(myContacts);

// entries method (get all the entries)
console.log(myContacts.entries()); // returns an iterator object which contains all the [key,value] pairs of each element of the map.

// forEach (allow you to provide a callback that you can run on each item)
myContacts.forEach((value) => {
  console.log(value);
});
console.log("----");

// keys method, values method
console.log(myContacts.keys()); // returns an iterator object
console.log(myContacts.values()); // returns an iterator object
