function slideRight()  {
    // si center n'a pas de next ele fais rien
    var centerElement = document.querySelector(".center");
    if (centerElement.nextElementSibling) {
    //change la classe de ele2 en mini : 
        //attrape ele central dans dom, enelve classe center, donne classe mini
        centerElement = document.querySelector(".center");
        centerElement.classList.remove("center");
        centerElement.classList.add("mini");

    //supprime la classe de ele précedent 
        var miniElement = centerElement.previousElementSibling;
       if (centerElement.previousElementSibling) {miniElement.classList.remove("mini");}
      

    //change la classe de l'ele suivant
        miniElement = centerElement.nextElementSibling;
        miniElement.classList.remove("mini");
        miniElement.classList.add("center");
    //change la classe de l'ele d(encore après
        miniElement = miniElement.nextElementSibling;
        miniElement.classList.add("mini");
     }

    //change la classe de ele4 en mini
    //enlever la classe des elements à ne pas afficher
}

function slideLeft() {
    // si center n'a pas de next ele fais rien
    var centerElement = document.querySelector(".center");
    if (centerElement.previousElementSibling) {
    //change la classe de ele2 en mini : 
        //attrape ele central dans dom, enelve classe center, donne classe mini
        var centerElement = document.querySelector(".center");
        centerElement.classList.remove("center");
        centerElement.classList.add("mini");

    //supprime la classe de ele précedent 
        var miniElement = centerElement.nextElementSibling;
        if (centerElement.nextElementSibling) {miniElement.classList.remove("mini");}

    //change la classe de l'ele suivant
        miniElement = centerElement.previousElementSibling;
        miniElement.classList.remove("mini");
        miniElement.classList.add("center");
    //change la classe de l'ele d(encore après
        miniElement = miniElement.previousElementSibling;
        miniElement.classList.add("mini");
        

    //change la classe de ele4 en mini
    //enlever la classe des elements à ne pas afficher
    }

}
