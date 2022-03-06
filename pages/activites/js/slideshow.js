const data = {
    "activityIds":[
        {
            "activity":"bowling", 
            "activitydiv":"bowling_div", 
            "leftarrow":"arrow-left-1",
            "rightarrow":"arrow-right-1"
        },
        {
            "activity":"axe-throwing", 
            "activitydiv":"axe-div", 
            "leftarrow":"arrow-left-2",
            "rightarrow":"arrow-right-2"
        }
    ]
}

function slideshow() {
    let currAct;
    let axe_button = data.activityIds[1].activity;
    document.getElementById(axe_button).onclick = function(){
        for(var i = 0; i < data.activityIds.length; i++) {
            currAct = document.getElementById(data.activityIds[i].activitydiv);
            if (axe_button === data.activityIds[i].activity){
                currAct.removeAttribute("class", "none");
            } else {
                currAct.style.display = "none"
                console.log("true")
            }
        }
    }
}

window.addEventListener("load", slideshow, false);