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

  // Remove task event
  taskList.addEventListener("click", removeTask);

  // Clear all tasks event
  clearBtn.addEventListener("click", clearTasks);

  // Filter tasks event
  filter.addEventListener("keyup", filterTasks);
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

// Remove task (ie li element)
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear all tasks
function clearTasks() {
  // Faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // One approach
  // if (taskList.children.length > 0 && confirm("Are you sure?")) {
  //   taskList.innerHTML = "";
  // }
}

// Filter tasks version 1
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  // task - li element
  document.querySelectorAll(".collection-item").forEach(task => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) !== -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

/*
  // Filter tasks version 2
  function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    const tasks = Array.from(taskList.children);

    if (!text) {
      tasks.forEach(task => {
        task.style.display = "block";
      });
    }

    tasks.forEach(task => {
      const item = task.textContent.toLowerCase();

      if (item.indexOf(text) !== -1) {
        task.style.display = "block";
      } else {
        task.style.display = "none";
      }
    });
  }
*/
