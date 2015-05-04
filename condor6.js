var content = "A captive breeding program for California condors was launched. It was slow to start, but steadily increased when biologists utilized the birds’ ability to double clutch, or produce a second egg if the first is lost. They removed the first egg, built highly realistic condor-head puppets, and raised the separated chicks with puppets. The number of condors grew, and in 1991 the breeding programs began to release California Condors back into their native territory.";

function condor6DisplayTW() {condor6Display('condor6',content,-800);} // lower = more delay
loaded('condor6',condor6DisplayTW);

var brk = '~'; // character to use for line break
var resetTime = 0; // set to 0 to not reset or seconds to delay before reset


// Typewriter Text Javascript
// copyright 13th October, 2007 by Stephen Chapman
// permission to use this Javascript on your web page is granted
// provided that all of the code in this script (including these
// comments) is used without any alteration
// you can change the values above this notice to suit your requirements
function condor6Display(id,content,num) {var delay = 100; if (num <= content.length)  {var lt = content.substr(0,num); document.getElementById(id).innerHTML = lt.replace(RegExp(brk,'g'),'<br \/>'); num++; if (num > content.length) delay = resetTime * 1000;} else {document.getElementById(id).innerHTML = ''; num = 0;} if (delay > 0) setTimeout('condor6Display("'+id+'","'+content+'","'+num+'")',delay);} var pageLoaded = 0; window.onload = function() {pageLoaded = 1;}; function loaded(i,f) {if (document.getElementById && document.getElementById(i) != null) f(); else if (!pageLoaded) setTimeout('loaded(\''+i+'\','+f+')',100);}
