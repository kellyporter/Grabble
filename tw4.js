var content = "In 1945, the Old Man is designated as the New Hampshire State Emblem.~~In 1955, President Dwight D. Eisenhower visits the stone formation in celebration of the Old Man’s 150th “birthday.”~~In 1957, the state appropriated $25,000 to help mend cracks in the Old Man’s forehead caused by repeated freezing and thawing. 20 tons of fast-drying cement, plastic covering, steel rods, and turnbuckles were used. A concrete gutter was built to divert runoff from above. A team from the state highway and park divisions maintained the patchwork each summer.~~In 1986, vandalizing the Old Man is classified as a crime under state law.~~In 1987, the Old Man is officially given a caretaker.~~In 2003, the Old Man collapses. Dismay over the collapse was so great that people left flowers at the base of the cliffs in tribute. The idea of replacing the face with a replica is considered. It is ultimately rejected.~~In 2004, coin-operated viewfinders are installed to show how the Old Man looked before its collapse. State legislature considers a proposal to change New Hampshire’s state flag to include the Old Man.~~In 2010, the first phase of the state-sanctioned “Old Man of the Mountain Memorial” is unveiled.";

function tw4DisplayTW() {tw4Display('tw4',content,-560);} // lower = more delay
loaded('tw4',tw4DisplayTW);

var brk = '~'; // character to use for line break
var resetTime = 0; // set to 0 to not reset or seconds to delay before reset


// Typewriter Text Javascript
// copyright 13th October, 2007 by Stephen Chapman
// permission to use this Javascript on your web page is granted
// provided that all of the code in this script (including these
// comments) is used without any alteration
// you can change the values above this notice to suit your requirements
function tw4Display(id,content,num) {var delay = 70; if (num <= content.length)  {var lt = content.substr(0,num); document.getElementById(id).innerHTML = lt.replace(RegExp(brk,'g'),'<br \/>'); num++; if (num > content.length) delay = resetTime * 1000;} else {document.getElementById(id).innerHTML = ''; num = 0;} if (delay > 0) setTimeout('tw4Display("'+id+'","'+content+'","'+num+'")',delay);} var pageLoaded = 0; window.onload = function() {pageLoaded = 1;}; function loaded(i,f) {if (document.getElementById && document.getElementById(i) != null) f(); else if (!pageLoaded) setTimeout('loaded(\''+i+'\','+f+')',100);}
