// Import our custom CSS
import "../scss/styles.scss";

//importamos la database
import { coders } from "../../public/data/database.js";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";


import { withFor } from "./operations.js";

const tbody=document.querySelector("tbody");
withFor(coders,tbody)










