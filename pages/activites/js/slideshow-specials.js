const data = {
    "specialIds":[
        {
            "special":"r&r",
            "specialDiv":"r&r-div",
            "leftarrow":"arrow-left-0",
            "rightarrow":"arrow-right-0"
        },
        {
            "special":"college-night",
            "specialDiv":"college-night-div",
            "leftarrow":"arrow-left-1",
            "rightarrow":"arrow-right-1"
        },
        {
            "special":"ladies-night",
            "specialDiv":"ladies-night-div",
            "leftarrow":"arrow-left-2",
            "rightarrow":"arrow-right-2"
        },
        {
            "special":"doorbuster",
            "specialDiv":"doorbuster-div",
            "leftarrow":"arrow-left-3",
            "rightarrow":"arrow-right-3"
        }
    ]
}

function ChangingSpecial(button){
    let currAct;
    for(var i = 0; i < data.specialIds.length; i++) {
        currAct = document.getElementById(data.specialIds[i].specialDiv);
        if (button === data.specialIds[i].special){
            currAct.classList.remove("displayStatus");
        } else {
            currAct.classList.add("displayStatus");
        }
    }
}

function Slideshow() {
    // to restaurant and retail
    let rrButton = data.specialIds[0].special;
    let torr1 = data.specialIds[1].leftarrow;
    let torr2 = data.specialIds[3].rightarrow;

    // to college night
    let cnButton = data.specialIds[1].special;
    let tocn1 = data.specialIds[2].leftarrow;
    let tocn2 = data.specialIds[0].rightarrow;

    // to ladies night
    let lnButton = data.specialIds[2].special;
    let toln1 = data.specialIds[3].leftarrow;
    let toln2 = data.specialIds[1].rightarrow;

    // to doorbuster
    let dbButton = data.specialIds[3].special;
    let todb1 = data.specialIds[0].leftarrow;
    let todb2 = data.specialIds[2].rightarrow;

    // transitions to restaurant and retail
    document.getElementById(rrButton).onclick = function() {
        ChangingSpecial(rrButton);
    }
    document.getElementById(torr1).onclick = function() {
        ChangingSpecial(rrButton);
    }
    document.getElementById(torr2).onclick = function() {
        ChangingSpecial(rrButton);
    }

    // transitions to college night
    document.getElementById(cnButton).onclick = function() {
        ChangingSpecial(cnButton);
    }
    document.getElementById(tocn1).onclick = function() {
        ChangingSpecial(cnButton);
    }
    document.getElementById(tocn2).onclick = function() {
        ChangingSpecial(cnButton);
    }

    // transitions to ladies
    document.getElementById(lnButton).onclick = function() {
        ChangingSpecial(lnButton);
    }
    document.getElementById(toln1).onclick = function() {
        ChangingSpecial(lnButton);
    }
    document.getElementById(toln2).onclick = function() {
        ChangingSpecial(lnButton);
    }

    // transitions to doorbuster
    document.getElementById(dbButton).onclick = function() {
        ChangingSpecial(dbButton);
    }
    document.getElementById(todb1).onclick = function() {
        ChangingSpecial(dbButton);
    }
    document.getElementById(todb2).onclick = function() {
        ChangingSpecial(dbButton);
    }

}

window.addEventListener("load", Slideshow, false);