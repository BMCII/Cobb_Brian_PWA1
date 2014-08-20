/**
 * Brian Cobb
 * Duel Fight Game - FINISHED
 * Date: 4/09/13


 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){
window.onload = function(){
    console.log("FIGHT!!!");

    //player name
    var playerOneName = "Cammy";                                                                                        //declared variable playerOneName
    var playerTwoName = "Chun Li";                                                                                           //declared variable playerTwoName

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;                                                                                              //declared variable playerOneHealth
    var playerTwoHealth = 100;                                                                                              //declared variable playerTwoHealth

    //initiate round
    var round = 0;                                                                                                            //declare variable round

    function fight() {                                                                                                       //create function fight
        alert(playerOneName + ":" + playerOneHealth + "  *START*  " + playerTwoName + ":" + playerTwoHealth);                           //alert user of player names and health
        for (var i = 0; i < 10; i++)                                                                                        //start for loop for duration of fight
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;                                                                            //declare variable minDamage1
            var minDamage2 = player2Damage * .5;                                                                            //declare variable minDamage2
            var f1 = Math.floor(Math.random() * (player1Damage - minDamage1) + minDamage1);                                       //declare variable f1 (random number from 10 - 20) for damage to player 1
            var f2 = Math.floor(Math.random() * (player2Damage - minDamage2) + minDamage2);                                       //declare variable f2 (random number from 10 - 20) for damage to player 2

            //inflict damage
            playerOneHealth -= f1;                                                                                            //subtract damage from player 1 health
            playerTwoHealth -= f2;                                                                                            //subtract damage from player 2 health

            console.log(playerOneName + ": " + playerOneHealth + " " + playerTwoName + ":" + playerTwoHealth);                      //console.log the players health (test)

            //check for victor
            var result = winnerCheck();                                                                                     //check for winner using winnerCheck function
            console.log(result);                                                                                            //console.log result(test)
            if (result === "no winner")                                                                                       //if conditional to test for winner
            {
                round++;
                alert(playerOneName + ":" + playerOneHealth + "  *ROUND " + round + " OVER" + "*  " + playerTwoName + ":" + playerTwoHealth); //alert user names, health and round number

            } else {
                alert(result);                                                                                              //else part of loop alert result and break loop
                break;
            }
            ;

        }
        ;
    };

    function winnerCheck() {                                                                                                 //create function winnerCheck
        var result = "no winner";                                                                                             //declare result variable as "no winner"
        if (playerOneHealth < 1 && playerTwoHealth < 1)                                                                         //if both players health less than 0 set result to "you both die"
        {
            result = "You Both Die";
        } else if (playerOneHealth < 1) {                                                                                       //else if playerOneHealth less than 1 set result to playerTwoName wins
            result = playerTwoName + " WINS!!!"
        } else if (playerTwoHealth < 1)                                                                                       //else if playerTwoHealth less than 1 set result to playerOneName wins
        {
            result = playerOneName + " WINS!!!"
        }
        ;
        return result;                                                                                                       //return result
    };

    /*******  The program gets started below *******/
    fight();                                                                                                                //call fight function

}})();