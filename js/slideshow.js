// controles para adelantar o ir para atras en las imagenes del slideshow
function plusSlidesBox(n) {
    showSlidesBox(slideIndexSlideBox += n);
}

// control de las imagenes en miniatura del slideshow
function currentSlideBox(n) {
    showSlidesBox(slideIndexSlideBox = n);
}

//funcion para controlar la apertura del SLIDESHOW
function showSlidesBox(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesShow");
    let dots = document.getElementsByClassName("dotSlideShow");
    if (n > slides.length) {slideIndexSlideBox = 1}
    if (n < 1) {slideIndexSlideBox = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if(slides[slideIndexSlideBox-1]){
        slides[slideIndexSlideBox-1].style.display = "block";
        dots[slideIndexSlideBox-1].className += " active";
    }
}

//funcion para controlar el cambio de imagen automatico del img hero slidebox
function slideImageAutomatic(){
    let slides = document.getElementsByClassName("mySlidesShow");
    setInterval(function() {
        slideIndexSlideBoxAutomatic++;
        if( slideIndexSlideBoxAutomatic == slides.length ) {
            slideIndexSlideBoxAutomatic = 0;
            slideIndexSlideBox--;
        }
        plusSlidesBox( slideIndexSlideBoxAutomatic );
    }, 5000);
}