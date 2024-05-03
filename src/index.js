import "./styles.css";
import header from "./images/main-page-background.jpg"
import banner from "./images/jojobanner.jpg"
import {homeButton} from "./home.js"
import {aboutButton} from "./about.js"
import {menuButton} from "./menu.js"
// homeButton();
// aboutButton();
// menuButton();

document.querySelector("header").style.backgroundImage = `url(${banner})`;
let home = document.querySelector("#Home")
    home.addEventListener("click", function (e) {
        homeButton()
    });
let menu = document.querySelector("#Menu")
    menu.addEventListener("click", function (e) {
        menuButton()
    });

let about = document.querySelector("#About")
    about.addEventListener("click", function (e) {
        aboutButton()
    });

    menuButton()