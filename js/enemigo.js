opcionesTramoA = ["HUIR", "ESCONDERSE", "HABLAR"];
opcionesTramoB = ["HUIR", "HABLAR", "ATACAR"];


function enemigoAparece (){
    let enemigo = document.createElement("div");
                enemigo.id = "enemigo_div";
                if(inventario.length >= 4){
                enemigo.innerHTML = `<div class="fondo-modal" id="modal-enemigo">
                                    <div class= "modal">
                                    <img id= "enemigo" src= "imagenes/placeholder_enemigo.jpeg" alt= "Esto es un placeholder del enemigo">
                                    <div class= "botones_flex">
                                    <button class= "boton">${opcionesTramoB[0]}</button>
                                    <button class= "boton">${opcionesTramoB[1]}</button>
                                    <button class= "boton">${opcionesTramoB[2]}</button>
                                    </div>
                                    </div>
                                    </div>
                        `;      }
                else if(inventario.length == 3){
                    enemigo.innerHTML = `<div class="fondo-modal" id="modal-enemigo">
                    <div class= "modal">
                    <img id= "enemigo" src= "imagenes/placeholder_enemigo.jpeg" alt= "Esto es un placeholder del enemigo">
                    <div class= "botones_flex">
                    <button class= "boton">${opcionesTramoB[0]}</button>
                    <button class= "boton">${opcionesTramoB[2]}</button>
                    </div>
                    </div>
                    </div>
        `;  }
                    else  {
                        enemigo.innerHTML = `<div class="fondo-modal" id="modal-enemigo">
                        <div class= "modal">
                        <img id= "enemigo" src= "imagenes/placeholder_enemigo.jpeg" alt= "Esto es un placeholder del enemigo">
                        <div class= "botones_flex">
                        <button class= "boton">${opcionesTramoB[0]}</button>
                        </div>
                        </div>
                        </div>
            `;  
                    }
                contenedorJuego.appendChild(enemigo);
                localStorage.setItem("tramoB_sit3", "Situacion 3, tramo B");
                localStorage.getItem("tramoB_sit3");    
                
                document.getElementById("enemigo_div").style = "display: block";

                    $('.boton').css('opacity', '1');
    
                                    }

function ojos (){
    $.getJSON(URLJSON, function (datos, estado) {
    let ojosDiv = document.createElement("div");
        ojosDiv.id = "ojos_div";
        if(inventario.length >= 4){
            ojosDiv.innerHTML = `<img id= "ojos_img" src= "imagenes/placeholder_ojos.gif" alt= "Esto es un placeholder de los ojos">
                            <div class= "botones_flex">
                            <button class= "boton">${opcionesTramoA[0]}</button>
                            <button class= "boton">${opcionesTramoA[1]}</button>
                            <button class= "boton">${opcionesTramoA[2]}</button>
                            </div>`;
                        }
        else if (inventario.length == 3){
            ojosDiv.innerHTML = `<img id= "ojos_img" src= "imagenes/placeholder_ojos.gif" alt= "Esto es un placeholder de los ojos">
                                <div class= "botones_flex">
                                <button class= "boton">${opcionesTramoA[0]}</button>
                                <button class= "boton">${opcionesTramoA[2]}</button>
                                </div>`;
                            }
        else if (inventario.length == 2){
            ojosDiv.innerHTML = `<img id= "ojos_img" src= "imagenes/placeholder_ojos.gif" alt= "Esto es un placeholder de los ojos">
                                <div class= "botones_flex">
                                <button class= "boton">${opcionesTramoA[0]}</button>
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
                
