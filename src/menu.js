import {createDivIdName , createDivName,createImage,createMenuOption} from "./createElements.js"
import { clearContent } from "./clearDom.js"

export function menuButton(){
        
        if(!document.querySelector("#MenuOptions")){
            clearContent()
            let divs = [
                createDivIdName("MenuOptions","sectionHeader","Menu"),
                createDivName("menuHeader","Entrees"),
                createDivIdName("Entrees","menuOptions",""),
                createDivName("menuHeader","Drinks"),
                createDivIdName("Drinks","menuOptions",""),
            ]
            let docFrag = document.createDocumentFragment();
            for(let i = 0; i<divs.length;i++){
                docFrag.appendChild(divs[i]);
            }
            document.querySelector("#content").appendChild(docFrag);
            let entreeDivs = [
                createMenuOption("Pickle","This is a pickle","$5.99","#Entree"),
            ]
            let drinkDivs = [
                createDivName("gridMenu","test"),
                createDivName("gridMenu","test"),
                createDivName("gridMenu","test"),
                createDivName("gridMenu","test"),
            ]
            // let entreeFrag = document.createDocumentFragment();
            // let drinkFrag = document.createDocumentFragment();
            // // for(let j = 0;j<entreeDivs.length;j++){
            // //     entreeFrag.appendChild(entreeDivs[j]);
            // // }
            // // for(let k = 0;k<drinkDivs.length;k++){
            // //     drinkFrag.appendChild(drinkDivs[k]);
            // // }

            // // document.querySelector("#Entrees").appendChild(entreeFrag);
            // // document.querySelector("#Drinks").appendChild(drinkFrag);
        }

    }

