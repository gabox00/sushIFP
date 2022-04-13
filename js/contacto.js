//Funcion para rellenar el modal, lo que hacemos es incrustar html en el modal con id modal-content-reserva con la data
//que nos llega de sendReserva()
const writeModal = (data) => {
    var modalContent = document.getElementById('modal-content-reserva')
    modalContent.innerHTML = `
        <span class="close-reserva" onclick="closeModal('myModalReserva')">&times;</span>
        <div>
            <h2>Se ha realizado correctamente la reserva, estos son los datos:</h2><br>
            <div id="ok-img"><img src="./assets/img/ok.png" alt="ok"></div>
            <span class="modal-data">Nombre y apellidos: ${data.nombreApellidos}</span><br>
            <span class="modal-data">Numero de personas: ${data.numeroPersonas}</span><br>
            <span class="modal-data">Fecha de la reserva: ${data.fechaReserva}</span><br>
            <span class="modal-data">Email: ${data.email}</span>
        </div>
    `
}

//Funcion de envio de server, se llama cuando se hace click en el boton enviar
const sendReserva = () => {
    var nombreApellidos = document.getElementById('nombreApellidos').value;
    var numeroPersonas = document.getElementById('numeroPersonas').value;
    var fechaReserva = document.getElementById('fechaReserva').value;
    var email = document.getElementById('email').value;
    var data = {
        nombreApellidos,
        numeroPersonas,
        fechaReserva,
        email
    }

    //Si alguno de los campos estan vacios, no se abrira el modal
    if(!nombreApellidos || !numeroPersonas || !fechaReserva || !email) return;

    //ABRIMOS EL MODAL PARA MOSTRART LA INFO ENVIADA
    openModal('myModalReserva')
    //ENVIAMOS LA DATA Y RELLENAMOS EL MODAL
    writeModal(data)
}
