function modalPista(){
    for ( pista in inventario){
        if (inventario[pista].imagen2 != null){
            inventario[pista].mirar();
            if (inventario[pista].ver == true){
                let modal = document.createElement("div");
                modal.id = inventario[pista].nombre.toLowerCase() + "-modal";
                modal.innerHTML = `<div class="fondo-modal" id="modal-menu">
                                    <div class= "modal">
                                    <img src= ${inventario[pista].imagen2}>
                                    <p>${inventario[pista].texto}</p>
                                        </div>
                                        </div>`;
                contenedorJuego.appendChild(modal);
                modal.ondblclick = () =>{
                    inventario[pista].dejarDeMirar();
                    modal.parentNode.removeChild(modal);
                }
            }
        }
    }
}
