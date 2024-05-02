import "./styles.css";
import header from "./images/main-page-background.jpg"


let home = document.querySelector(".Home")
home.addEventListener("click", function (e) {
    console.log("Home")
});

let menu = document.querySelector(".Menu")
menu.addEventListener("click", function (e) {
    console.log("Menu")
});

let about = document.querySelector(".About")
about.addEventListener("click", function (e) {
    console.log("About")
});



// let addImage = document.createElement("img");
//     addImage.src = header;

    // let  headerImage = document.querySelector(".headerImage")

    // headerImage.appendChild(addImage)

document.querySelector("header").style.backgroundImage = `url(${header})`;