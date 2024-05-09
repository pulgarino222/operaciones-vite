// Import our custom CSS
import "../scss/styles.scss";

//importamos la database
import { coders } from "../../public/data/database.js";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";


import { index } from "./operations.js";

const tbody=document.querySelector("tbody");
index(coders,tbody)

let name=document.querySelector("#name")
let lastName=document.querySelector("#last-name")
let email=document.querySelector("#email")
let form=document.querySelector("form")

form.addEventListener("submit", function(eventOfClick) {
    //evita que la pagina se recargue
    eventOfClick.preventDefault();
    //trae el valor de la pagina
    console.log(name.value)
    console.log(lastName.value)
    console.log(email.value)

    const newCoder={
        id: Date.now(),
        name: name.value,
        lastName: lastName.value,
        email: email.value,
    }
    coders.push(newCoder)
    index(coders,tbody)
    
    
    eventOfClick.preventDefault()
})











