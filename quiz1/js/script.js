/*
 Brian Cobb
 WPF 1407
 7/14/2014
 quiz 1 Movie Night
 */

//Movie Night
var zipCode = 98104;                                    //declared variable zipCode
var joesFavoriteMovie = "Forbidden Planet";             //declared variable joesFavoriteMovie
var movieTicket$ = 9;                                   //declared variable movieTicket

if(movieTicket$ >= 9){                                  //using if/else condition to determine if ticket is >=9
    alert("Too much!");                                 //if condition true alert
} else {
    alert("We're going to see " + joesFavoriteMovie) ;  //if condition not true alert
}
