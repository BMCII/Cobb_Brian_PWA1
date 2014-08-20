/*
 Brian Cobb
 WPF 1407
 7/14/2014
 quiz 1 Movie Night
 */

//Movie Night
var zipCode = 98104;                                                 //declared variable zipCode
var joesFavoriteMovie = "Forbidden Planet";                          //declared variable joesFavoriteMovie
var movieTicket$ = 9;                                                //declared variable movieTicket
var n = prompt("how much are you willing to pay for a ticket");      //new line added Aug 9th: asking user for input
n = parseInt(n);                                                     //added new line Aug 9th: converting string to number

if(n >= movieTicket$){                                               //use if condition to determine if ticket is >=9
    alert("We're going to see " + joesFavoriteMovie);                //if condition true alert
} else {
    alert("not enough!");                                            //if condition not true alert
}
