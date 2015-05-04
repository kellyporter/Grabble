var content = "~~Baiji Dolphin. Yangtze River, China. Overhunting, fishing industry, pollution. 2006. Alaotra Grebe. Madagascar. Habitat Loss. 2010. Japanese River Otter. Japan. Overhunting, pollution. 2012. Pinta Island Tortoise. Galapagos. Overhunting. 2012. Formosan Clouded Leopard. Taiwan. Habitat loss. 2013. Western Black Rhinoceros. Africa. Overhunting. 2013.";

function ex8DisplayTW() {ex8Display('ex8',content,-1200);} // lower = more delay
loaded('ex8',ex8DisplayTW);

var brk = '~'; // character to use for line break
var resetTime = 0; // set to 0 to not reset or seconds to delay before reset


// Typewriter Text Javascript
// copyright 13th October, 2007 by Stephen Chapman
// permission to use this Javascript on your web page is granted
// provided that all of the code in this script (including these
// comments) is used without any alteration
// you can change the values above this notice to suit your requirements
function ex8Display(id,content,num) {var delay = 60; if (num <= content.length)  {var lt = content.substr(0,num); document.getElementById(id).innerHTML = lt.replace(RegExp(brk,'g'),'<br \/>'); num++; if (num > content.length) delay = resetTime * 1000;} else {document.getElementById(id).innerHTML = ''; num = 0;} if (delay > 0) setTimeout('ex8Display("'+id+'","'+content+'","'+num+'")',delay);} var pageLoaded = 0; window.onload = function() {pageLoaded = 1;}; function loaded(i,f) {if (document.getElementById && document.getElementById(i) != null) f(); else if (!pageLoaded) setTimeout('loaded(\''+i+'\','+f+')',100);}
