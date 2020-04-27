// Singleton - Only one instance of an object

const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object({ name: "Anderson" });
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance; // return object instance already instantiated
    },
  };
})();

const instanceA = Singleton.getInstance(); // {name: "Anderson"}
const instanceB = Singleton.getInstance(); // {name: "Anderson"}

console.log(instanceA);
console.log(instanceB);
console.log(instanceA === instanceB);
