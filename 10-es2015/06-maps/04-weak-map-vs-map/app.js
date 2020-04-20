// Map (JS)     - HashMap (Java)
// WeakMap (JS) - WeakHashMap (Java)

// Map vs WeakMap
// 1 weakmap will allow garbage collection, if the key has no reference
// 2 weakmap is not an iterable and only has get, set, has, delete.

// Map object example
// 1a Everything up to here works the same as a weakmap
let aStrongMap = new Map();
let friend = { name: "Jim" }; // object to be used here as a key
aStrongMap.set(friend, "Best Friend");
console.log(aStrongMap.get(friend));

// 1b With Map() you cannot change the 'key' unless we explicitly delete the key.
friend = null; // object no longer exists
console.log(aStrongMap.entries()); // object still exists in the map
console.log(aStrongMap.get(friend)); // undefined but still exists in the map

// let friend2 = { name: "Jen" }; // object to be used here as a key
// aStrongMap.set(friend2, "Friend");

// for (let key of aStrongMap) {
//   console.log(key);
// }

// // WeakMap object example
// // 2a Everything up to here works the same as a map
// let aWeakMap = new WeakMap();
// let friend = { friend: "Bill" };
// aWeakMap.set(friend, "Best Friend");
// console.log(aWeakMap.get(friend));

// // 2b Because "the reference to the key" is gone it is considered a
// // weak reference and the weak map will release that value and that key/value relationship
// // will be removed entirely from the map
// friend = null;
// console.log(aWeakMap.get(friend));
