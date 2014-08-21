/*
 Brian Cobb
 */

alert("testing 1,2,3");


window.onload = init;

function init() {
    var image = document.getElementById("zero");
    image.onclick = showAnswer;
};

function showAnswer() {
    var image = document.getElementById("zero");
    image.src = "zero.jpg";
}