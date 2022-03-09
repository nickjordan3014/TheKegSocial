const data = {
    "activityIds":[
        {
            "activity":"bowling", 
            "activitydiv":"bowling_div", 
            "leftarrow":"arrow-left-1",
            "rightarrow":"arrow-right-1"
        },
        {
            "activity":"arcade", 
            "activitydiv":"arcade-div", 
            "leftarrow":"arrow-left-2",
            "rightarrow":"arrow-right-2"
        },
        {
            "activity":"axe-throwing", 
            "activitydiv":"axe-div", 
            "leftarrow":"arrow-left-3",
            "rightarrow":"arrow-right-3"
        },
        {
            "activity":"billiards", 
            "activitydiv":"billiards-div", 
            "leftarrow":"arrow-left-4",
            "rightarrow":"arrow-right-4"
        },
        {
            "activity":"ping-pong", 
            "activitydiv":"ping-pong-div", 
            "leftarrow":"arrow-left-5",
            "rightarrow":"arrow-right-5"
        },
        {
            "activity":"karaoke", 
            "activitydiv":"karaoke-div", 
            "leftarrow":"arrow-left-6",
            "rightarrow":"arrow-right-6"
        },
        {
            "activity":"cornhole", 
            "activitydiv":"cornhole-div", 
            "leftarrow":"arrow-left-7",
            "rightarrow":"arrow-right-7"
        },
        {
            "activity":"beer-pong", 
            "activitydiv":"beer-pong-div", 
            "leftarrow":"arrow-left-8",
            "rightarrow":"arrow-right-8"
        },
        {
            "activity":"yard-pong", 
            "activitydiv":"yard-pong-div", 
            "leftarrow":"arrow-left-9",
            "rightarrow":"arrow-right-9"
        }
    ]
}

function ChangingActivity(button){
    let currAct;
    for(var i = 0; i < data.activityIds.length; i++) {
        currAct = document.getElementById(data.activityIds[i].activitydiv);
        if (button === data.activityIds[i].activity){
            currAct.classList.remove("displayStatus");
        } else {
            currAct.classList.add("displayStatus");
        }
    }
}

function Slideshow() {
    // to bowling
    let bowlingButton = data.activityIds[0].activity;
    let toBowling1 = data.activityIds[1].leftarrow;
    let toBowling2 = data.activityIds[8].rightarrow;
    // to arcade
    let arcadeButton = data.activityIds[1].activity;
    let toArcade1 = data.activityIds[0].rightarrow;
    let toArcade2 = data.activityIds[2].leftarrow;
    // to axe
    let axeButton = data.activityIds[2].activity;
    let toAxe1 = data.activityIds[1].rightarrow;
    let toAxe2 = data.activityIds[3].leftarrow;
    // to billiards
    let billiardsButton = data.activityIds[3].activity;
    let tobilliards1 = data.activityIds[2].rightarrow;
    let tobilliards2 = data.activityIds[4].leftarrow;
    // to ping pong
    let pingPongButton = data.activityIds[4].activity;
    let toPingPong1 = data.activityIds[3].rightarrow;
    let toPingPong2 = data.activityIds[5].leftarrow;
    // to karaoke
    let karaokeButton = data.activityIds[5].activity;
    let toKaraoke1 = data.activityIds[4].rightarrow;
    let toKaraoke2 = data.activityIds[6].leftarrow;
    // to cornhole
    let cornholeButton = data.activityIds[6].activity;
    let toCornhole1 = data.activityIds[5].rightarrow;
    let toCornhole2 = data.activityIds[7].leftarrow;
    // to beer pong
    let beerPongButton = data.activityIds[7].activity;
    let toBeerPong1 = data.activityIds[6].rightarrow;
    let toBeerPong2 = data.activityIds[8].leftarrow;
    // to yard pong
    let yardPongButton = data.activityIds[8].activity;
    let toYardPong1 = data.activityIds[7].rightarrow;
    let toYardPong2 = data.activityIds[0].leftarrow;

    //transitions to bowling
    document.getElementById(bowlingButton).onclick = function() {
        ChangingActivity(bowlingButton);
    }
    document.getElementById(toBowling1).onclick = function() {
        ChangingActivity(bowlingButton)
    }
    document.getElementById(toBowling2).onclick = function() {
        ChangingActivity(bowlingButton)
    }
    
    //transitions to arcade
    document.getElementById(arcadeButton).onclick = function() {
        ChangingActivity(arcadeButton);
    }
    document.getElementById(toArcade1).onclick = function() {
        ChangingActivity(arcadeButton);
    }
    document.getElementById(toArcade2).onclick = function() {
        ChangingActivity(arcadeButton)
    }

    //transitions to axe throwing
    document.getElementById(axeButton).onclick = function() {
        ChangingActivity(axeButton);
    }
    document.getElementById(toAxe1).onclick = function() {
        ChangingActivity(axeButton)
    }
    document.getElementById(toAxe2).onclick = function() {
        ChangingActivity(axeButton)
    }

    //transitions to billiards
    document.getElementById(billiardsButton).onclick = function() {
        ChangingActivity(billiardsButton);
    }
    document.getElementById(tobilliards1).onclick = function() {
        ChangingActivity(billiardsButton);
    }
    document.getElementById(tobilliards2).onclick = function() {
        ChangingActivity(billiardsButton)
    }
    //transitions ping pong
    document.getElementById(pingPongButton).onclick = function() {
        ChangingActivity(pingPongButton);
    }
    document.getElementById(toPingPong1).onclick = function() {
        ChangingActivity(pingPongButton);
    }
    document.getElementById(toPingPong2).onclick = function() {
        ChangingActivity(pingPongButton)
    }
    //transitions karaoke
    document.getElementById(karaokeButton).onclick = function() {
        ChangingActivity(karaokeButton);
    }
    document.getElementById(toKaraoke1).onclick = function() {
        ChangingActivity(karaokeButton);
    }
    document.getElementById(toKaraoke2).onclick = function() {
        ChangingActivity(karaokeButton)
    }
    //transitions cornhole
    document.getElementById(cornholeButton).onclick = function() {
        ChangingActivity(cornholeButton);
    }
    document.getElementById(toCornhole1).onclick = function() {
        ChangingActivity(cornholeButton);
    }
    document.getElementById(toCornhole2).onclick = function() {
        ChangingActivity(cornholeButton)
    }
    //transitions beer pong
    document.getElementById(beerPongButton).onclick = function() {
        ChangingActivity(beerPongButton);
    }
    document.getElementById(toBeerPong1).onclick = function() {
        ChangingActivity(beerPongButton);
    }
    document.getElementById(toBeerPong2).onclick = function() {
        ChangingActivity(beerPongButton)
    }
    //transitions yard pong
    document.getElementById(yardPongButton).onclick = function() {
        ChangingActivity(yardPongButton);
    }
    document.getElementById(toYardPong1).onclick = function() {
        ChangingActivity(yardPongButton);
    }
    document.getElementById(toYardPong2).onclick = function() {
        ChangingActivity(yardPongButton)
    }
}

window.addEventListener("load", Slideshow, false);