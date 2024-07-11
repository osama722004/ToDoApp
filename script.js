const todoList = document.getElementById("todo-list");
const finishedList = document.getElementById("finished-list");
const newTaskInput = document.getElementById("new-task");

window.addTask = function () {
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
                <span class="task-text">${taskText}</span>
                <button class="finish" onclick="finishTask(this)">Finish</button>
                <button class="edit" onclick="editTask(this)">Edit</button>
                <button class="delete" onclick="deleteTask(this)">Delete</button>
            `;
    todoList.appendChild(taskItem);
    newTaskInput.value = "";
  }
};

window.editTask = function (button) {
  const taskItem = button.parentElement;
  const newText = prompt(
    "Edit Task:",
    taskItem.querySelector(".task-text").textContent
  );
  if (newText !== null) {
    taskItem.querySelector(".task-text").textContent = newText;
  }
};

window.deleteTask = function (button) {
  button.parentElement.remove();
};

window.finishTask = function (button) {
  const taskItem = button.parentElement;
  taskItem.classList.add("finished");
  finishedList.appendChild(taskItem);
  button.remove();
};
