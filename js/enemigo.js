opcionesTramoA = ["ESCONDERSE", "HABLAR"];
opcionesTramoB = ["HABLAR", "ATACAR"];


function enemigoAparece (){
    let enemigo = document.createElement("div");
                enemigo.id = "enemigo_div";
                if(inventario.length >= 4){
                enemigo.innerHTML = `<div class="fondo-modal" id="modal-enemigo">
                                    <div class= "modal__">
                                    <img id= "enemigo" src= "imagenes/enemigo.png" alt= "Esto es un placeholder del enemigo">
                                    <div class= "botones_flex">
                                    <button class= "boton" id= "${opcionesTramoB[0].toLowerCase()}">${opcionesTramoB[0]}</button>
                                    <button class= "boton" id= "${opcionesTramoB[1].toLowerCase()}">${opcionesTramoB[1]}</button>
                                    </div>
                                    </div>
                                    </div>
                        `;      }
                else if(inventario.length == 3){
                    enemigo.innerHTML = `<div class="fondo-modal" id="modal-enemigo">
                    <div class= "modal__">
                    <img id= "enemigo" src= "imagenes/enemigo.png" alt= "Esto es un placeholder del enemigo">
                    <div class= "botones_flex">
                    <button class= "boton" id= "${opcionesTramoB[0].toLowerCase()}">${opcionesTramoB[0]}</button>
                    <button class= "boton" id= "${opcionesTramoB[1].toLowerCase()}">${opcionesTramoB[2]}</button>
                    </div>
                    </div>
                    </div>
        `;  }
                    else  {
                        enemigo.innerHTML = `<div class="fondo-modal" id="modal-enemigo">
                        <div class= "modal__">
                        <img id= "enemigo" src= "imagenes/enemigo.png" alt= "Esto es un placeholder del enemigo">
                        <div class= "botones_flex">
                        <button class= "boton" id= "${opcionesTramoB[0].toLowerCase()}">${opcionesTramoB[0]}</button>
                        </div>
                        </div>
                        </div>
            `;  
                    }
                localStorage.setItem("tramoB_sit3", "Situacion 3, tramo B");
                localStorage.getItem("tramoB_sit3"); 
                
                contenedorJuego.appendChild(enemigo);
                document.getElementById("enemigo_div").style = "display: block";

                    $('.boton').css('opacity', '1');
                    
                    opcionCorrer();
                    opcionHablar2();
                    opcionAtacar();
                                    }

function ojos (){
    $.getJSON(URLJSON, function (datos, estado) {
    let ojosDiv = document.createElement("div");
        ojosDiv.id = "ojos_div";
        if(inventario.length >= 4){
            ojosDiv.innerHTML = `<img id= "ojos_img" src= "imagenes/ojos.gif" alt= "Esto es un placeholder de los ojos">
                            <div class= "botones_flex">
                            <button class= "boton" id= "${opcionesTramoA[0].toLowerCase()}">${opcionesTramoA[0]}</button>
                            <button class= "boton" id= "${opcionesTramoA[1].toLowerCase()}">${opcionesTramoA[1]}</button>
                            </div>`;
                        }
        else if (inventario.length == 3){
            ojosDiv.innerHTML = `<img id= "ojos_img" src= "imagenes/ojos.gif" alt= "Esto es un placeholder de los ojos">
                                <div class= "botones_flex">
                                <button class= "boton" id= "${opcionesTramoA[0].toLowerCase()}">${opcionesTramoA[0]}</button>
                                <button class= "boton" id= "${opcionesTramoA[1].toLowerCase()}">${opcionesTramoA[2]}</button>
                                </div>`;
                            }
        else if (inventario.length == 2){
            ojosDiv.innerHTML = `<img id= "ojos_img" src= "imagenes/ojos.gif" alt= "Esto es un placeholder de los ojos">
                                <div class= "botones_flex">
                                <button class= "boton" id= "${opcionesTramoA[1].toLowerCase()}">${opcionesTramoA[0]}</button>
                                </div>`;
                            }

        contenedorJuego.appendChild(ojosDiv);

        document.getElementById("ojos_div").style = "display: block";

        ojos_img.onmouseover = () => {
            if(inventario[1].uso == true){
                console.log(inventario);
                document.getElementById("ojos_img").style = "opacity: 1"; 
                ojos_img.onclick = () => {
                    localStorage.setItem("tramoA_sit3", "Situacion 3, tramo A");
                    localStorage.getItem("tramoA_sit3");    
                    $('.boton').css('opacity', '1');
                }
                opcionHabar();
                opcionEsconderse();
            }
        else{
            document.getElementById("ojos_img").style = "opacity: 0";    
        }
    }
        ojos_img.onmouseout = () =>{
        document.getElementById("ojos_img").style = "opacity: 0";
        }
    })
}
                
