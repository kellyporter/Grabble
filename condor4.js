var content = "Human activity all but destroyed the California Condor in the 20th century. Poaching, lead poisoning, DDT poisoning, power line collisions, ingestion of litter, and habitat destruction killed off these slow-growing birds faster than they could reproduce. In 1987, the last 22 condors in existence were captured. The California condor became extinct in the wild.";

function condor4DisplayTW() {condor4Display('condor4',content,-500);} // lower = more delay
loaded('condor4',condor4DisplayTW);

var brk = '~'; // character to use for line break
var resetTime = 0; // set to 0 to not reset or seconds to delay before reset


// Typewriter Text Javascript
// copyright 13th October, 2007 by Stephen Chapman
// permission to use this Javascript on your web page is granted
// provided that all of the code in this script (including these
// comments) is used without any alteration
// you can change the values above this notice to suit your requirements
function condor4Display(id,content,num) {var delay = 80; if (num <= content.length)  {var lt = content.substr(0,num); document.getElementById(id).innerHTML = lt.replace(RegExp(brk,'g'),'<br \/>'); num++; if (num > content.length) delay = resetTime * 1000;} else {document.getElementById(id).innerHTML = ''; num = 0;} if (delay > 0) setTimeout('condor4Display("'+id+'","'+content+'","'+num+'")',delay);} var pageLoaded = 0; window.onload = function() {pageLoaded = 1;}; function loaded(i,f) {if (document.getElementById && document.getElementById(i) != null) f(); else if (!pageLoaded) setTimeout('loaded(\''+i+'\','+f+')',100);}
