var content = "Bluebuck. South Africa. Overhunting, habitat loss. 1800. Mauritius Blue Pigeon. Mauritius. Overhunting, habitat loss. 1826. Great Auk. Newfoundland. Overhunting. 1852. Quagga. South Africa. Overhunting. 1883. Atlas Bear. Northern Africa. Overhunting. 1890. Carolina Parakeet. Eastern US. Habitat loss, overhunting. 1918. Thylacine. Australia. Overhunting, habitat loss. 1936. Caribbean Monk Seal. Caribbean, Atlantic, Gulf of Mexico. Overhunting, overfishing. 1952. Arabian Ostrich. Arabian Peninsula. Overhunting. 1966. Javan Tiger. Java. Overhunting, habitat loss. 1979. Golden Toad. Costa Rica. Habitat loss. 1989. Dusky Seaside Sparrow. Florida, USA. Pollution, pesticide use. 1990. Baiji Dolphin. Yangtze River, China. Overhunting, fishing industry, pollution. 2006. Alaotra Grebe. Madagascar. Habitat Loss. 2010. Japanese River Otter. Japan. Overhunting, pollution. 2012. Pinta Island Tortoise. Galapagos. Overhunting. 2012. Formosan Clouded Leopard. Taiwan. Habitat loss. 2013. Western Black Rhinoceros. Africa. Overhunting. 2013.";

function ex6DisplayTW() {ex6Display('ex6',content,-1150);} // lower = more delay
loaded('ex6',ex6DisplayTW);

var brk = '~'; // character to use for line break
var resetTime = 0; // set to 0 to not reset or seconds to delay before reset


// Typewriter Text Javascript
// copyright 13th October, 2007 by Stephen Chapman
// permission to use this Javascript on your web page is granted
// provided that all of the code in this script (including these
// comments) is used without any alteration
// you can change the values above this notice to suit your requirements
function ex6Display(id,content,num) {var delay = 50; if (num <= content.length)  {var lt = content.substr(0,num); document.getElementById(id).innerHTML = lt.replace(RegExp(brk,'g'),'<br \/>'); num++; if (num > content.length) delay = resetTime * 1000;} else {document.getElementById(id).innerHTML = ''; num = 0;} if (delay > 0) setTimeout('ex6Display("'+id+'","'+content+'","'+num+'")',delay);} var pageLoaded = 0; window.onload = function() {pageLoaded = 1;}; function loaded(i,f) {if (document.getElementById && document.getElementById(i) != null) f(); else if (!pageLoaded) setTimeout('loaded(\''+i+'\','+f+')',100);}
