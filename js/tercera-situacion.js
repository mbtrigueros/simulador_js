// TRAMO A - LINTERNA

// variables 

const p3 = "Lograste cortar la maleza, ahora toca avanzar. Seria conveniente buscar pistas que te ayuden a recordar, al menos mientras puedes ver!";
const p4 = "No tenes alternativa, vas a tener que seguir por este camino... al menos tenes la linterna. Esta puede ser de gran ayuda a la hora de encontrar pistas, y que no te tomen por sorpresa...";

const pistasTramoA = [];
const pistasTramoB = [];

// Pistas

$.getJSON(URLJSON, function (datos, estado) {

pistasTramoA.push (new Herramienta(datos[3]));
pistasTramoA.push (new Herramienta(datos[6]));
pistasTramoA.push (new Herramienta(datos[7]));

console.log(pistasTramoA);


pistasTramoB.push (new Herramienta(datos[3]));
pistasTramoB.push (new Herramienta(datos[4]));
pistasTramoB.push (new Herramienta(datos[5]));

console.log(pistasTramoB);
    
})

function terceraSituacionTramoA (){
    
    localStorage.setItem("tramoA", "Situacion 2, tramo A");
    localStorage.getItem("tramoA");

document.getElementById("contenedor_juego").style = `background-image: url(imagenes/placeholder_fondo3.jpeg);`
contenedorJuego.innerHTML = `<p id = "p_4"></p>`

for (const pista of pistasTramoA){
    crearBoton(pista);
}

typewrite("p_4", p4, 50);
oscurecerFondo();


}


function terceraSituacionTramoB (){

    localStorage.setItem("tramoB", "Situacion 2, tramo B");
    localStorage.getItem("tramoB");

    document.getElementById("contenedor_juego").style = `background-image: url(imagenes/placeholder_fondo3.jpeg);`
    contenedorJuego.innerHTML = `<p id = "p_3"></p>`
    
    for (const pista of pistasTramoB){
        crearBoton(pista); 
    }

    typewrite("p_3", p3, 50);
    oscurecerFondo();
    
    
    }