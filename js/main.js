//INICIALIZAMOS LA LIBRERIA AOS PARA USAR LOS EFECTOS DEL SCROLL, HAY QUE ESPERAR QUE EL DOM ESTE CARGADO
document.addEventListener("DOMContentLoaded", function(event) {
    showSlidesBox(slideIndexSlideBox);
    showSlides(slideIndex);
    slideImageAutomatic()
    showParallax()
    AOS.init();
});

var slideIndex = 1; //variable global para la logica del lightbox
var slideIndexSlideBox = 1; //variable global para la logica del slidebox
var slideIndexSlideBoxAutomatic = 0; //variable global para la logica del slidebox automatico

//Abrir y cerrar el modal
const openModal = (modal) => document.getElementById(modal).style.display = "block";
const closeModal  = (modal) => document.getElementById(modal).style.display = "";
// Cuando el usuario haga click en cualquier parte fuera del modal, se cierra
window.onclick = (event) => event.target == document.getElementById("myModalReserva") ? closeModal("myModalReserva") : ""





