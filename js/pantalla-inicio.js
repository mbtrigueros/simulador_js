function pantallaInicio (){
    contenedorJuego.innerHTML = `<div class="fondo-modal" id="modal-menu">
                                <div class= "modal">
                                    <ul>
                                        <li class= "subtitulo" id= "partida_nueva">
                                        PARTIDA NUEVA
                                        </li>
                                        <li class= "subtitulo" id= "cargar_partida">
                                        CARGAR PARTIDA
                                        </li>
                                    </ul>
                                <a href= index.html> <img class= "modal__cerrar" src= "cerrar.png" alt= "icono de cerrar"></a>
                            </div>
                            </div>`

    $("#partida_nueva").click(function () { 
        estadoInicial();
        
    });
    
    
    $("#cargar_partida").click(function () { 
        guardadoJuego();
        
    });
}