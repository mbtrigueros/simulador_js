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

// Tramo Linterna
const p3 = "Lograste cortar la maleza, ahora toca avanzar. Seria conveniente buscar pistas que te ayuden a recordar, al menos mientras puedes ver!";
const p4 = "No tenes alternativa, vas a tener que seguir por este camino... al menos tenes la linterna. Esta puede ser de gran ayuda a la hora de encontrar pistas, y que no te tomen por sorpresa...";
function terceraSituacionTramoA (){
    
    document.getElementById("contenedor_juego").style = `background-image: url(imagenes/placeholder_fondo3.jpeg);`
    contenedorJuego.innerHTML = `<div id = "txt_tramoA"></div>`;

    const texto_tramoA = new Typewriter('#txt_tramoA', {
        loop : false,
    });

    texto_tramoA.typeString('No tenes alternativa, vas a tener que seguir por este camino... al menos tenes la linterna. Esta puede ser de gran ayuda a la hora de encontrar pistas, y que no te tomen por sorpresa...')
    .pauseFor(5000)
    .callFunction(() => {
        oscurecerFondo(); })
    .start();
    
for (const pista of pistasTramoA){
    crearBoton(pista);
}


}

// Tramo Cuchillo

function terceraSituacionTramoB (){

    document.getElementById("contenedor_juego").style = `background-image: url(imagenes/placeholder_fondo3.jpeg);`
    contenedorJuego.innerHTML = `<div id = "txt_tramoB"></div>`;

    const texto_tramoA = new Typewriter('#txt_tramoB', {
        loop : false,
    });

    texto_tramoA.typeString('No tenes alternativa, vas a tener que seguir por este camino... al menos tenes la linterna. Esta puede ser de gran ayuda a la hora de encontrar pistas, y que no te tomen por sorpresa...')
    .pauseFor(5000)
    .callFunction(() => {
        oscurecerFondo(); })
    .start();
    


    for (const pista of pistasTramoB){
        crearBoton(pista); 
    }

    
    
    }