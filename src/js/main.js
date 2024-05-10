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

form.addEventListener("submit", function (eventOfClick) {
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
  

  Eliminar(e,coders)
  alertSmallSucces("se ha eliminado el archivo");
  
  index(coders,tbody)
  
});



