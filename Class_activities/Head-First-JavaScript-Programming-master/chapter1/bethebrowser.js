/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Be the Browser - Lecture 2
 */

//alert("testing 1,2,3");
document.write("welcome to my PWA-1 browser jokes! -Brian");

//Test for jokes

var joke = "javaScript walked into a bar...";     //declare string variable joke
var toldJoke = true;                           //declare string variable toldJoke
var $punchline =                                  //declare string variable $punchLine
  "Better watch out for those semi-colons."
var percentage = 20;                              //declare number variable percentage
var result                                        //declare undefined variable

if(toldJoke == true){                             //if conditional true will alert $punchline
    alert($punchline);
}else{                                            //if conditional false will alert joke
    alert(joke);
}