import { displayToDoList } from "./projects";
function ToDo(title, description, due, priority) {
  this.title = title;
  this.description = description;
  this.due = due;
  this.priority = priority;
}

function displayToDo(todo, key) {
  const card = document.createElement("div");
  card.classList.add("card");

  let top = document.createElement("div");
  top.classList.add("top-todo-bar");

  let deleteCont = document.createElement("div");
  deleteCont.classList.add("material-icons");
  deleteCont.textContent = "delete";
  deleteCont.classList.add("delete-cont");

  let completeCont = document.createElement("div");
  completeCont.classList.add("material-icons");
  completeCont.classList.add("complete-cont");
  completeCont.textContent = "edit";

  top.appendChild(completeCont);
  top.appendChild(deleteCont);

  card.onmouseenter = () => {
    top.style.visibility = "visible";
  };

  card.onmouseleave = () => {
    top.style.visibility = "hidden";
  };

  deleteCont.onclick = () => {
    if (confirm("Delete " + todo.title + " ?")) {
      let arr = localStorage.getItem(key).split(",");
      let ind = arr.indexOf(todo.title);
      arr.splice(ind, 4);
      localStorage.setItem(key, arr);
      displayToDoList(key);
    }
  };

  completeCont.onclick = () => {
    editModal(todo, key);
  };
  let title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = todo.title;

  let description = document.createElement("P");
  description.classList.add("description");
  description.textContent = todo.description;

  let bottom = document.createElement("div");
  bottom.classList.add("bottom-bar");

  let due = document.createElement("div");
  due.classList.add("due");
  due.textContent = "Due: " + todo.due;

  let priority = document.createElement("div");
  priority.classList.add("priority");
  priority.textContent = "Priority: " + todo.priority;

  bottom.appendChild(due);
  bottom.appendChild(priority);

  card.appendChild(top);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(bottom);

  return card;
}

function editModal(todo, key) {
  let item = document.querySelector(".modal");
  item.classList.add(".todo-modal");
  item.style.display = "block";

  let content = document.querySelector(".modal-content");
  content.classList.add(".todo-modal-content");
  content.style.height = "300px";

  let btnCont = document.createElement("div");
  btnCont.classList.add("btn-cont");

  let closeBtn = document.createElement("button");
  closeBtn.classList.add("modal-close");
  closeBtn.textContent = "✕";
  closeBtn.onclick = () => {
    item.style.display = "none";
    content.innerHTML = "";
  };

  btnCont.appendChild(closeBtn);

  let title = document.createElement("div");
  title.classList.add("new-todo-name");
  title.textContent = "Name: ";

  let titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.classList.add("todo-name-input");

  let description = document.createElement("div");
  description.classList.add("new-todo-description");
  description.textContent = "Description: ";

  let descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.classList.add("todo-description-input");

  let date = document.createElement("div");
  date.classList.add("new-todo-date");
  date.textContent = "Due date: ";

  let dateInput = document.createElement("input");
  dateInput.setAttribute("type", "text");
  dateInput.classList.add("todo-date-input");

  let priority = document.createElement("div");
  priority.classList.add("new-todo-priority");
  priority.textContent = "Priority: ";

  let priorityInput = document.createElement("input");
  priorityInput.setAttribute("type", "text");
  priorityInput.classList.add("todo-priority-input");

  let submit = document.createElement("input");
  submit.classList.add("modal-button");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Create item");
  submit.onclick = () => {
    item.style.display = "none";
    content.innerHTML = "";
    content.style.height = "200px";
    let arr = localStorage.getItem(key).split(",");
    console.log("Pre op: " + arr);
    let ind = arr.indexOf(todo.title);
    if (titleInput.value != "") {
      arr[ind] = titleInput.value;
    }
    if (descriptionInput.value != "") {
      arr[ind + 1] = descriptionInput.value;
    }
    if (dateInput.value != "") {
      arr[ind + 2] = dateInput.value;
    }
    if (priorityInput.value != "") {
      arr[ind + 3] = priorityInput.value;
    }
    localStorage.setItem(key, arr.join(","));
    console.log("Post op: " + arr);
    displayToDoList(key);
  };

  content.appendChild(btnCont);
  content.appendChild(title);
  content.appendChild(titleInput);
  content.appendChild(description);
  content.appendChild(descriptionInput);
  content.appendChild(date);
  content.appendChild(dateInput);
  content.appendChild(priority);
  content.appendChild(priorityInput);
  content.appendChild(submit);
}

export { displayToDo, ToDo };
