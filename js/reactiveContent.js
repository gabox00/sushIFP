//Funcion para cambiar de contenido dinamicamente en el apartado de los sushis, tambien sirve como filtro de sushis
//li es el this que le pasamos a la funcion cuando hace click, con eso podemos colorear el li facilmente
const displayDIV = (li,el) => {

    let ulTypesOfSushies = document.getElementById("sushi").getElementsByTagName("li");
    var typesOfSushies = []

    //especie de util para tener los nombres de los li en minuscula para usarlos como id de HTML
    for (let item of ulTypesOfSushies) {
        if(item.innerHTML.toLowerCase() == "todos") continue;
        typesOfSushies.push(item.innerHTML.toLowerCase())
    }

    //si selecciona todos se colorea el li y se despliegan todos los sushis y termina la funcion
    if(el == "todos"){
        li.style.color = 'crimson'
        typesOfSushies.forEach( typeOfSushi => {
            document.getElementById(typeOfSushi).style.display = ''
            document.getElementById(typeOfSushi+'-li').style.color = '#eee'
        })
        //Hacemos scroll hacia abajo para que se vea que se despliegan todos los sushi
        window.scrollTo( window.scrollX + 500, window.scrollY + 500 );
        return;
    }

    //en caso que no haya seleccionado todos, se va a desplegar unicamente el que se ha seleccionado y los demas se ocultan
    typesOfSushies.forEach( typeOfSushi => {
        if(typeOfSushi == el){
            document.getElementById(el).style.display = ''
            li.style.color = 'crimson'
        }
        else{
            document.getElementById(typeOfSushi).style.display = 'none'
            document.getElementById(typeOfSushi+'-li').style.color = '#eee'
            document.getElementById('todos-li').style.color = '#eee'
        }
    })
}