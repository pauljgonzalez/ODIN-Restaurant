import {createDivIdName , createDivName,createImage} from "./createElements.js"
import tonio from "./images/tonio.jpg"
import { clearContent } from "./clearDom.js"


export function homeButton(){
        if(!document.querySelector("#Welcome")){
            clearContent();
            let hours = "Monday : 11AM - 10PM<br>Tuesday : 11AM - 10PM<br>Wednesday : 11AM - 10PM<br>Thursday : 11AM - 10PM<br>\
            Friday : 11AM - 11PM<br>Saturday : 12PM - 11PM<br>Sunday : 12PM - 11PM"
            let divs = [
                createDivIdName("Welcome","sectionHeader","Welcome to JoJo's Bizarre Bistro"),
                createDivName("sectionInnerText","We serve drinks and entrees inspired by the popular anime Jojo's Bizarre Adventure.\
                 We offer half priced drinks between the hours of 1PM and 3PM"),
                createDivIdName("Hours","sectionHeader","Hours of Operations"),
                createDivName("sectionInnerText",hours),
                createImage(tonio,"400"),
            ]
            
            let docFrag = document.createDocumentFragment();
            for(let i = 0; i<divs.length;i++){
                docFrag.appendChild(divs[i]);
            }
            document.querySelector("#content").appendChild(docFrag);
        }
    };

