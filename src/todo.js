import { displayToDoList } from "./projects";
const ToDo = (key, index, title, description, due, priority) => {
  const getKey = () => key;
  const getIndex = () => index;
  const getTitle = () => title;
  const getDescription = () => description;
  const getDue = () => due;
  const getPriority = () => priority;

  const display = () => {
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
      if (confirm("Delete " + getTitle() + " ?")) {
        let arr = localStorage.getItem(getKey()).split(",");
        arr.splice(getIndex() * 6, 6);
        for (let i = 0; i * 6 < arr.length; i++) {
          arr[i * 6 + 1] = i;
        }

        localStorage.setItem(getKey(), arr);
        displayToDoList(getKey());
      }
    };

    completeCont.onclick = () => {
      edit();
    };

    let title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = getTitle();

    let description = document.createElement("P");
    description.classList.add("description");
    description.textContent = getDescription();

    let bottom = document.createElement("div");
    bottom.classList.add("bottom-bar");

    let due = document.createElement("div");
    due.classList.add("due");
    due.textContent = "Due: " + getDue();

    let priority = document.createElement("div");
    priority.classList.add("priority");
    priority.textContent = "Priority: " + getPriority();

    bottom.appendChild(due);
    bottom.appendChild(priority);

    card.appendChild(top);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(bottom);

    return card;
  };

  const edit = () => {
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
    submit.setAttribute("value", "Edit item");
    submit.onclick = () => {
      item.style.display = "none";
      content.innerHTML = "";
      content.style.height = "200px";
      let arr = localStorage.getItem(getKey()).split(",");
      console.log("Pre op: " + arr);
      if (titleInput.value != "") {
        arr[getIndex() * 6 + 2] = titleInput.value;
      }
      if (descriptionInput.value != "") {
        arr[getIndex() * 6 + 3] = descriptionInput.value;
      }
      if (dateInput.value != "") {
        arr[getIndex() * 6 + 4] = dateInput.value;
      }
      if (priorityInput.value != "") {
        arr[getIndex() * 6 + 5] = priorityInput.value;
      }
      localStorage.setItem(key, arr.join(","));
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
  };

  return { display, edit };
};

export { ToDo };
