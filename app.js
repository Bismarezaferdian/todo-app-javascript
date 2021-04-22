//selector

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
// const header = document.getElementsByClassName(".header");
// const todoItem = document.querySelector(".todo");

//Event Listener

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", completeDelete);

//function

function addTodo(event) {
  event.preventDefault();
  //add div dan class
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //add li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //menambahkan button
  const newButton = document.createElement("button");
  newButton.innerHTML = '<i class="fas fa-check"></i>';
  newButton.classList.add("complete-btn");
  todoDiv.appendChild(newButton);
  //menambahkan button delete
  const buttonDelete = document.createElement("button");
  buttonDelete.innerHTML = '<i class="fas fa-trash"></i>';
  buttonDelete.classList.add("delete-btn");
  todoDiv.appendChild(buttonDelete);
  //menambahkan addtodo ke list
  todoList.appendChild(todoDiv);
  //clear input todo
  todoInput.value = "";
}
function completeDelete(e) {
  const value = e.target;
  //delete new todo
  if (value.classList[0] === "delete-btn") {
    const todo = value.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
    // todo.remove();
  }
  //checked
  if (value.classList[0] === "complete-btn") {
    const todo = value.parentElement;
    todo.classList.toggle("completed");
  }
}
