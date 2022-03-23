// OBJECT CONTAINING IDS TO COMPLETE FUNCTIONS

const data = {
    "drinkIds": [
        {
            "DrinkCat":"crafted-cocktails",
            "drinkDiv":"crafted-cocktails-div",
            "leftArrow":"arrow-left-0",
            "rightArrow":"arrow-right-0"
        },
        {
            "DrinkCat":"spirits",
            "drinkDiv":"spirits-div",
            "leftArrow":"arrow-left-1",
            "rightArrow":"arrow-right-1"
        },
        {
            "DrinkCat":"flights",
            "drinkDiv":"flights_div",
            "leftArrow":"arrow-left-2",
            "rightArrow":"arrow-right-2"
        },
        {
            "DrinkCat":"lagers",
            "drinkDiv":"lagers_div",
            "leftArrow":"arrow-left-3",
            "rightArrow":"arrow-right-3"
        },
        {
            "DrinkCat":"ciders-sours-saisons",
            "drinkDiv":"ciders_sours_saisons_div",
            "leftArrow":"arrow-left-4",
            "rightArrow":"arrow-right-4"
        },
        {
            "DrinkCat":"ipa-pale-ales",
            "drinkDiv":"ipa_pale_ales_div",
            "leftArrow":"arrow-left-5",
            "rightArrow":"arrow-right-5"
        },
        {
            "DrinkCat":"ambers-browns-stouts-browns",
            "drinkDiv":"ambers_browns_stouts_porters_div",
            "leftArrow":"arrow-left-6",
            "rightArrow":"arrow-right-6"
        },
        {
            "DrinkCat":"golden-blonde-wheatbeers",
            "drinkDiv":"golden_blonde_wheat_beers_div",
            "leftArrow":"arrow-left-7",
            "rightArrow":"arrow-right-7"
        },
        {
            "DrinkCat":"bottles-cans",
            "drinkDiv":"bottles_cans_div",
            "leftArrow":"arrow-left-8",
            "rightArrow":"arrow-right-8"
        },
        {
            "DrinkCat":"canned-wine",
            "drinkDiv":"canned_wines_div",
            "leftArrow":"arrow-left-9",
            "rightArrow":"arrow-right-9"
        },
        {
            "DrinkCat":"social-hour",
            "drinkDiv":"social_hour_div",
            "leftArrow":"arrow-left-10",
            "rightArrow":"arrow-right-10"
        },
        {
            "DrinkCat":"boilermakers",
            "drinkDiv":"boilermakers_div",
            "leftArrow":"arrow-left-11",
            "rightArrow":"arrow-right-11"
        }
    ]
}

// FUNCTION TO CHANGE THE SCREEN WHEN THE BUTTONS ARE CLICKED

function ChangingDrinkType(button){
    let currAct;
    for(var i = 0; i < data.drinkIds.length; i++) {
        currAct = document.getElementById(data.drinkIds[i].drinkDiv);
        if (button === data.drinkIds[i].DrinkCat){
            currAct.classList.remove("displayStatus");
        } else {
            currAct.classList.add("displayStatus");
        }
    }
}

function DrinkSlideshow() {

//VARIABLES TO CALL FUNCTIONS

    //TO CRAFTED COCKTAILS
    let ccButton = data.drinkIds[0].DrinkCat;
    let toCC1 = data.drinkIds[1].leftArrow;
    let toCC2 = data.drinkIds[11].rightArrow;

    //TO SPIRITS
    let sButton = data.drinkIds[1].DrinkCat;
    let toS1 = data.drinkIds[2].leftArrow;
    let toS2 = data.drinkIds[0].rightArrow;

    //TO FLIGHTS
    let fButton = data.drinkIds[2].DrinkCat;
    let toF1 = data.drinkIds[3].leftArrow;
    let toF2 = data.drinkIds[1].rightArrow;

    //TO LAGERS
    let lButton = data.drinkIds[3].DrinkCat;
    let toL1 = data.drinkIds[4].leftArrow;
    let toL2 = data.drinkIds[2].rightArrow;

    //TO CIDERS, SOURS, SAISONS
    let cssButton = data.drinkIds[4].DrinkCat;
    let toCSS1 = data.drinkIds[5].leftArrow;
    let toCSS2 = data.drinkIds[3].rightArrow;

    //I.P.A, PALE ALES
    let ipapaButton = data.drinkIds[5].DrinkCat;
    let toIPAPA1 = data.drinkIds[6].leftArrow;
    let toIPAPA2 = data.drinkIds[4].rightArrow;

    //AMBERS, BROWNS, STOUTS, PORTERS
    let abspButton = data.drinkIds[6].DrinkCat;
    let toABSP1 = data.drinkIds[7].leftArrow;
    let toABSP2 = data.drinkIds[5].rightArrow;

    //GOLDEN, BLONDE, WHEAT BEERS
    let gbwbButton = data.drinkIds[7].DrinkCat;
    let toGBWB1 = data.drinkIds[8].leftArrow;
    let toGBWB2 = data.drinkIds[6].rightArrow;

    //CANNED WINES
    let cwButton = data.drinkIds[8].DrinkCat;
    let toCW1 = data.drinkIds[9].leftArrow;
    let toCW2 = data.drinkIds[7].rightArrow;

    //BOTTLES AND CANS
    let bcButton = data.drinkIds[9].DrinkCat;
    let toBC1 = data.drinkIds[10].leftArrow;
    let toBC2 = data.drinkIds[8].rightArrow;

    //SOCIAL HOUR
    let shButton = data.drinkIds[10].DrinkCat;
    let toSH1 = data.drinkIds[11].leftArrow;
    let toSH2 = data.drinkIds[9].rightArrow;

    //BOILERMAKERS
    let bhButton = data.drinkIds[11].DrinkCat;
    let toBH1 = data.drinkIds[0].leftArrow;
    let toBH2 = data.drinkIds[10].rightArrow;

//FUNCTION CALLS

    //TRANSITION TO CRAFTED COCKTAILS
    document.getElementById(ccButton).onclick = function () {
        ChangingDrinkType(ccButton)
    }
    document.getElementById(toCC1).onclick = function() {
        ChangingDrinkType(ccButton);
    }
    document.getElementById(toCC2).onclick = function() {
        ChangingDrinkType(ccButton);
    }

    //TRANSITION TO SPIRITS
    document.getElementById(sButton).onclick = function () {
        ChangingDrinkType(sButton)
    }
    document.getElementById(toS1).onclick = function() {
        ChangingDrinkType(sButton);
    }
    document.getElementById(toS2).onclick = function() {
        ChangingDrinkType(sButton);
    }

    //TRANSITION TO FLIGHTS
    document.getElementById(fButton).onclick = function () {
        ChangingDrinkType(fButton)
    }
    document.getElementById(toF1).onclick = function() {
        ChangingDrinkType(fButton);
    }
    document.getElementById(toF2).onclick = function() {
        ChangingDrinkType(fButton);
    }

    //TRANSITION TO LAGERS
    document.getElementById(lButton).onclick = function () {
        ChangingDrinkType(lButton)
    }
    document.getElementById(toL1).onclick = function() {
        ChangingDrinkType(lButton);
    }
    document.getElementById(toL2).onclick = function() {
        ChangingDrinkType(lButton);
    }

    //TRANSITION TO CIDERS, SOURS SAISONS
    document.getElementById(cssButton).onclick = function () {
        ChangingDrinkType(cssButton)
    }
    document.getElementById(toCSS1).onclick = function() {
        ChangingDrinkType(cssButton);
    }
    document.getElementById(toCSS2).onclick = function() {
        ChangingDrinkType(cssButton);
    }

    //TRANSITION TO I.P.A & PALE ALES
    document.getElementById(ipapaButton).onclick = function () {
        ChangingDrinkType(ipapaButton)
    }
    document.getElementById(toIPAPA1).onclick = function() {
        ChangingDrinkType(ipapaButton);
    }
    document.getElementById(toIPAPA2).onclick = function() {
        ChangingDrinkType(ipapaButton);
    }

    //TRANSITION TO AMBERS, BROWNS, STOUTS, PORTERS
    document.getElementById(abspButton).onclick = function () {
        ChangingDrinkType(abspButton)
    }
    document.getElementById(toABSP1).onclick = function() {
        ChangingDrinkType(abspButton);
    }
    document.getElementById(toABSP2).onclick = function() {
        ChangingDrinkType(abspButton);
    }

    //TRANSITION TO GOLDEN, BLONDE, WHEAT BEERS
    document.getElementById(gbwbButton).onclick = function () {
        ChangingDrinkType(gbwbButton)
    }
    document.getElementById(toGBWB1).onclick = function() {
        ChangingDrinkType(gbwbButton);
    }
    document.getElementById(toGBWB2).onclick = function() {
        ChangingDrinkType(gbwbButton);
    }

    //TRANSITION TO BOTTLES AND CANS
    document.getElementById(bcButton).onclick = function () {
        ChangingDrinkType(bcButton)
    }
    document.getElementById(toBC1).onclick = function() {
        ChangingDrinkType(bcButton);
    }
    document.getElementById(toBC2).onclick = function() {
        ChangingDrinkType(bcButton);
    }

    //TRANSITION TO CANNED WINES
    document.getElementById(cwButton).onclick = function () {
        ChangingDrinkType(cwButton)
    }
    document.getElementById(toCW1).onclick = function() {
        ChangingDrinkType(cwButton);
    }
    document.getElementById(toCW2).onclick = function() {
        ChangingDrinkType(cwButton);
    }

    //TRANSITION TO SOCIAL HOUR
    document.getElementById(shButton).onclick = function () {
        ChangingDrinkType(shButton)
    }
    document.getElementById(toSH1).onclick = function() {
        ChangingDrinkType(shButton);
    }
    document.getElementById(toSH2).onclick = function() {
        ChangingDrinkType(shButton);
    }

    //TRANSITION TO BOILERMAKERS
    document.getElementById(bhButton).onclick = function () {
        ChangingDrinkType(bhButton)
    }
    document.getElementById(toBH1).onclick = function() {
        ChangingDrinkType(bhButton);
    }
    document.getElementById(toBH2).onclick = function() {
        ChangingDrinkType(bhButton);
    }
}

window.addEventListener("load", DrinkSlideshow, false);