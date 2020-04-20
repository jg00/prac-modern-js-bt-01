// Weakset
// - Can only hold objects
// - garbage collection performed if you eliminate all references to an object, it will eliminate it from the WeakSet
//   Uses weak references.
// - Not iterable, no get method, size is always 0
// - Use case may be to have a simple way of tagging objects

let harry = {
  name: "Harry",
  id: 12,
};

let sherry = {
  name: "Sherry",
  id: 7,
};

let employeeIds = new WeakSet();

employeeIds.add(harry);
employeeIds.add(sherry);

console.log(employeeIds.has(harry)); // true
