function modalPista(){
    for ( pista in inventario){
        if (inventario[pista].imagen2 != null){
            inventario[pista].mirar();
            if (inventario[pista].ver == true){
                let modal = document.createElement("div");
                modal.innerHTML = `<div class="fondo-modal" id= ${inventario[pista].nombre.toLowerCase()}"-modal">
                                    <div class= "modal">
                                    <img src= ${inventario[pista].imagen2}>
                                    <p>${inventario[pista].texto}</p>
                                    <img  class= "modal__cerrar" src= "cerrar.png" alt= "icono de cerrar">
                                        </div>
                                        </div>
                                        `;
                contenedorJuego.appendChild(modal);
                $(".modal__cerrar").click(function () { 
                    modal.parentNode.removeChild(modal); 
                });
            }
        }
    }
}

function modalRecuerdo(){
    for ( recuerdo in recuerdos){
                let recuerdoModal = document.createElement("div");
                recuerdoModal.innerHTML = `<div class="fondo-modal" id= ${recuerdos[recuerdo].nombre.toLowerCase()}"-modal">
                                    <div class= "modal">
                                    <p>${recuerdos[recuerdo].texto}</p>
                                    <img  class= "modal__cerrar_2" src= "cerrar.png" alt= "icono de cerrar">
                                        </div>
                                        </div>`;
                contenedorJuego.appendChild(recuerdoModal);
                $(".modal__cerrar_2").click(function () { 
                    recuerdoModal.parentNode.removeChild(recuerdoModal); 
                });
                }
            
        }
