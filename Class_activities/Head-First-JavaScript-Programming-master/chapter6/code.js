//Brian Cobb
/*var access = document.getElementById("code9");
var code = access.innerHTML; 
code = code + " midnight"; 
alert(code);
*/

function eventHandler() {
    var myGreenText = document.getElementById("mygreentext");                       //declared variable to hold element mygreentext
        myGreenText.setAttribute("class", "greentext");                             //change attribute of variable green text

    var myRedText = document.getElementById("myredtext");                           //declared variable to hold element myredtext
        myRedText.setAttribute("class", "redtext");                                 //change attribute of variable red text

    var myBlueText = document.getElementById("mybluetext");                         //declared variable to hold element mybluetext
        myBlueText.setAttribute("class", "bluetext");                               //change attribute of variable blue text

    var myGreenHeader = document.getElementById("mygreenheader");                   //declared variable to hold element mygreenheader
        myGreenHeader.setAttribute("class", "greentext");                            //change attribute of variable green text

    var myBlueHeader = document.getElementById("myblueheader");                     //declared variable to hold element myblueheader
        myBlueHeader.setAttribute("class", "bluetext");                             //change attribute of variable blue text

    var myRedHeader = document.getElementById("myredheader");                       //declared variable to hold element myredheader
        myRedHeader.setAttribute("class", "redtext");                               //change attribute of variable red text

}
window.onload = eventHandler;