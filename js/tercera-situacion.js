
// Tramo Linterna

function terceraSituacionTramoA (){
    
    
    document.getElementById("contenedor_juego").style = `background-image: url(imagenes/placeholder_fondo3.jpeg);`
    contenedorJuego.innerHTML = `<div id = "txt_tramoA"></div>`;

    const texto_tramoA = new Typewriter('#txt_tramoA', {
        loop : false,
    });

    texto_tramoA.typeString('No tenes alternativa, vas a tener que seguir por este camino... al menos tenes la linterna. Esta puede ser de gran ayuda a la hora de encontrar pistas, y que no te tomen por sorpresa...')
    .pauseFor(5000)
    .callFunction(() => {
        oscurecerFondo();})
    .start();

    setTimeout(ojos, 6000);

// genero las pistas  

for (const pista of pistasTramoA){
    crearBoton(pista);
}

$.getJSON(URLJSON, function (datos, estado) {
    $.getJSON(URLJSON_2, function (recdatos, estado) {

// asocio a las pistas un evento onclick para agregarlas al inventario y eliminarlas del espacio

    crearCamisa();
    crearSimbolo();
    crearEsqueleto();
    crearPalo();

})
})

} 

// Tramo Cuchillo

function terceraSituacionTramoB (){

    document.getElementById("contenedor_juego").style = `background-image: url(imagenes/placeholder_fondo3.jpeg);`
    contenedorJuego.innerHTML = `<div id = "txt_tramoB"></div>`;

    const texto_tramoB = new Typewriter('#txt_tramoB', {
        loop : false,
    });

    texto_tramoB.typeString('Lograste cortar la maleza, ahora toca avanzar. Seria conveniente buscar pistas que te ayuden a recordar, al menos mientras puedes ver!')
    .pauseFor(5000)
    .callFunction(() => {
        oscurecerFondo();})
    .start();
    
    setTimeout(enemigoAparece, 5000);

    for (const pista of pistasTramoB){
        crearBoton(pista); 
    }

    $.getJSON(URLJSON, function (datos, estado) {
    $.getJSON(URLJSON_2, function (recdatos, estado) {

        crearFoto();
        crearCarta();
        crearCamisa2();
        crearPapel();

    })
})

}