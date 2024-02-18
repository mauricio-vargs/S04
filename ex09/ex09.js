let switchValue = "off"
const BODY = document.body
const TITLE = document.getElementById("text")


function switchFunction(){
    switch (switchValue) {    
        case "on":
            BODY.style.background = "black"
            TITLE.style.color = "white"
            TITLE.innerHTML = "OFF"
            switchValue = "off"
            break;
        case "off":
            BODY.style.background = "white"
            TITLE.innerHTML = "ON"
            TITLE.style.color = "black"
            switchValue = "on"
            break;
    }

}