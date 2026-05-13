var varHTML5AudioSupporter = false;
var varDejaVerifHTML5AudioSupport = false;
var tabSI = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function hasFlash() 
{
  var vhasFlash = false;
  try 
  {
    var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
    if (fo) 
    {
      vhasFlash = true;
    }
  } 
  catch (e) 
  {
    if (navigator.mimeTypes
          && navigator.mimeTypes['application/x-shockwave-flash'] != undefined
          && navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) 
    {
      vhasFlash = true;
    }
  }
  return vhasFlash;
}

function SupportHTML5Audio()
{
//http://mrbool.com/how-to-detect-different-browsers-and-their-versions-using-javascript/25424
var objappVersion = navigator.appVersion;
var objAgent = navigator.userAgent;
var objbrowserName  = navigator.appName;
var objfullVersion  = ''+parseFloat(navigator.appVersion); 
var objBrMajorVersion = parseInt(navigator.appVersion,10);
var objOffsetName,objOffsetVersion,ix;

    // In Chrome 
    if ((objOffsetVersion=objAgent.indexOf("Chrome"))!=-1) {
     objbrowserName = "Chrome";
     objfullVersion = objAgent.substring(objOffsetVersion+7);
    }
    // In Microsoft internet explorer < 11
    else if ((objOffsetVersion=objAgent.indexOf("MSIE"))!=-1) {
     objbrowserName = "Microsoft Internet Explorer";
     objfullVersion = objAgent.substring(objOffsetVersion+5);
    }
    // In Microsoft internet explorer > 11
    else if (navigator.userAgent.match(/Trident.*rv[ :]*11\./)) {
     objbrowserName = "Microsoft Internet Explorer";
     objfullVersion = "11";
    }
    // In Firefox
    else if ((objOffsetVersion=objAgent.indexOf("Firefox"))!=-1) {
     objbrowserName = "Firefox";
    }
    // In Opera
    else if ((objOffsetVersion=objAgent.indexOf("Opera"))!=-1) {
     objbrowserName = "Opera";
    }    
    // In Safari 
    else if ((objOffsetVersion=objAgent.indexOf("Safari"))!=-1) {
     objbrowserName = "Safari";
     objfullVersion = objAgent.substring(objOffsetVersion+7);
     if ((objOffsetVersion=objAgent.indexOf("Version"))!=-1) 
       objfullVersion = objAgent.substring(objOffsetVersion+8);
    }
    // For other browser "name/version" is at the end of userAgent 
    else if ( (objOffsetName=objAgent.lastIndexOf(' ')+1) < 
              (objOffsetVersion=objAgent.lastIndexOf('/')) ) 
    {
     objbrowserName = objAgent.substring(objOffsetName,objOffsetVersion);
     objfullVersion = objAgent.substring(objOffsetVersion+1);
     if (objbrowserName.toLowerCase()==objbrowserName.toUpperCase()) {
      objbrowserName = navigator.appName;
     }
    }
    // trimming the fullVersion string at semicolon/space if present
    if ((ix=objfullVersion.indexOf(";"))!=-1)
       objfullVersion=objfullVersion.substring(0,ix);
    if ((ix=objfullVersion.indexOf(" "))!=-1)
       objfullVersion=objfullVersion.substring(0,ix);

    objBrMajorVersion = parseInt(''+objfullVersion,10);
    if (isNaN(objBrMajorVersion)) {
     objfullVersion  = ''+parseFloat(navigator.appVersion); 
     objBrMajorVersion = parseInt(navigator.appVersion,10);
    }
    
    //alert(objbrowserName + '-' + objBrMajorVersion);
    
return ((objbrowserName == "Chrome" && objBrMajorVersion >= 4) ||
        (objbrowserName == "Microsoft Internet Explorer" && objBrMajorVersion >= 9)  ||
        (objbrowserName == "Firefox" && objBrMajorVersion >= 4)  || 
        (objbrowserName=="Safari" && objBrMajorVersion >= 6)  ||    
        (objbrowserName == "Opera" && objBrMajorVersion >= 11));            
}

function togglePlayPause(MonAudio, Coul) 
{
  var i;
  var myAudio;
  var ImgBtn; 
  var blnMonAudioAPause; 
  var strCetegorieEvenPieceJouee;
  
  
  for(i=1; i < 15; i++)
  {
     blnMonAudioAPause = false;
     
     myAudio = document.getElementById('aud' + 'Audio' + i);
     ImgBtn = document.getElementById('img' + 'Audio' + i);
     
     if (! (myAudio))
        return;
     
     if ((myAudio.getAttribute('id') == 'aud' + MonAudio) && (myAudio.paused))  
           blnMonAudioAPause = true;  
     
     if ((myAudio) && (myAudio.play))
     {
         if (ImgBtn.src.indexOf('StopPressed1') != -1)
         {   
            ImgBtn.src = 'page_fichiers/PlayPressed1.png';         
         }   
         if (ImgBtn.src.indexOf('StopPressed2') != -1)
         {   
            ImgBtn.src = 'page_fichiers/PlayPressed2.png';        
         } 
         myAudio.pause();
         myAudio.currentTime = 0;                
     }
     if (blnMonAudioAPause)
     {       
         if (ImgBtn.src.indexOf('PlayPressed1') != -1)
         {   
            ImgBtn.src = 'page_fichiers/StopPressed1.png';      
         }   
         if (ImgBtn.src.indexOf('PlayPressed2') != -1)
         {   
            ImgBtn.src = 'page_fichiers/StopPressed2.png';         
         } 
            
         // pour google analytic si utilisateur appuie sur le bouton Play  
          gtag('event', 'Play', {
            'event_category': 'Pièce jouée',
            'non_interaction': true
        });          
         
         myAudio.play();                            
     }         
  }
}

function OnEnd(MonAudio, Coul) 
{
  var myAudio = document.getElementById('aud' + MonAudio);
  var ImgBtn = document.getElementById('img' + MonAudio);
  if (!Coul)
  {
    ImgBtn.src = 'page_fichiers/PlayPressed1.png';
  }
  else 
  {   
    ImgBtn.src = 'page_fichiers/PlayPressed2.png';
  }
  myAudio.pause();
  myAudio.currentTime = 0;
}

function OnErr(MonAudio, Coul) 
{
  var myAudio = document.getElementById('aud' + MonAudio);
  var ImgBtn = document.getElementById('img' + MonAudio);
  if (!Coul)
  {
    ImgBtn.src = 'page_fichiers/PlayPressed1.png';
  }
  else 
  {   
    ImgBtn.src = 'page_fichiers/PlayPressed2.png';
  }
  
  myAudio.pause();
  myAudio.currentTime = 0;
}

function supports_html5_audio() 
//to check if browser support html5 (HTML5 defines the <audio> element)
{
  try {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'https://www.dropbox.com/s/5zf60ctri98blbn/eDJazz.mp3?dl=0');
    audioElement.load();
    return true;
  }
  catch(err) {
    return false;
  }
}


function AfficherBoutonPlay(pieceMP3, MonAudio, Coul) 
{	
 if (!varDejaVerifHTML5AudioSupport)
 {
   varHTML5AudioSupporter = SupportHTML5Audio();
   varDejaVerifHTML5AudioSupport = true;
   //alert(varHTML5AudioSupporter);
 }
    
 if (varHTML5AudioSupporter)
 {
   document.write("<td width=\"50px\" valign=\"top\" align=\"center\">");
   document.write("<audio id=\"aud");
   document.write(MonAudio);
   document.write("\" preload=\"none\">");
   document.write("<source src=\"");
   document.write(pieceMP3);
   document.write("\" type='audio/mpeg'>");
   document.write("</audio>");
   document.write("<button type=\"button\" style=\"background-color:rgba(255,255,255,0.0);border:none;\" onclick=\"togglePlayPause('");
   document.write(MonAudio);
   document.write("',");
   document.write(Coul);
   document.write(")\" ><img id=\"img");
   document.write(MonAudio);
   if (!Coul)
      document.write("\" src=\"page_fichiers/PlayPressed1.png\" width=\"16px\">");
   else
      document.write("\" src=\"page_fichiers/PlayPressed2.png\" width=\"16px\">");
   document.write("</button>");

   document.write("</td>"); 

   //ajoute l'événement OnEnd pour changer l'icone à Play
   document.write("<script type=\"text/javascript\">");

   document.write("var myAudio = document.getElementById\(\"aud");
   document.write(MonAudio);
   document.write("\"\);");
   
   document.write("myAudio.addEventListener(\"ended\", function() {");
   document.write("OnEnd(\"");
   document.write(MonAudio);
   document.write("\",");
   document.write(Coul);
   document.write(");}, false);");
   
   
   document.write("myAudio.addEventListener(\"error\", function() {");
   document.write("OnErr(\"");
   document.write(MonAudio);
   document.write("\",");
   document.write(Coul);
   document.write(");}, false);");
   
   document.write("</script>");
 }
 else
 {
    document.write("<td width=\"50px\">");
    document.write("</td>");
 }
}

function AfficherCheckboxPiece(NoPiece) 
{	

    document.write("<td width=\"10%\" valign=\"top\" height=\"30\" align=\"left\">");
    document.write("<input type=\"checkbox\" id=\"c");
    document.write(NoPiece);
    document.write("\" onclick=\"ClickCheckboxPiece()\">");
    document.write("</td>");        
}


function ClickCheckboxPiece() 
{	
    var name_element0, name_element1, name_element2, name_element3;
    var valeurCustomPaypal = "";
    var intNbItems = 0;
    var strLabelCheckBox = "";

    for (var i=0; i<30; i++) 
    {
        if (document.getElementById("c" + i) != null)
        {      
            if (document.getElementById("c" + i).checked){
                valeurCustomPaypal += i + ",";
                intNbItems++;
            }
        }        
     }

    valeurCustomPaypal = valeurCustomPaypal.slice(0, valeurCustomPaypal.length-1); 
    
    //window.alert(valeurCustomPaypal);	     

    name_element0 = document.getElementById('LanguePage');   
    //name_element0 = document.getElementsByName('lc')[0];  
    
    name_element1 = document.getElementById('CustomPaypal');       
    name_element1.value = name_element0.value + "," + intNbItems + "," + valeurCustomPaypal;

    name_element2 = document.getElementById('AmountPaypal');
    name_element2.value = (intNbItems*1.35).toFixed(2);    
    
    name_element3 = document.getElementById('BoutonPaypal');
    if (intNbItems > 0) {    
       name_element3.disabled = false; 
	   name_element3.className  = "BoutonPaypalAct";  
	}        
    else {
       name_element3.disabled = true;  
	   name_element3.className = "BoutonPaypalDes"; 
	} 	   
       
//alert("valeurCustomPaypal: " + name_element1.value);             
}

function AfficherListPlayEMC(Lang) 
{

  if (hasFlash())
  {	
    document.write("<object  type=\"application/x-shockwave-flash\" data=\"player_mp3_multi.swf\" width=\"180px\" height=\"40px\" >");
    document.write("<param name=\"movie\" value=\"player_mp3_multi.swf\" />");
    document.write("<param name=\"FlashVars\" value=\"mp3=http://pages.videotron.com/jgv/Nais/eCBB.mp3|http://pages.videotron.com/jgv/Nais/ePMN.mp3|http://pages.videotron.com/jgv/Nais/eHAB.mp3");
    if (Lang=="A")
      document.write("&amp;title=Concerto Brandebourgeois, no. 3 (J.S. Bach)|Petite musique de nuit (Mozart)|Habanera (Bizet) (Gardel)");
    else
      document.write("&amp;title=Concerto Brandebourgeois, no. 3 (J.S. Bach)|Petite musique de nuit (Mozart)|Habanera (Bizet) (Gardel)");
    document.write("&amp;width=180&amp;height=40&amp;bgcolor1=819FF7&amp;bgcolor2=CEECF5&amp;showvolume=0&amp;showslider=0&amp;showlist=1&amp;volumewidth=100&amp;showplaylistnumbers=0&amp;buttonwidth=45\" />");      
    document.write("</object>");
  }
  else 
  {
    document.write("<a href=\"http://pages.infinit.net/ensemble/Emm/eEMC.m3u\">Jouer tous les extraits</a></td>");
  }

}

function AfficherListPlaySI(Lang) 
{

  if (hasFlash())
  {	
    document.write("<td rowspan=\"3\" colspan=\"2\" width=\"180\" vAlign=\"middle\" align=\"right\" >");
    document.write("<object  type=\"application/x-shockwave-flash\" data=\"player_mp3_multi.swf\" width=\"180\" height=\"40\" >");
    document.write("<param name=\"movie\" value=\"player_mp3_multi.swf\" />");
    document.write("<param name=\"FlashVars\" value=\"mp3=https://www.dropbox.com/s/5zf60ctri98blbn/eDJazz.mp3?dl=1|https://www.dropbox.com/s/g6cqjla3dp1hiqi/eSI.mp3?dl=1|https://www.dropbox.com/s/26ubj6ssv4o4dul/eBL.mp3?dl=1|https://www.dropbox.com/s/mqpenn0hmpth6mu/eCDP.mp3?dl=1|https://www.dropbox.com/s/k2miptsx9cr1ris/ePV.mp3?dl=1|https://www.dropbox.com/s/6jzhtd0t3g2ou0e/Exp3T3M.mp3?dl=1|https://www.dropbox.com/s/qoswdv330g8s7lp/eAE.mp3?dl=1|https://www.dropbox.com/s/pn1gaj24tpsmpv4/eDia.mp3?dl=1|https://www.dropbox.com/s/9r0ns81roynbt2j/eSA.mp3?dl=1|https://www.dropbox.com/s/yqc04y27v51jkod/eTrav.mp3?dl=1");
    if (Lang=="A")
      document.write("&amp;title=Jazz Direction|Capturing the Invisible|Breath of Freedom|Thing of the past|City Walk|Explanations in Three Mov.|Wandering of the Spirit|Dialogue|August Evening|Colorful Crossing");
    else
    document.write("&amp;title=Direction jazz|Saisir l'invisible|Bouffée de liberté|C'est du passé|Promenade en ville|Explications en 3 temps 3 mouv.|A erré l'esprit|Dialogue|Soirée daoût|Traversée");
      document.write("&amp;width=180&amp;height=40&amp;bgcolor1=819FF7&amp;bgcolor2=CEECF5&amp;showvolume=0&amp;showslider=0&amp;showlist=1&amp;volumewidth=100&amp;showplaylistnumbers=0&amp;buttonwidth=45\" />");
    document.write("</object>");
    document.write("</td>");
  }
  else 
  {
    document.write("<td rowspan=\"3\" colspan=\"2\" width=\"180\" vAlign=\"middle\" align=\"center\">");
    document.write("<A href=\"http://pages.infinit.net/ensemble/jgv/eSI1.m3u\">Play the extracts</A></td>");
    document.write("</td>");
  }

}

function AfficherListPlayTB(Lang) 
{

  if (hasFlash())
  {	

    document.write("<td rowspan=\"3\" colspan=\"2\" width=\"180\" vAlign=\"middle\" align=\"right\">");
    document.write("<object  type=\"application/x-shockwave-flash\" data=\"player_mp3_multi.swf\" width=\"180\" height=\"40\">");
    document.write("<param name=\"movie\" value=\"player_mp3_multi.swf\" />");
    document.write("<param name=\"FlashVars\" value=\"mp3=https://www.dropbox.com/s/9c3v55o644ypkml/eFourb.mp3?dl=1|https://www.dropbox.com/s/5o3zu9ingtz9dvl/eTB.mp3?dl=1|https://www.dropbox.com/s/bi1ggyclofhdjrr/eAH.mp3?dl=1|https://www.dropbox.com/s/x0o7r26voi859km/ePart.mp3?dl=1|https://www.dropbox.com/s/hnxiqg4erpvu0pd/eCourse.mp3?dl=1|https://www.dropbox.com/s/55dmmwcleyhkerw/eBal.mp3?dl=1|https://www.dropbox.com/s/hbns2xd29vw2u4j/eRemous.mp3?dl=1|https://www.dropbox.com/s/egzzv1vj8aslqrm/eTrav.mp3?dl=1|https://www.dropbox.com/s/27ez7fdx1vw5oue/eAnn.mp3?dl=1|https://www.dropbox.com/s/15rijjl23wx57if/eCoul.mp3?dl=1");
    if (Lang=="A")
      document.write("&amp;title=Deceit|Hubbub|Amends|About To Leave|Race|Stroll|Backwash|The crossing|Announcement|The Tunnel");
    else
      document.write("&amp;title=Fourberie|Tohu-bohu|Amande honorable|Partance|Course|Balade|Remous|Traversée|Annonce|Le couloir");
    document.write("&amp;width=180&amp;height=40&amp;bgcolor1=819FF7&amp;bgcolor2=CEECF5&amp;showvolume=0&amp;showslider=0&amp;showlist=1&amp;volumewidth=100&amp;showplaylistnumbers=0&amp;buttonwidth=44\" />");
    document.write("</object>");
    document.write("</td>");
  }
  else 
  {
    document.write("<td rowspan=\"3\" colspan=\"2\" width=\"180\" vAlign=\"middle\" align=\"center\">");
    document.write("<A href=\"http://pages.infinit.net/ensemble/jgv/eTB.m3u\">Play the extracts</A></td>");
    document.write("</td>");
  }

}

function SelectionnerPiece(intNoPiece) 
{
    if (tabSI[intNoPiece] == 0)
      tabSI[intNoPiece] = 1;  
    else
      tabSI[intNoPiece] = 0;
}