var previousOrientation;
window.addEventListener("orientationchange", function(){checkOrientation();}, false);
//window.addEventListener("resize", function(){RafraichirBackground();}, false);
var previousOrientation = window.orientation;

function checkOrientation() {
    if(window.orientation != previousOrientation){
        previousOrientation = window.orientation;
        //alert("changement");                         
        //location.reload(true);  
    }
};