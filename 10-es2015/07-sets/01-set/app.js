// Set()
// - Can hold any data type
// - All Elements are unique (unlike in an array)
// - iterable (insertion order)

// 1 Set() can take an iterable.  Duplcates are remove.
// let employeeId = new Set(["a12", "e7", "c2", "a12"]);
// console.log(employeeId);

// employeeId.forEach((emp) => {
//   console.log(emp);
// });

// 2a .clear(), .delete()
let employeeSet = new Set();

employeeSet.add({ name: "Jane", position: "CTO", tenure: "12 years" });
employeeSet.add({ name: "Jane", position: "CTO", tenure: "12 years" }); // Different object
employeeSet.add({ name: "Jane", position: "CTO", tenure: "13 years" }); // Different object
employeeSet.add({ name: "Jane", position: "CTO", tenure: "14 years" }); // Different object
// console.log(employeeSet);

// employeeSet.clear(); // empty the set
// console.log(employeeSet);

// 2b deleting (Unless we had used a variable that points to the object then we could delete(objVariable))
employeeSet.forEach((emp) => {
  if (emp.tenure === "12 years") employeeSet.delete(emp);
});
console.log(employeeSet);
employeeSet.forEach((emp) => console.log(emp));

// 3 .entries() - returns SetIterator
// for (let emp of employeeSet.entries()) {
//   if (emp[0].tenure === "14 years") {
//     console.log(emp);
//   }
// }

// 4 other:
// keys(), values()
// employeeSet.has(obj) - check for presence of an element
