// Basic structure IIFE

/*
  (function () {
    // Declare private variables and functions
    return {
      // Declare public variables and functions
    };
  })();
*/

// 1 Standard Module Pattern
const UICtrl = (function () {
  // private
  let text = "Hello World";

  const changeText = function () {
    const element = document.querySelector("h1");
    element.textContent = text;
  };

  // public
  return {
    callChangeText: function () {
      changeText();
      console.log(text); // Allows you to do more not included in your private method.
    },
  };
})();

UICtrl.callChangeText();
// UICtrl.changeText(); // TypeError: UICtrl.changeText is not a function
console.log();

// 2 Revealing Module Pattern

// Instead of returning {} with public functions and their implementation,
// you map an object literal to private functions that you want to reveal.
const ItemCtrl = (function () {
  let data = [];

  function add(item) {
    data.push(item);
    console.log("Item Added..");
  }

  function get(id) {
    return data.find((item) => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get,
  };
})();

ItemCtrl.add({ id: 1, name: "John" });
ItemCtrl.add({ id: 2, name: "Lex" });
const item = ItemCtrl.get(1);
console.log(`${item.id}: ${item.name}`);
