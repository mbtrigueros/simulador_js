// Funcion para crear los botones que funcionaran como opciones para el usuario.

function crearBoton(opcion){
    let objeto = document.createElement("div");
    objeto.id = opcion.nombre.toLowerCase(); 
    objeto.innerHTML = `<img src= ${opcion.imagen} alt= "Esto es un placeholder del ${opcion.nombre}">
                        <p>${opcion.nombre}</p>`;
    contenedorJuego.appendChild(objeto);
}

// Funcion para crear la segunda situacion, la misma va a depender del objeto elegido en la instancia anterior.

function segundaSituacion (){

    contenedorJuego.innerHTML = `<div>
                                <img id= "img_pasto" src= "imagenes/placeholder_pasto.jpeg"  alt= "Esto es un placeholder del pasto">
                                <p id= "p_pasto">Si tan solo tuvieras algo con que cortar esta maleza...</p>
                                </div>
                                <div id="camino_div">
                                <p id= p_camino> Este camino se ve muy oscuro y peligroso...</p>
                                </div>`;

    if(inventario.find(elemento => elemento.nombre == "Cuchillo")){
        let pasto_img = document.getElementById("img_pasto");
        pasto_img.onclick = () => { 
            if (inventario[1].uso == true){
            contenedorJuego.innerHTML = `<p>Lograste cortar la maleza, ahora toca avanzar. Seria conveniente buscar pistas que te ayuden a recordar, al menos mientras puedes ver!</p>`}
            }
        }
            else if (inventario.find(elemento => elemento.nombre == "Linterna")){ 
                let camino = document.getElementById("camino_div");
                camino.onclick = () => { 
                    contenedorJuego.innerHTML = `<p>No tenes alternativa, vas a tener que seguir por este camino... al menos tenes la linterna. Esta puede ser de gran ayuda a la hora de encontrar pistas, y que no te tomen por sorpresa...</p>`}
                }
    }


// Funcion para crear los elementos del inventario. 

function crearElementos (elemento){
    let inventarioJuego = document.getElementById("inventario_juego");
    let objeto = document.createElement("li");
    objeto.id = elemento.nombre.toLowerCase() + "_li"; 
    objeto.innerHTML = `<img src= ${elemento.imagen} alt= "Esto es un placeholder del ${elemento.nombre}">
                        `;
    inventarioJuego.appendChild(objeto);
}

// Funcion para crear las consecuencias.

function crearConsecuencias (con){
    let consecuencia = document.createElement("p");
    consecuencia.id = "consecuencia_" + con;
    consecuencia.innerHTML = `${con}`;
    contenedorJuego.appendChild(consecuencia);
}
