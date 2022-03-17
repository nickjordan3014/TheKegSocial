// OBJECT CONTAINING NECESSARY IDS TO COMPLETE FUNCTION

const data = {
    "foodIds":[
        {
            "typeOfFood":"starters",
            "foodDiv":"starters-div",
            "leftarrow":"arrow-left-0",
            "rightarrow":"arrow-right-0"
        },
        {
            "typeOfFood":"small-plates",
            "foodDiv":"small-plates-div",
            "leftarrow":"arrow-left-1",
            "rightarrow":"arrow-right-1"
        },
        {
            "typeOfFood":"salads",
            "foodDiv":"salads-div",
            "leftarrow":"arrow-left-2",
            "rightarrow":"arrow-right-2"
        },
        {
            "typeOfFood":"entrees",
            "foodDiv":"entrees-div",
            "leftarrow":"arrow-left-3",
            "rightarrow":"arrow-right-3"
        },
        {
            "typeOfFood":"poutine",
            "foodDiv":"poutine-div",
            "leftarrow":"arrow-left-4",
            "rightarrow":"arrow-right-4"
        },
        {
            "typeOfFood":"flatbreads",
            "foodDiv":"flatbreads-div",
            "leftarrow":"arrow-left-5",
            "rightarrow":"arrow-right-5"
        },
        {
            "typeOfFood":"handhelds",
            "foodDiv":"handhelds-div",
            "leftarrow":"arrow-left-6",
            "rightarrow":"arrow-right-6"
        },
        {
            "typeOfFood":"pony-kegs",
            "foodDiv":"ponykegs-div",
            "leftarrow":"arrow-left-7",
            "rightarrow":"arrow-right-7"
        }
    ]
}

// FUNCTION TO CHANGE THE SCREENS ON THE BUTTON CLICKS

function ChangingMenuType(button){
    let currAct;
    for(var i = 0; i < data.foodIds.length; i++) {
        currAct = document.getElementById(data.foodIds[i].foodDiv);
        if (button === data.foodIds[i].typeOfFood){
            currAct.classList.remove("displayStatus");
        } else {
            currAct.classList.add("displayStatus");
        }
    }
}

function FoodSlideshow() {

// VARIBABLES FOR FUNCTION CALLS

    // to starters
    let startersButton = data.foodIds[0].typeOfFood;
    let toStarters1 = data.foodIds[1].leftarrow;
    let toStarters2 = data.foodIds[7].rightarrow;
    // to small plates
    let smallPlatesButtons = data.foodIds[1].typeOfFood;
    let toSmallPlates1 = data.foodIds[0].rightarrow;
    let toSmallPlates2 = data.foodIds[2].leftarrow;
    //to salads
    let saladsButton = data.foodIds[2].typeOfFood;
    let toSalads1 = data.foodIds[1].rightarrow;
    let toSalads2 = data.foodIds[3].leftarrow;
    //to entrees
    let entreesButtons = data.foodIds[3].typeOfFood;
    let toEntrees1 = data.foodIds[2].rightarrow;
    let toEntrees2 = data.foodIds[4].leftarrow;
    //to poutine
    let poutineButtons = data.foodIds[4].typeOfFood;
    let toPoutine1 = data.foodIds[3].rightarrow;
    let toPoutine2 = data.foodIds[5].leftarrow;
    //to flatbreads
    let flatbreadsButtons = data.foodIds[5].typeOfFood;
    let toFlatbreads1 = data.foodIds[4].rightarrow;
    let toFlatbreads2 = data.foodIds[6].leftarrow;
    //to handhelds
    let handheldsButtons = data.foodIds[6].typeOfFood;
    let toHandhelds1 = data.foodIds[5].rightarrow;
    let toHandhelds2 = data.foodIds[7].leftarrow;
    //to pony kegs
    let ponykegsButtons = data.foodIds[7].typeOfFood;
    let toPonykegs1 = data.foodIds[6].rightarrow;
    let toPonyKegs2 = data.foodIds[0].leftarrow;
    
    
// FUNCTION CALLS

    //transition to starters
    document.getElementById(startersButton).onclick = function() {
        ChangingMenuType(startersButton);
    }
    document.getElementById(toStarters2).onclick = function () {
        ChangingMenuType(startersButton);
    }
    document.getElementById(toStarters1).onclick = function() {
        ChangingMenuType(startersButton);
    }
    //transitions to small plates
    document.getElementById(smallPlatesButtons).onclick = function() {
        ChangingMenuType(smallPlatesButtons);
    }
    document.getElementById(toSmallPlates1).onclick = function() {
        ChangingMenuType(smallPlatesButtons);
    }
    document.getElementById(toSmallPlates2).onclick = function() {
        ChangingMenuType(smallPlatesButtons);
    }
    //transitions to salads
    document.getElementById(saladsButton).onclick = function() {
        ChangingMenuType(saladsButton);
    }
    document.getElementById(toSalads1).onclick = function() {
        ChangingMenuType(saladsButton);
    }
    document.getElementById(toSalads2).onclick = function() {
        ChangingMenuType(saladsButton);
    }
    //transitions to entrees
    document.getElementById(entreesButtons).onclick = function() {
        ChangingMenuType(entreesButtons);
    }
    document.getElementById(toEntrees1).onclick = function() {
        ChangingMenuType(entreesButtons);
    }
    document.getElementById(toEntrees2).onclick = function() {
        ChangingMenuType(entreesButtons);
    }
    //transitions to poutine
    document.getElementById(poutineButtons).onclick = function() {
        ChangingMenuType(poutineButtons);
    }
    document.getElementById(toPoutine1).onclick = function() {
        ChangingMenuType(poutineButtons);
    }
    document.getElementById(toPoutine2).onclick = function() {
        ChangingMenuType(poutineButtons);
    }
    //transitions to flatbreads
    document.getElementById(flatbreadsButtons).onclick = function() {
        ChangingMenuType(flatbreadsButtons);
    }
    document.getElementById(toFlatbreads1).onclick = function() {
        ChangingMenuType(flatbreadsButtons);
    }
    document.getElementById(toFlatbreads2).onclick = function() {
        ChangingMenuType(flatbreadsButtons);
    }
    //transitions to handhelds
    document.getElementById(handheldsButtons).onclick = function() {
        ChangingMenuType(handheldsButtons);
    }
    document.getElementById(toHandhelds1).onclick = function() {
        ChangingMenuType(handheldsButtons);
    }
    document.getElementById(toHandhelds2).onclick = function() {
        ChangingMenuType(handheldsButtons);
    }
    //transitions to pony kegs
    document.getElementById(ponykegsButtons).onclick = function() {
        ChangingMenuType(ponykegsButtons);
    }
    document.getElementById(toPonykegs1).onclick = function() {
        ChangingMenuType(ponykegsButtons);
    }
    document.getElementById(toPonyKegs2).onclick = function() {
        ChangingMenuType(ponykegsButtons);
    }
}

window.addEventListener("load", FoodSlideshow, false);