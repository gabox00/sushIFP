//funcion para mostrar u ocultar el acordeon
//el acordeon lo podemos visualizar cuando ponemos la pantalla con un width < 850px
function showOrHideAcordeonMenu(){
    var menu = document.getElementById('menu-list')
    if(menu.classList.value == 'active-acordeon'){
        menu.classList.remove('active-acordeon')
        menu.classList.add("inactive-acordeon");
    }
    else{
        menu.classList.remove('inactive-acordeon')
        menu.classList.add("active-acordeon");
    }
}