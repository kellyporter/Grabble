var content = "Middle East. Overhunting. 100 BCE.";

function ex2DisplayTW() {ex2Display('ex2',content,-25);} // lower = more delay
loaded('ex2',ex2DisplayTW);

var brk = '~'; // character to use for line break
var resetTime = 0; // set to 0 to not reset or seconds to delay before reset


// Typewriter Text Javascript
// copyright 13th October, 2007 by Stephen Chapman
// permission to use this Javascript on your web page is granted
// provided that all of the code in this script (including these
// comments) is used without any alteration
// you can change the values above this notice to suit your requirements
function ex2Display(id,content,num) {var delay = 140; if (num <= content.length)  {var lt = content.substr(0,num); document.getElementById(id).innerHTML = lt.replace(RegExp(brk,'g'),'<br \/>'); num++; if (num > content.length) delay = resetTime * 1000;} else {document.getElementById(id).innerHTML = ''; num = 0;} if (delay > 0) setTimeout('ex2Display("'+id+'","'+content+'","'+num+'")',delay);} var pageLoaded = 0; window.onload = function() {pageLoaded = 1;}; function loaded(i,f) {if (document.getElementById && document.getElementById(i) != null) f(); else if (!pageLoaded) setTimeout('loaded(\''+i+'\','+f+')',100);}
