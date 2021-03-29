function pantallaInicio (){
    contenedorJuego.innerHTML = `<div class="fondo-modal" id="modal-menu">
                                <div class= "modal">
                                    <ul>
                                        <li id= "partida_nueva">
                                        PARTIDA NUEVA
                                        </li>
                                        <li id= "cargar_partida">
                                        CARGAR PARTIDA
                                        </li>
                                    </ul>
                                <a href= index.html> <img class= "modal__cerrar" src= "cerrar.png" alt= "icono de cerrar"></a>
                            </div>
                            </div>`

    let partidaNueva = document.getElementById("partida_nueva");
    partidaNueva.onclick = () => {
        estadoInicial();
    }
    
    let cargarPartida = document.getElementById("cargar_partida");
    cargarPartida.onclick = () => {
        guardadoJuego();
    }
}