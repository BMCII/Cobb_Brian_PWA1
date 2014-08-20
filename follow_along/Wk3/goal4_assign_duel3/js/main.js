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

    //player[name,damage,health]
    var fighter1 = {name:"Cammy", damage:20, health:100};
    var fighter2 = {name:"Chun Li", damage:20, health:100};
                                                                                                                                  //declared array for fighter 1

                                                                                                                                  //declared array for fighter 2

    //initiate round
    var round = 0;                                                                                                                //declare variable round

    function fight() {                                                                                                            //create function fight


        //alert(fighter1.name + ":" + fighter1.health + "  *START*  " + fighter2.name + ":" + fighter2.health);                                 //alert user of player names and health
        for (var i = 0; i < 10; i++)                                                                                              //start for loop for duration of fight
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighter1.damage * .5;                                                                                    //declare variable minDamage1
            var minDamage2 = fighter2.damage * .5;                                                                                    //declare variable minDamage2
            var f1 = Math.floor(Math.random() * (fighter1.damage - minDamage1) + minDamage1);                                         //declare variable f1 (random number from 10 - 20) for damage to player 1
            var f2 = Math.floor(Math.random() * (fighter2.damage - minDamage2) + minDamage2);                                         //declare variable f2 (random number from 10 - 20) for damage to player 2

            //inflict damage
            fighter1.health -= f1;                                                                                                    //subtract damage from player 1 health
            fighter2.health -= f2;                                                                                                    //subtract damage from player 2 health

            console.log(fighter1.name + ": " + fighter1.health + " " + fighter2.name + ":" + fighter2.health);                                //console.log the players health (test)
            console.log(f1);
            //check for victor
            var result = winnerCheck();                                                                                           //check for winner using winnerCheck function
            console.log(result);
            document.getElementById("kabal").innerHTML = (fighter1.name + " " + fighter1.health);
            document.getElementById("kratos").innerHTML = (fighter2.name + " " + fighter2.health);                                                                                    //console.log result(test)
            if (result === "no winner")                                                                                           //if conditional to test for winner
            {
                round++;
                document.getElementById("round").innerHTML = ("Round " + round);
                //alert(fighter1.name + ":" + fighter1.health + "  *ROUND " + round + " OVER" + "*  " + fighter2.name + ":" + fighter2.health); //alert user names, health and round number


            } else {
                //alert(result);                                                                                                    //else part of loop alert result and break loop

                break;
            }
            ;

        }
        ;
    };

    function winnerCheck() {                                                                                                 //create function winnerCheck
        var result = "no winner";                                                                                             //declare result variable as "no winner"
        if (fighter1.health < 1 && fighter2.health < 1)                                                                         //if both players health less than 0 set result to "you both die"
        {
            result = "You Both Die";
        } else if (fighter1.health < 1) {                                                                                       //else if fighter1 less than 1 set result to playerTwoName wins
            result = fighter2.name + " WINS!!!"
        } else if (fighter2.health < 1)                                                                                       //else if fighter2 less than 1 set result to playerOneName wins
        {
            result = fighter1.name + " WINS!!!"
        }
        ;
        return result;                                                                                                       //return result
    };

    document.getElementById("fight_box").onclick = function() {fight()};
    /*******  The program gets started below *******/
    fight();                                                                                                                //call fight function

}})();