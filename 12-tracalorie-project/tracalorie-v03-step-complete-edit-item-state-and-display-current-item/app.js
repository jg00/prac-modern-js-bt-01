/*
  .item-name, .item-calories
  .add-btn, .update-btn, .delete-btn, .back-btn
  .total-calories
  #item-list, .collection, collection-item, #item-0, .edit-item
*/

// Storage Controller

// Item Controller
const ItemCtrl = (function () {
  // Item Constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data Structure / State
  const data = {
    items: [
      // { id: 0, name: "Steak Dinner", calories: 1200 },
      // { id: 1, name: "Cookie", calories: 400 },
      // { id: 2, name: "Eggs", calories: 300 },
    ],
    currentItem: null,
    totalCalories: 0,
  };

  return {
    getItems: function () {
      return data.items;
    },

    addItem: function (name, calories) {
      // Generate id
      let ID;
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1; // next id
      } else {
        ID = 0;
      }

      // Calories to number
      calories = parseInt(calories);

      // Create new item
      const newItem = new Item(ID, name, calories);

      // Add to items array
      data.items.push(newItem);

      return newItem;
    },

    getItemById: function (id) {
      let found = null;

      data.items.forEach(function (item) {
        if (item.id === id) {
          found = item;
        }
      });

      return found;
    },

    setCurrentItem: function (item) {
      data.currentItem = item; // Item {id: 1, name: "b", calories: 2}
    },

    getCurrentItem: function () {
      return data.currentItem;
    },

    getTotalCalories: function () {
      let total = 0;
      data.items.forEach(function (item) {
        total += item.calories;
      });

      // Set total calories in data structure
      data.totalCalories = total;

      return data.totalCalories;
    },

    logData: function () {
      return data;
    },
  };
})();

// UI Controller
const UICtrl = (function () {
  const UISelectors = {
    itemList: "#item-list",

    addBtn: ".add-btn",
    updateBtn: ".update-btn",
    deleteBtn: ".delete-btn",
    backBtn: ".back-btn",

    itemNameInput: "#item-name",
    itemCaloriesInput: "#item-calories",
    totalCalories: ".total-calories",
  };

  return {
    populateItemList: function (items) {
      let html = "";

      items.forEach(function (item) {
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },

    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value,
      };
    },

    addListItem: function (item) {
      // Show the list <ul>
      document.querySelector(UISelectors.itemList).style.display = "block";

      // We want to create a <li> element
      const li = document.createElement("li");

      li.className = "collection-item";

      li.id = `item-${item.id}`;

      li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>`;

      // Insert item
      document
        .querySelector(UISelectors.itemList)
        .insertAdjacentElement("beforeend", li);
    },

    clearInput: function () {
      document.querySelector(UISelectors.itemNameInput).value = "";
      document.querySelector(UISelectors.itemCaloriesInput).value = "";
    },

    // Add Item to form
    addItemToForm: function () {
      document.querySelector(
        UISelectors.itemNameInput
      ).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(
        UISelectors.itemCaloriesInput
      ).value = ItemCtrl.getCurrentItem().calories;

      UICtrl.showEditState();
    },

    // Hide <ul> line
    hideList: function () {
      document.querySelector(UISelectors.itemList).style.display = "none";
    },

    // Show total calories
    showTotalCalories: function (totalCalories) {
      document.querySelector(
        UISelectors.totalCalories
      ).textContent = totalCalories;
    },

    clearEditState: function () {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = "none";
      document.querySelector(UISelectors.deleteBtn).style.display = "none";
      document.querySelector(UISelectors.backBtn).style.display = "none";
    },

    showEditState: function () {
      document.querySelector(UISelectors.updateBtn).style.display =
        "inline-block";
      document.querySelector(UISelectors.deleteBtn).style.display =
        "inline-block";
      document.querySelector(UISelectors.backBtn).style.display =
        "inline-block";
      document.querySelector(UISelectors.addBtn).style.display = "none";
    },

    getSelectors: function () {
      return UISelectors;
    },
  };
})();

// App Controller - Initializers
const App = (function (ItemCtrl, UICtrl) {
  // Load event listeners
  const loadEventListeners = function () {
    // Get UI selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener("click", itemAddSubmit);

    // Edit icon click event - Use event delegation
    document
      .querySelector(UISelectors.itemList)
      .addEventListener("click", itemEditClick);
  };

  // Add item submit (event handler)
  const itemAddSubmit = function (e) {
    // Get input from UI Controller
    const input = UICtrl.getItemInput();

    // Simple validation
    if (input.name !== "" && input.calories !== "") {
      // Add item to item list data structure and return the new item.
      const newItem = ItemCtrl.addItem(input.name, input.calories);

      // Add item to UI list
      UICtrl.addListItem(newItem);

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add total calories to the UI
      UICtrl.showTotalCalories(totalCalories);

      // Clear fields
      UICtrl.clearInput();
    }

    e.preventDefault();
  };

  // Click edit item (event handler)
  const itemEditClick = function (e) {
    if (e.target.classList.contains("edit-item")) {
      // Get list item id (item-0, item-1..)
      const listId = e.target.parentElement.parentElement.id;

      // Break into an array
      const listIdArr = listId.split("-");

      // Get the actual id
      const id = parseInt(listIdArr[1]);

      // Get item
      const itemToEdit = ItemCtrl.getItemById(id);

      // Set current item
      ItemCtrl.setCurrentItem(itemToEdit);

      // Add item to form
      UICtrl.addItemToForm();
    }

    e.preventDefault();
  };

  return {
    init: function () {
      // Clear edit state / set initial state
      UICtrl.clearEditState();

      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Check if any items else pouplate and display list
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        // Populate list with items
        UICtrl.populateItemList(items);
      }

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add total calories to the UI
      UICtrl.showTotalCalories(totalCalories);

      // Load event listeners
      loadEventListeners();
    },
  };
})(ItemCtrl, UICtrl);

// Initialize App
App.init();
