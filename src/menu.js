import {createDivIdName , createDivName,createImage,createMenuOption} from "./createElements.js"
import { clearContent } from "./clearDom.js"
import sushi from "./images/sushi.jpg"
import drink from "./images/drink.jpg"

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
                createMenuOption("Star Platinum Roll","A powerful combination of fresh tuna, avocado,\
                 and cucumber wrapped in seaweed and rice, topped with spicy mayo and crunchy tempura \
                 flakes, representing the strength and precision of Star Platinum.","$25",sushi),
                createMenuOption("Golden Experience Roll","Description: This decadent roll features \
                golden tobiko (flying fish roe), creamy crab salad, and sweet mango, symbolizing the \
                vibrant life force and vitality of Golden Experience.","$30",sushi),
                createMenuOption("Stone Mask Maki","A striking roll filled with tempura shrimp, spicy \
                tuna, and jalapeño slices, representing the ancient power and mystery of the Stone Mask.","$22",sushi),
                createMenuOption("Hamon Sunrise Roll","A refreshing roll filled with salmon, cucumber, \
                and asparagus, wrapped in soy paper and topped with slices of fresh lemon, evoking the \
                energizing spirit of Hamon under the rising sun.","$18",sushi),
                createMenuOption("Killer Queen Roll","A dangerously delicious roll featuring spicy crab, avocado, and cream cheese, deep-fried and drizzled with a sweet and spicy sauce, embodying the explosive power of Killer Queen.","$28",sushi),
                createMenuOption("King Crimson Temaki","A bold hand roll filled with spicy tuna, cucumber, and tobiko, wrapped in red-hued soy paper, representing the unstoppable time-skipping ability of King Crimson.","$20",sushi),
                createMenuOption("Crazy Diamond Roll","An artful combination of tuna, yellowtail, and avocado, rolled in pink soy paper and topped with edible flowers, reflecting the precise yet creative nature of Crazy Diamond.","$32",sushi),
                createMenuOption("Hierophant Green Sashimi","Delicate slices of fresh sashimi—tuna, salmon, and yellowtail—arranged artistically on a plate with wasabi tendrils, reminiscent of Hierophant Green's long-range attacks.","$35",sushi),
                createMenuOption("Stardust Crusader Roll","A heroic roll filled with spicy salmon, cucumber, and shiso leaf, wrapped in red and white soy paper, paying homage to the courageous spirit of the Stardust Crusaders.","$16",sushi),
                createMenuOption("Echoes Act 3 Nigiri","Three distinct pieces of nigiri—tuna, salmon, and eel—each with a different level of spiciness, mirroring the evolving power of Echoes Act 3.","$40",sushi),
                createMenuOption("D4C Hand Roll","A unique hand roll filled with eel, avocado, and cream cheese, wrapped in black and white sesame seeds, representing the multiverse-hopping ability of D4C.","$24",sushi),
                createMenuOption("The World Temaki","An imposing hand roll packed with spicy scallop, avocado, and tempura crunch, enveloped in dark nori, symbolizing the time-stopping dominion of The World.","$30",sushi),
                createMenuOption("Red Stone of Aja Sashimi Platter","A premium assortment of the finest sashimi cuts—tuna belly, toro, and uni—served alongside a glistening red stone of pickled ginger, invoking the legendary power of the Red Stone of Aja.","$50",sushi),
                createMenuOption("Weather Report Roll","A refreshing roll filled with crab, mango, and cucumber, wrapped in soy paper and drizzled with a zesty citrus sauce, capturing the essence of Weather Report's atmospheric control.","$22",sushi),
                createMenuOption("Requiem Maki","An enigmatic roll featuring a medley of exotic ingredients—sea urchin, wagyu beef, and black truffle—each bite offering an otherworldly flavor experience, akin to the mysterious powers of Requiem stands.","$60",sushi),

            ]
            let drinkDivs = [
                createMenuOption("Stand Power Punch"," A vibrant blend of pineapple juice, coconut rum, and a splash of grenadine, garnished with a maraschino cherry and an umbrella. This powerful tropical concoction will awaken your inner Stand!","$12",drink ),
                createMenuOption("Star Platinum Sake Smash","A refreshing mix of sake, muddled fresh blueberries, and a hint of lemon, served over ice with a sprig of mint. This drink packs a punch worthy of Star Platinum's speed and precision.","$14",drink ),
                createMenuOption("Golden Wind Mojito"," A sparkling mojito made with rum, lime juice, mint leaves, and a touch of gold shimmer dust, capturing the essence of Giorno's Golden Wind.","$15",drink ),
                createMenuOption("Stone Mask Martini","An elegant martini featuring vodka, elderflower liqueur, and lychee juice, served with a lychee fruit 'stone mask' skewer. This drink is perfect for vampire hunters and ancient artifact enthusiasts.","$16",drink ),
                createMenuOption("Hermit Purple Sangria","A delightful sangria infused with red wine, brandy, mixed berries, and a splash of orange liqueur, embodying the mysterious and adventurous spirit of Hermit Purple.","$13",drink ),
                createMenuOption("Joestar Sunrise","A sunrise-inspired cocktail blending tequila, orange juice, and a touch of grenadine, garnished with an orange slice and a cherry. This drink pays tribute to the iconic Joestar bloodline.","$12",drink ),
                
            ]
            let entreeFrag = document.createDocumentFragment();
             let drinkFrag = document.createDocumentFragment();
            for(let j = 0;j<entreeDivs.length;j++){
            entreeFrag.appendChild(entreeDivs[j]);
            }
             for(let k = 0;k<drinkDivs.length;k++){
                drinkFrag.appendChild(drinkDivs[k]);
        }

            document.querySelector("#Entrees").appendChild(entreeFrag);
             document.querySelector("#Drinks").appendChild(drinkFrag);
        }

    }

