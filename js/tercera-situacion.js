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

$.getJSON(URLJSON, function (datos, estado) {

let camisa_btn = document.getElementById("camisa");
camisa_btn.onclick = () => {
    if(inventario.length == 2){
    inventario.push( new Herramienta (datos[3]));
        crearElementos(inventario[2]);
    }
    else if(inventario.length == 3){
        inventario.push( new Herramienta (datos[3]));
        crearElementos(inventario[3]);
    }
    else {
        inventario.push( new Herramienta (datos[3]));
        crearElementos(inventario[4]);
    }
    console.log(inventario);

}

let simbolo_btn = document.getElementById("simbolo");
simbolo_btn.onclick = () => {
    if(inventario.length == 2){
        inventario.push( new Herramienta (datos[6]));
        crearElementos(inventario[2]);
    }
    else if(inventario.length == 3){
        inventario.push( new Herramienta (datos[6]));
        crearElementos(inventario[3]);
    }
    else {
        inventario.push( new Herramienta (datos[6]));
        crearElementos(inventario[4]);
    }
    console.log(inventario);
    }

let esqueleto_btn = document.getElementById("esqueleto");
esqueleto_btn.onclick = () => {
    if(inventario.length == 2){
        inventario.push( new Herramienta (datos[7]));
        crearElementos(inventario[2]);
    }
    else if(inventario.length == 3){
        inventario.push( new Herramienta (datos[7]));
        crearElementos(inventario[3]);
    }
    else {
        inventario.push( new Herramienta (datos[7]));
        crearElementos(inventario[4]);
    }
    console.log(inventario);
    }

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
        oscurecerFondo(); 
        agregarElementoAlInventario();})
    .start();
    


    for (const pista of pistasTramoB){
        crearBoton(pista); 
    }

    $.getJSON(URLJSON, function (datos, estado) {

    let foto_btn = document.getElementById("foto");
    foto_btn.onclick = () => {
        if(inventario.length == 2){
            inventario.push( new Herramienta (datos[4]));
            crearElementos(inventario[2]);
        }
        else if(inventario.length == 3){
            inventario.push( new Herramienta (datos[4]));
            crearElementos(inventario[3]);
        }
        else {
            inventario.push( new Herramienta (datos[4]));
            crearElementos(inventario[4]);
        }
        console.log(inventario);

    }

    let carta_btn = document.getElementById("carta");
    carta_btn.onclick = () => {
        if(inventario.length == 2){
            inventario.push( new Herramienta (datos[5]));
            crearElementos(inventario[2]);
        }
        else if(inventario.length == 3){
            inventario.push( new Herramienta (datos[5]));
            crearElementos(inventario[3]);
        }
        else {
            inventario.push( new Herramienta (datos[5]));
            crearElementos(inventario[4]);
        }
        console.log(inventario);

    }

    let camisa_btn = document.getElementById("camisa");
    camisa_btn.onclick = () => {
        inventario.push( new Herramienta (datos[3]));
        if(inventario.length == 2){
            inventario.push( new Herramienta (datos[3]));
            crearElementos(inventario[2]);
        }
        else if(inventario.length == 3){
            inventario.push( new Herramienta (datos[3]));
            crearElementos(inventario[3]);
        }
        else {
            inventario.push( new Herramienta (datos[3]));
            crearElementos(inventario[4]);
        }
        console.log(inventario);

        }

    })
    
    }

