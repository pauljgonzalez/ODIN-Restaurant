import {createDivIdName , createDivName,createImage} from "./createElements.js"
import { clearContent } from "./clearDom.js"
import logo from "./images/logo.png"

export function aboutButton(){
    
    if(!document.querySelector("#AboutUs")){
        clearContent()
        let divs = [
            createDivIdName("AboutUs","sectionHeader","About Us"),
            createDivName("sectionInnerText","Jojo's Bizarre Bistro is themed around the popluar anime show Jojo's\
            bizzard adventure. Our entire menu is themed around popular charcters. Feel free to take a look at our menu to see more!"),
            createDivName("sectionInnerText","We were founded in 2010 as just two people and a passion. Over the past 14 years\
            we have opened 2 different stores in nearby areas."),
            createImage(logo,"400"),
        ]
        
        let docFrag = document.createDocumentFragment();
        for(let i = 0; i<divs.length;i++){
            docFrag.appendChild(divs[i]);
        }
        document.querySelector("#content").appendChild(docFrag);
    }
    };
