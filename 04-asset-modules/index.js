import { myPrint } from "./print.js";
import img from "./assets/42.png";
import "./assets/css/style.css";

myPrint();

const imgNode = document.createElement("img");

imgNode.style.cssText = "width: 960px; height: 540px";

imgNode.src = img;

document.body.appendChild(imgNode);

document.body.classList.add("hello");
