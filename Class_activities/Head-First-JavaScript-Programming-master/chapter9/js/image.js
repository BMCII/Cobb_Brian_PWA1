/*
 Brian Cobb
 */




window.onload = init;                                               //run init function after window is loaded

function init() {                                                   //declare function init

    var images = document.getElementsByTagName("img");              //declare variable to hold images from document
    for (var i = 0 ; i < images.length; i++) {                      //iterate through the images
        images[i].onclick = showAnswer;                             //showAnswer onclick
    }


};

function showAnswer(clickEventObject) {                             //declare function showAnswer
    var image = clickEventObject.target;                            //declare variable to hold image
    var name = image.id;                                            //declare variable for image name by id
    alert("you clicked on image " + name);                          //alert user of image clicked
    name = "images/" + name + ".jpg";                               //change image path
    image.src = name;                                               //change image source to var name
    setTimeout(reblur, 2000, image);                                //set clock for reblur function


}

function reblur(image) {                                            //declare function reblur
    var name = image.id;                                            //declare variable to hold images from document
    name = "images/" + name + "blur.jpg";                           //change image path
    image.src = name;                                               //change image source to var name
    alert('"Congrats! Game Image ReBlured"');                       //alert user image reblured
}