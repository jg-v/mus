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

/*
function RafraichirBackground() {
    var intBS, vp, scale;
    
    if (!!document.getElementById("myBody")) { 
        if (win.devicePixelRatio > 1) {
           intBS = 2000*(1/(win.devicePixelRatio+0.1));
           document.getElementById("myBody").style.backgroundSize = intBS + "px 125px";
        }
    }
};

function SetViewport(doc, win) {
    var intBS, vp, scale;
    
    vp = screen.width;
    scale = 1;

   // doc.querySelector('meta[name="viewport"]').setAttribute("content", "width=" + vp + ", initial-scale=" + scale);
    
   // var contenant = "width=" + vp + "; initial-scale=" + scale;
  //  alert("Content: " + contenant);
  //  alert("Contenant: " + document.querySelector('meta[name="viewport"]').getAttribute("content"));    
    
    return true;
};

function SetViewport1(doc, win) {
    var intBS, vp, scale;
    
    vp = screen.width;
     
    scale = 1;
    if (vp < 580) {
      scale = (1/(win.devicePixelRatio));
    }         

    if (!!document.getElementById("myBody")) { 
        if (win.devicePixelRatio > 1) {
           intBS = 2000*(1/(win.devicePixelRatio+0.1));
           doc.getElementById("myBody").style.backgroundSize = intBS + "px 125px";
        }
    }

   // doc.querySelector('meta[name="viewport"]').setAttribute("content", "width=" + vp + ", initial-scale=" + scale);
    
    //var contenant = "width=" + vp + "; initial-scale=" + scale;
    //alert("Content: " + contenant);
    //alert("Contenant: " + document.querySelector('meta[name="viewport"]').getAttribute("content"));    
    
    return true;
};
*/		     