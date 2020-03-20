const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener("submit", addTask);
}

// Add task
function addTask(e) {
  if (!taskInput.value) return alert("Add a task");

  // Create li element
  const li = document.createElement("li");
  li.className = "collection-item";
  li.appendChild(document.createTextNode(taskInput.value));

  // Create new link element
  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = '<i class="fa fa-remove"></li>';

  // Append link to the li
  li.appendChild(link);

  // Append li to the ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";

  e.preventDefault();
}
