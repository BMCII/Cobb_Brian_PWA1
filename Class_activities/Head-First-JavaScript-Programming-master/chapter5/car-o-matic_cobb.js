/*
 Brian Cobb
 car-o-matic
 */

//alert("testing 1,2,3");
function makePhrases() {                                                                //create function makePhrases
    var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];            //declare variable words1
    var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];        //declare variable words2
    var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];        //declare variable words2
    var rand1 = Math.floor(Math.random() * words1.length);                              //declare variable rand1 to get first random number
        console.log(rand1);
    var rand2 = Math.floor(Math.random() * words2.length);                              //declare variable rand1 to get second random number
        console.log(rand2);
    var rand3 = Math.floor(Math.random() * words3.length);                              //declare variable rand1 to get third random number
        console.log(rand3);
    var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];             //declare variable phrase

    console.log("your first set of words: " + words1[rand1] + " came from words1 index position: "+ rand1);
    console.log("your second set of words: " + words2[rand2] + " came from words2 index position: "+ rand2);
    console.log("your third set of words: " + words3[rand2] + " came from words3 index position: "+ rand3);
    alert(phrase);
}
makePhrases();

