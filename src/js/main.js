// Import our custom CSS
import "../scss/styles.scss";

//importamos la database
import { coders } from "../../public/data/database.js";
import { alertSmallSucces } from "./alert.js";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import { index, create, Eliminar } from "./operations.js";

const tbody = document.querySelector("tbody");
index(coders, tbody);

let name = document.querySelector("#name");
let lastName = document.querySelector("#last-name");
let email = document.querySelector("#email");
let form = document.querySelector("form");
let table = document.querySelector("table");
let idForUpdate;

form.addEventListener("submit", function (eventOfClick) {
  if (idForUpdate === undefined) {
    create(name, lastName, email, coders);
    alertSmallSucces("saved");
  } else {
    for (const coder of coders) {
      if (coder.id == idForUpdate) {
        coder.name = name.value;
        coder.lastName = lastName.value;
        coder.email = email.value;
      }
    }
    alertSmallSucces("update");
    idForUpdate = undefined;
  }
  //evita que la pagina se recargue
  eventOfClick.preventDefault();
  //trae el valor de la pagina
  console.log(name.value);
  console.log(lastName.value);
  console.log(email.value);

  create(name, lastName, email, coders);

  form.reset();
  alertSmallSucces("save");

  index(coders, tbody);

  eventOfClick.preventDefault();
});

table.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-danger")) {
    let idParaEliminar = e.target.getAttribute("data-id");
    console.log(idParaEliminar);

    Eliminar(coders, idParaEliminar); //
    alertSmallSucces("se ha eliminado el archivo");

    index(coders, tbody);
  }
  //with these code i can look if the click touch the button of danger
  if (e.target.classList.contains("btn-warning")) {
    idForUpdate = e.target.getAttribute("data-id");
    let userFound = coders.find((coder) => coder.id == idForUpdate);

    name.value = userFound.name;
    lastName.value = userFound.lastName;
    email.value = userFound.email;
  }
});
