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
        }
    ]
}

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
    // to starters
    let startersButton = data.foodIds[0].typeOfFood;
    let toStarters1 = data.foodIds[1].leftarrow;
    // to small plates
    let smallPlatesButtons = data.foodIds[1].typeOfFood;
    let toSmallPlates1 = data.foodIds[0].rightarrow;
    let toSmallPlates2 = data.foodIds[2].leftarrow;
    //to salads
    let saladsButton = data.foodIds[2].typeOfFood;
    let toSalads1 = data.foodIds[1].rightarrow;

    //transition to starters
    document.getElementById(startersButton).onclick = function() {
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
}

window.addEventListener("load", FoodSlideshow, false);