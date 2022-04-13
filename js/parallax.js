//funcion para instanciar la clase simpleParallax con cada uno de los elementos que lleven la clase thumbnail
function showParallax(){
    var images = document.getElementsByClassName('thumbnail');
    for (let image of images) {
        new simpleParallax(image);
    }
}