import { homeButton } from "./home";

export function createDivIdName(idName,className,text){
    let div = document.createElement("div");
    div.id = idName;
    div.className = className;
    div.innerHTML= text;
    return div;
}

export function createDivName(className,text){
    let div = document.createElement("div");
    div.className = className;
    div.innerHTML= text;
    return div;
}

export function createImage(img,minwidth){
    let image = document.createElement("img");
    image.src =  img;
    image.width = minwidth;
    return image;
}

//div that has container > Food name, description, price,picture

export function createMenuOption(food,description,price,choice,picture){
    let containerDiv = createDivName("gridMenu",'');
    let divArray = [
        createDivName("menuOption",food),
        createDivName("menuDescription",description),
        createDivName("menuPrice",price),
        //createImage(picture,"150"),
    ]
    
    let docFrag = document.createDocumentFragment();
            for(let i = 0; i<divArray.length;i++){
                docFrag.appendChild(divArray[i]);
            }
    document.querySelector(choice).appendChild(docFrag);

}