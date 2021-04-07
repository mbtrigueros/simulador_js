// Funcion para crear la segunda situacion, la misma va a depender del objeto elegido en la instancia anterior.

// variables parrafos

const p3 = "Lograste cortar la maleza, ahora toca avanzar. Seria conveniente buscar pistas que te ayuden a recordar, al menos mientras puedes ver!";
const p4 = "No tenes alternativa, vas a tener que seguir por este camino... al menos tenes la linterna. Esta puede ser de gran ayuda a la hora de encontrar pistas, y que no te tomen por sorpresa...";

function segundaSituacion (){
    contenedorJuego.innerHTML = `<div>
                                <img id= "img_pasto" src= "imagenes/placeholder_pasto.jpeg"  alt= "Esto es un placeholder del pasto">
                                <p id= "p_pasto">Si tan solo tuvieras algo con que cortar esta maleza...</p>
                                </div>
                                <div id="camino_div">
                                <p id= "p_camino"> Este camino se ve muy oscuro y peligroso...</p>
                                </div>`;

    if(inventario.find(elemento => elemento.nombre == "Cuchillo")){
        let pasto_img = document.getElementById("img_pasto");
        pasto_img.onclick = () => { 
            if (inventario[1].uso == true){
                
                localStorage.setItem("segunda_cuc", "Situacion 2, tramo cuchillo");
                oscurecerFondo();
                document.getElementById("contenedor_juego").style = `background-image: url(imagenes/placeholder_fondo2.jpeg);`
                contenedorJuego.innerHTML = `<p id = "p_3"></p>`
                typewrite("p_3", p3, 50);        
                }
            }
        }

            else { 
                let camino_d = document.getElementById("camino_div");
                camino_d.onclick = () => { 
                    if (inventario[1].uso == true){
                        
                        localStorage.setItem("segunda_lin", "Situacion 2, tramo linterna");
                        oscurecerFondo();
                        document.getElementById("contenedor_juego").style = `background-image: url(imagenes/placeholder_fondo3.jpeg);`
                        contenedorJuego.innerHTML = `<p id = "p_4"></p>`
                        typewrite("p_4", p4, 50);
                        }
                    }
                }
            
            }