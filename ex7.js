var content = "~Sumatran Orangutan. Sumatra, Java. Overhunting, habitat loss.~Approximately 7,300 individuals.~Mountain Gorilla. Central Africa. Overhunting, habitat loss.~Approximately 880 individuals.~Vaquita. Gulf of California. Fishing industry, pollution.~Between 300 and 100 individuals.~Javan Rhinoceros. Java. Overhunting, habitat loss.~Approximately 35 individuals.~Amur Leopard. Russia, China. Overhunting, habitat loss.~Approximately 26 individuals.~Saola. Vietnam, Laos. Overhunting, invasive species, habitat loss.~One individual documented with a camera trap.";

function ex7DisplayTW() {ex7Display('ex7',content,-800);} // lower = more delay
loaded('ex7',ex7DisplayTW);

var brk = '~'; // character to use for line break
var resetTime = 0; // set to 0 to not reset or seconds to delay before reset


// Typewriter Text Javascript
// copyright 13th October, 2007 by Stephen Chapman
// permission to use this Javascript on your web page is granted
// provided that all of the code in this script (including these
// comments) is used without any alteration
// you can change the values above this notice to suit your requirements
function ex7Display(id,content,num) {var delay = 140; if (num <= content.length)  {var lt = content.substr(0,num); document.getElementById(id).innerHTML = lt.replace(RegExp(brk,'g'),'<br \/>'); num++; if (num > content.length) delay = resetTime * 1000;} else {document.getElementById(id).innerHTML = ''; num = 0;} if (delay > 0) setTimeout('ex7Display("'+id+'","'+content+'","'+num+'")',delay);} var pageLoaded = 0; window.onload = function() {pageLoaded = 1;}; function loaded(i,f) {if (document.getElementById && document.getElementById(i) != null) f(); else if (!pageLoaded) setTimeout('loaded(\''+i+'\','+f+')',100);}
