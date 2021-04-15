// Pistas

// declaro variables para los arrays de pistas. 

const pistasTramoA = [];
const pistasTramoB = [];

// agrego a los mismos las pistas desde una llamada asincronica con AJAX y JSON

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

// genero las pistas  

for (const pista of pistasTramoA){
    crearBoton(pista);
}

// asocio a las pistas un evento onclick para agregarlas al inventario y eliminarlas del espacio

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
    camisa_btn.parentNode.removeChild(camisa_btn);
    let camisa_inventario = document.getElementById("camisa_li");
    camisa_inventario.onclick = () => {
        modalPista();
        }

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
    simbolo_btn.parentNode.removeChild(simbolo_btn);
    let simbolo_inventario = document.getElementById("simbolo_li");
    simbolo_inventario.onclick = () => {
        modalPista();
        }
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
    esqueleto_btn.parentNode.removeChild(esqueleto_btn);
    let esqueleto_inventario = document.getElementById("esqueleto_li");
    esqueleto_inventario.onclick = () => {
        modalPista();
        }
    }

})

modalPista();
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
        ;})
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
        foto_btn.parentNode.removeChild(foto_btn);
        let foto_inventario = document.getElementById("foto_li");
        foto_inventario.onclick = () => {
        modalPista();
        }

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
        carta_btn.parentNode.removeChild(carta_btn);
        let carta_inventario = document.getElementById("carta_li");
        carta_inventario.onclick = () => {
            modalPista();
            }

    }

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
        camisa_btn.parentNode.removeChild(camisa_btn);
     let camisa_inventario = document.getElementById("camisa_li");
     camisa_inventario.onclick = () => {
        modalPista();
        }
    }

    })
    


}

