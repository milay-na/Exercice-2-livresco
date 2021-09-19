//Function allows to slide to the next card on the right
function slideRight()  {
    //If center element has next element...
    var centerElement = document.querySelector(".center");
    if (centerElement.nextElementSibling) {
    
        //Change the class of center element to mini
        centerElement = document.querySelector(".center");
        centerElement.classList.remove("center");
        centerElement.classList.add("mini");

        //Remove the mini class of previous element, if it exists 
        var miniElement = centerElement.previousElementSibling;
        if (centerElement.previousElementSibling) {miniElement.classList.remove("mini");}
        
        //Change class of next element from mini to center
        miniElement = centerElement.nextElementSibling;
        miniElement.classList.remove("mini");
        miniElement.classList.add("center");
        
        //Add mini class to element after next
        miniElement = miniElement.nextElementSibling;
        if(miniElement) { miniElement.classList.add("mini"); }
     }
}
//Function allows to slide to the next card on the left
function slideLeft() {
    // If center element has previous element...
    var centerElement = document.querySelector(".center");
    if (centerElement.previousElementSibling) {
    
        //Change the class of center element to mini
        var centerElement = document.querySelector(".center");
        centerElement.classList.remove("center");
        centerElement.classList.add("mini");

        //Remove the mini class of next element, if it exists 
        var miniElement = centerElement.nextElementSibling;
        if (centerElement.nextElementSibling) {miniElement.classList.remove("mini");}

        //Change class of previous element from mini to center
        miniElement = centerElement.previousElementSibling;
        miniElement.classList.remove("mini");
        miniElement.classList.add("center");

        //Add mini class to element before previous
        miniElement = miniElement.previousElementSibling;
        if(miniElement) { miniElement.classList.add("mini"); }
    
    }

}
//Remember the state of autoslide
var autoEnabled = false;
//Timer interval to enable stoping of auto
var interTimer;

//Function allows to slide every 3s when enabled
function autoSlide() {

    if (!autoEnabled)  {
        interTimer = setInterval(slideIfNotLast,  3000);
        autoEnabled = true;
        var button = document.querySelector(".button");
        button.classList.remove("off");
        button.classList.add("on");
    }
    else {
        clearInterval(interTimer);
        autoEnabled = false;
        var button = document.querySelector(".button");
        button.classList.remove("on");
        button.classList.add("off");
    }
}
//Function checks if we have reached a boundary
function slideIfNotLast() {
    var centerElement = document.querySelector(".center");
    if (centerElement.nextElementSibling) {slideRight();
    }
}