function enemigoAparece (){
    let enemigo = document.createElement("div");
                enemigo.id = "enemigo_div";
                enemigo.innerHTML = `<div class="fondo-modal" id="modal-menu">
                                    <div class= "modal">
                                    <img id= "enemigo" src= "imagenes/placeholder_enemigo.jpeg" alt= "Esto es un placeholder del enemigo">
                                    </div>
                                    </div>
                        `;      
                contenedorJuego.appendChild(enemigo);
                document.getElementById("enemigo_div").style = "display: block";
                // $("#enemigo_div").animate({ transform: 'translate(50px)'},
                //                             "fast",
                //                             function () {
                //                             console.log("bu");
                //                             });
    
                                    }

function ojos (){
    $.getJSON(URLJSON, function (datos, estado) {
    let ojosDiv = document.createElement("div");
        ojosDiv.id = "ojos_div";
        ojosDiv.innerHTML = `<img id= "ojos_img" src= "imagenes/placeholder_ojos.gif" alt= "Esto es un placeholder de los ojos">`;
        contenedorJuego.appendChild(ojosDiv); 
        ojos_img.onmouseover = () => {
            if(inventario[1].uso == true){
                document.getElementById("ojos_div").style = "opacity: 1"; 
        }
        else{
            document.getElementById("ojos_div").style = "opacity: 0";    
        }
    }
        ojos_img.onmouseout = () =>{
        document.getElementById("ojos_div").style = "opacity: 0";
    }
})
}
                
