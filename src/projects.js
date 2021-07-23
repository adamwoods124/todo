import { displayProjects } from "./home";
import { display, ToDo } from "./todo";

function Project(name, toDoList) {
  this.name = name;

  this.list = toDoList;
}

function displayProject(obj_name) {
  const card = document.createElement("div");
  card.classList.add("project-card");

  let topCont = document.createElement("div");
  topCont.classList.add("top-cont");

  let deleteCont = document.createElement("div");
  deleteCont.classList.add("delete-cont");
  deleteCont.classList.add("material-icons");
  deleteCont.textContent = "delete";
  deleteCont.onclick = () => {
    if (confirm("Delete " + obj_name + "?")) {
      localStorage.removeItem(obj_name);
    }
    location.reload();
  };

  topCont.appendChild(deleteCont);

  card.onmouseenter = () => {
    topCont.style.display = "flex";
  };

  card.onmouseleave = () => {
    topCont.style.display = "none";
  };

  card.onclick = () => {
    setTimeout(function () {
      displayToDoList(obj_name);
    }, 50);
  };

  let name = document.createElement("h1");
  name.classList.add("project-title");
  name.textContent = obj_name;

  card.appendChild(topCont);
  card.appendChild(name);

  return card;
}

function addProject() {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.onclick = function () {
    newProject();
  };

  let name = document.createElement("h1");
  name.classList.add("empty-plus");
  name.textContent = "+";

  let desc = document.createElement("div");
  desc.classList.add("empty-description");
  desc.textContent = "Add new project";

  card.appendChild(name);
  card.appendChild(desc);

  return card;
}

function newProject() {
  let val = "";
  let item = document.querySelector(".modal");
  item.style.display = "block";

  let content = document.querySelector(".modal-content");

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
  title.classList.add("modal-title");
  title.textContent = "Enter project title: ";

  let modal_main = document.createElement("div");

  let form = document.createElement("form");

  var name = document.createElement("input");
  name.setAttribute("type", "text");
  name.classList.add("modal-name");

  let submit = document.createElement("input");
  submit.classList.add("modal-button");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Create project");
  submit.onclick = () => {
    localStorage.setItem(name.value, "");
    console.log(localStorage);
    item.style.display = "none";
    displayProjects();
    content.innerHTML = "";
  };

  content.appendChild(btnCont);
  content.appendChild(title);
  content.appendChild(name);
  content.appendChild(submit);

  return val;
}

function displayToDoList(key) {
  let header = document.querySelector(".home-header");
  header.textContent = key;

  let backContainer = document.createElement("div");
  backContainer.classList.add("back-cont");
  backContainer.onclick = () => {
    location.reload();
  };

  let backBtn = document.createElement("button");
  backBtn.classList.add("backbtn");
  backBtn.textContent = "🠔";
  backContainer.appendChild(backBtn);

  let backtext = document.createElement("div");
  backtext.textContent = "home";
  backtext.classList.add("backtext");
  backContainer.appendChild(backtext);

  header.appendChild(backContainer);

  let home = document.querySelector(".home-body");
  home.textContent = "";

  let str = localStorage.getItem(key);
  let arr = str.split(",");

  if (str != "") {
    for (let i = 0; i < arr.length; i += 6) {
      let item = ToDo(
        arr[i],
        arr[i + 1],
        arr[i + 2],
        arr[i + 3],
        arr[i + 4],
        arr[i + 5]
      );

      home.appendChild(item.display());
    }
  }
  home.appendChild(addToDo(key));
}

function addToDo(key) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.onclick = function () {
    handleAddToDo(key);
  };

  let name = document.createElement("h1");
  name.classList.add("empty-plus");
  name.textContent = "+";

  let desc = document.createElement("div");
  desc.classList.add("empty-description");
  desc.textContent = "Create item";

  card.appendChild(name);
  card.appendChild(desc);

  return card;
}

function handleAddToDo(key) {
  toDoModal(key);
}

function toDoModal(key) {
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
    localStorage.setItem(
      key,
      addCurrent(key) +
        key +
        "," +
        addIndex(key) +
        "," +
        titleInput.value +
        "," +
        descriptionInput.value +
        "," +
        dateInput.value +
        "," +
        priorityInput.value
    );
    console.log(localStorage.getItem(key));
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

function addCurrent(key) {
  if (localStorage.getItem(key) === "") {
    return "";
  } else {
    return localStorage.getItem(key) + ",";
  }
}

function addIndex(key) {
  let arr = localStorage.getItem(key).split(",");
  if (localStorage.getItem(key) === "") {
    return 0;
  } else {
    return arr.length / 6;
  }
}
export { addProject, displayToDoList, displayProject, Project };
