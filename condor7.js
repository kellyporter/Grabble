var content = "Their numbers are increasing steadily through regular releases of captive-reared adolescents. As of May 2012, the number of living individuals has reached 405, with 179 living in captivity. The California Condor conservation project may be one of the most expensive projects in U.S. history. It has cost over $35 million since its start, and costs about $2 million annually. In an act of redemption, humans put forth incredible effort to save a species that is neither popular nor conventionally beautiful. We have proved ourselves capable of making significant changes and great sacrifices for another species—";

function condor7DisplayTW() {condor7Display('condor7',content,-1275);} // lower = more delay
loaded('condor7',condor7DisplayTW);

var brk = '~'; // character to use for line break
var resetTime = 0; // set to 0 to not reset or seconds to delay before reset


// Typewriter Text Javascript
// copyright 13th October, 2007 by Stephen Chapman
// permission to use this Javascript on your web page is granted
// provided that all of the code in this script (including these
// comments) is used without any alteration
// you can change the values above this notice to suit your requirements
function condor7Display(id,content,num) {var delay = 100; if (num <= content.length)  {var lt = content.substr(0,num); document.getElementById(id).innerHTML = lt.replace(RegExp(brk,'g'),'<br \/>'); num++; if (num > content.length) delay = resetTime * 1000;} else {document.getElementById(id).innerHTML = ''; num = 0;} if (delay > 0) setTimeout('condor7Display("'+id+'","'+content+'","'+num+'")',delay);} var pageLoaded = 0; window.onload = function() {pageLoaded = 1;}; function loaded(i,f) {if (document.getElementById && document.getElementById(i) != null) f(); else if (!pageLoaded) setTimeout('loaded(\''+i+'\','+f+')',100);}
