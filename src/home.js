import { displayToDo } from "./todo";
import { Project, addProject, displayProject } from "./projects";

function home() {
  const body = document.querySelector("#content");

  const head = document.createElement("div");
  head.classList.add("home-header");
  head.textContent = "Projects";

  const main = document.createElement("div");
  main.classList.add("home-body");

  const footer = document.createElement("div");
  footer.classList.add("home-footer");
  footer.textContent = "Todo list by Adam Woods";

  const modal = document.createElement("div");
  modal.classList.add("modal");

  let modal_content = document.createElement("div");
  modal_content.classList.add("modal-content");

  modal.appendChild(modal_content);

  body.appendChild(head);
  body.appendChild(main);
  body.appendChild(footer);
  body.appendChild(modal);
  displayProjects();
}

function displayProjects() {
  const body = document.querySelector(".home-body");
  body.innerHTML = "";
  for (let i = 0; i < localStorage.length; i++) {
    let project = Project(
      localStorage.key(i),
      localStorage.getItem(localStorage.key(i))
    );
    body.appendChild(project.display());
  }

  body.appendChild(addProject());
}

export { home, displayProjects };
