const taskContainer = document.querySelector(".task-container");
const taskWrapper = document.querySelector(".task-wrapper");

// Task Items - individual
const checkboxBtn = document.querySelector(".checkbox-btn");
const taskField = document.querySelector(".task-field");
const editBtn = document.querySelector(".edit-btn");
const deleteBtn = document.querySelector(".delete-btn");

// Add Task modal screen
const addTaskBtn = document.querySelector(".add-btn");
const addTaskInput = document.querySelector(".addtask-input");
const addTaskForm = document.querySelector(".addtask-form");
const addTaskWindow = document.querySelector(".addtask-modal");
const cancelAddTaskBtn = document.querySelector(".addcancel-btn");

// Edit Task modal screen
let editTaskInput = document.querySelector(".edittask-input");
let editTaskForm = document.querySelector(".edittask-form");
let editTaskWindow = document.querySelector(".edittask-modal");
let cancelEditTaskBtn = document.querySelector(".editcancel-btn");

let editTaskTarget = "";

let taskList = [];

let taskList_serialized;
let taskList_deserialized = JSON.parse(localStorage.getItem("taskList"));

// Render tasks saved in localStorage on page load if not empty
if (taskList_deserialized !== null) renderTasksFromLocalStorage();

addTaskBtn.addEventListener("click", () => {
  addTaskWindow.showModal();
  addTaskInput.focus();
});

cancelAddTaskBtn.addEventListener("click", () => {
  addTaskWindow.close();
  addTaskInput.value = "";
});

addTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTaskWindow.close();

  // Create a new task in the list
  if (addTaskInput.value !== "") {
    createNewTask(addTaskInput.value);
  }

  //   Reset the input value
  addTaskInput.value = "";
});

// Updating the Strikethrough of tasks
taskContainer.addEventListener("change", (e) => {
  if (e.target && e.target.matches(".checkbox-btn")) {
    const targetTaskIndex = taskList.findIndex(
      (task) => task.uniqueID === +e.target.parentElement.dataset.id
    );

    if (e.target.checked) {
      e.target.nextElementSibling.classList.add("line-through");
      //   console.log(taskList[targetTaskIndex]);
      taskList[targetTaskIndex].isStrikethrough = true;
    } else {
      e.target.nextElementSibling.classList.remove("line-through");
      taskList[targetTaskIndex].isStrikethrough = false;
    }

    updateLocalStorage();
  }
});

// Edit and Delete Tasks
taskContainer.addEventListener("click", (e) => {
  // Edit Task button
  if (e.target && e.target.matches(".edit-img")) {
    editTaskWindow.showModal();
    editTaskInput.focus();

    editTaskTarget = e.target
      .closest(".task-wrapper")
      .querySelector(".task-field");

    editTaskInput.value = editTaskTarget.textContent;
    // Assign the Task Field to below variable
  }

  //   Delete Task button
  if (e.target && e.target.matches(".delete-img")) {
    // Get the dataset ID of the selected task
    const targetTaskDatasetId = e.target.closest(".task-wrapper").dataset.id;

    // Filter the array and remove the selected task from the object
    taskList = taskList.filter((task) => {
      return task.uniqueID !== +targetTaskDatasetId;
    });

    // Update the localStorage with the deleted item
    updateLocalStorage();

    e.target.closest(".task-wrapper").remove();
  }
});

editTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Create a new task in the list
  if (editTaskTarget && editTaskInput.value !== "") {
    editTaskTarget.textContent = editTaskInput.value;

    // Update the localStorage with the new edited value: find index first.
    const editedTaskIndex = taskList.findIndex(
      (task) => task.uniqueID === +editTaskTarget.parentElement.dataset.id
    );

    // Then update and upload the value.
    taskList[editedTaskIndex].value = editTaskInput.value;
    updateLocalStorage();
  }

  editTaskWindow.close();

  //   Reset the input value
  editTaskInput.value = "";
});

cancelEditTaskBtn.addEventListener("click", () => {
  editTaskWindow.close();
});

function renderTasksFromLocalStorage() {
  taskList_deserialized.forEach((task) => {
    createNewTask(task.value, task.uniqueID, task.isStrikethrough);
  });
}

function createNewTask(value, preRenderedTaskId, preRenderedTaskStrikethrough) {
  const newTask = document.createElement("div");
  const newCheckboxBtn = checkboxBtn.cloneNode(true);
  const newTaskField = taskField.cloneNode(true);
  const newEditBtn = editBtn.cloneNode(true);
  const newDeleteBtn = deleteBtn.cloneNode(true);

  //   Remove hidden from the cloned task (from blueprint in HTML)
  newTask.className =
    "task-wrapper flex bg-[#3A3A3A] w-full h-[50px] items-center rounded-lg mb-2";

  // Add strikethrough depending on pre-rendered task status.
  if (preRenderedTaskStrikethrough === true) {
    newCheckboxBtn.checked = true;
    newTaskField.classList.add("line-through");
  }

  taskContainer.appendChild(newTask);
  newTask.append(newCheckboxBtn, newTaskField, newEditBtn, newDeleteBtn);
  newTaskField.textContent = value;

  //   Pushing the task details on to the object taskList - with uniqueID
  const uniqueID = preRenderedTaskId || Date.now();
  const taskObject = {
    uniqueID,
    value,
    isStrikethrough: preRenderedTaskStrikethrough || false,
  };
  taskList.push(taskObject);

  //   Update the div dataset tag with the uniqueID.
  newTask.dataset.id = uniqueID;

  // Updating the localStorage with the newly added object. (On page load, no need to update)
  if (preRenderedTaskId === undefined) updateLocalStorage();
}

function updateLocalStorage() {
  taskList_serialized = JSON.stringify(taskList);
  localStorage.setItem("taskList", taskList_serialized);
}
