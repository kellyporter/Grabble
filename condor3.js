var content = "Its head and neck are completely bald, exposing wrinkly, sagging pink skin. It has a hooked bill, beady red eyes, chubby jowls, and a large, prominent crop. It feeds on the decaying flesh of dead animals and defecates on its legs to cool down. It cannot sing, but instead vocalizes in grunts and hisses. Unsurprisingly, it lost to the cute, fuzzy giant panda in the World Wildlife Fund logo contest.";

function condor3DisplayTW() {condor3Display('condor3',content,-100);} // lower = more delay
loaded('condor3',condor3DisplayTW);

var brk = '~'; // character to use for line break
var resetTime = 0; // set to 0 to not reset or seconds to delay before reset


// Typewriter Text Javascript
// copyright 13th October, 2007 by Stephen Chapman
// permission to use this Javascript on your web page is granted
// provided that all of the code in this script (including these
// comments) is used without any alteration
// you can change the values above this notice to suit your requirements
function condor3Display(id,content,num) {var delay = 80; if (num <= content.length)  {var lt = content.substr(0,num); document.getElementById(id).innerHTML = lt.replace(RegExp(brk,'g'),'<br \/>'); num++; if (num > content.length) delay = resetTime * 1000;} else {document.getElementById(id).innerHTML = ''; num = 0;} if (delay > 0) setTimeout('condor3Display("'+id+'","'+content+'","'+num+'")',delay);} var pageLoaded = 0; window.onload = function() {pageLoaded = 1;}; function loaded(i,f) {if (document.getElementById && document.getElementById(i) != null) f(); else if (!pageLoaded) setTimeout('loaded(\''+i+'\','+f+')',100);}
