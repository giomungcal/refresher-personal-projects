import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import moment from "moment";
import unique from "uniq";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn dawdawd
    </p>
  </div>
`;

const randomNumbers = [1, 2, 4, 3, 5, 5, 5, 5, 6, 4, 2, 2, 4, 5, 8, 9];

const dateToday = moment().format("LL");
console.log(dateToday);

const uniqueArray = unique(randomNumbers);
console.log(uniqueArray);

setupCounter(document.querySelector("#counter"));
