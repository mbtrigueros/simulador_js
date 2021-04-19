// Pistas

// declaro variables para los arrays de pistas. 

const pistasTramoA = [];
const pistasTramoB = [];


// agrego a los mismos las pistas desde una llamada asincronica con AJAX y JSON

$.getJSON(URLJSON, function (datos, estado) {

pistasTramoA.push (new Herramienta(datos[3]));
pistasTramoA.push (new Herramienta(datos[6]));
pistasTramoA.push (new Herramienta(datos[7]));
pistasTramoA.push (new Herramienta(datos[8]));

console.log(pistasTramoA);

pistasTramoB.push (new Herramienta(datos[3]));
pistasTramoB.push (new Herramienta(datos[4]));
pistasTramoB.push (new Herramienta(datos[5]));
pistasTramoB.push (new Herramienta(datos[9]));

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
        oscurecerFondo();})
    .start();

// genero las pistas  

for (const pista of pistasTramoA){
    crearBoton(pista);
}

// asocio a las pistas un evento onclick para agregarlas al inventario y eliminarlas del espacio
$.getJSON(URLJSON, function (datos, estado) {
    $.getJSON(URLJSON_2, function (recdatos, estado) {

let camisa_btn = document.getElementById("camisa");
camisa_btn.onclick = () => {
    if(inventario.length == 2){
        inventario.push( new Herramienta (datos[3])); 
        crearElementos(inventario[2]);
        recuerdos.push(new Recuerdo (recdatos[0]));
        crearRecuerdos(recuerdos[0]);
    }
    else if(inventario.length == 3){
        inventario.push( new Herramienta (datos[3]));
        crearElementos(inventario[3]);
        recuerdos.push(new Recuerdo (recdatos[0]));
        crearRecuerdos(recuerdos[1]);
    }
    else {
        inventario.push( new Herramienta (datos[3]));
        crearElementos(inventario[4]);
        recuerdos.push(new Recuerdo (recdatos[0]));
        crearRecuerdos(recuerdos[2]);
    }
    console.log(inventario);
    camisa_btn.parentNode.removeChild(camisa_btn);
    let camisa_inventario = document.getElementById("camisa_li");
    camisa_inventario.onclick = () => {
        modalPista();
        }
        let recuerdo1 = document.getElementById("recuerdo1_li");
        recuerdo1.onclick = () => {
            modalRecuerdo();
        }

}


let simbolo_btn = document.getElementById("simbolo");
simbolo_btn.onclick = () => {
    if(inventario.length == 2){
        inventario.push( new Herramienta (datos[6]));
        crearElementos(inventario[2]);
        recuerdos.push(new Recuerdo (recdatos[1]));
        crearRecuerdos(recuerdos[0]);
    }
    else if(inventario.length == 3){
        inventario.push( new Herramienta (datos[6]));
        crearElementos(inventario[3]);
        recuerdos.push(new Recuerdo (recdatos[1]));
        crearRecuerdos(recuerdos[1]);
    }
    else{
        inventario.push( new Herramienta (datos[6]));
        crearElementos(inventario[4]);
        recuerdos.push(new Recuerdo (recdatos[1]));
        crearRecuerdos(recuerdos[2]);
    }
    console.log(inventario);
    simbolo_btn.parentNode.removeChild(simbolo_btn);
    let simbolo_inventario = document.getElementById("simbolo_li");
    simbolo_inventario.onclick = () => {
        modalPista();
        }
        let recuerdo2 = document.getElementById("recuerdo2_li");
        recuerdo2.onclick = () => {
            modalRecuerdo();
        }
    }

let esqueleto_btn = document.getElementById("esqueleto");
esqueleto_btn.onclick = () => {
    if(inventario.length == 2){
        inventario.push( new Herramienta (datos[7]));
        crearElementos(inventario[2]);
        recuerdos.push(new Recuerdo (recdatos[2]));
        crearRecuerdos(recuerdos[0]);
    }
    else if(inventario.length == 3){
        inventario.push( new Herramienta (datos[7]));
        crearElementos(inventario[3]);
        recuerdos.push(new Recuerdo (recdatos[2]));
        crearRecuerdos(recuerdos[1]);
    }
    else {
        inventario.push( new Herramienta (datos[7]));
        crearElementos(inventario[4]);
        recuerdos.push(new Recuerdo (recdatos[2]));
        crearRecuerdos(recuerdos[2]);
    }
    console.log(inventario);
    esqueleto_btn.parentNode.removeChild(esqueleto_btn);
    let esqueleto_inventario = document.getElementById("esqueleto_li");
    esqueleto_inventario.onclick = () => {
        modalPista();
        }
        let recuerdo3 = document.getElementById("recuerdo3_li");
        recuerdo3.onclick = () => {
            modalRecuerdo();
        }
    }

    let palo_btn = document.getElementById("palo");
    let mensaje = document.createElement("p");
    mensaje.id = "mensaje_palo";
    mensaje.innerText = `Para que querrias un palo ahora...?`;
    palo_btn.appendChild(mensaje);
    palo_btn.onclick = () => {
        if(inventario.length == 5){
        inventario.push( new Herramienta (datos[8]));
        crearElementos(inventario[5]);
        palo_btn.parentNode.removeChild(palo_btn); }
        else{
            mensaje.style = `visibility: visible`;
            palo_btn.onmouseout = () => {
                mensaje.style = `visibility: hidden`;
            }
        }
    console.log(inventario);
    let palo_inventario = document.getElementById("palo_li");
    palo_inventario.onclick = () => {
        modalPista();
            } 
        }

    })

})

ojos();

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
    
    setTimeout(enemigoAparece, 40000);

    for (const pista of pistasTramoB){
        crearBoton(pista); 
    }

    $.getJSON(URLJSON, function (datos, estado) {
    $.getJSON(URLJSON_2, function (recdatos, estado) {

    let foto_btn = document.getElementById("foto");
    foto_btn.onclick = () => {
        if(inventario.length == 2){
            inventario.push( new Herramienta (datos[4]));
            crearElementos(inventario[2]);
            recuerdos.push(new Recuerdo (recdatos[3]));
            crearRecuerdos(recuerdos[0]);
        }
        else if(inventario.length == 3){
            inventario.push( new Herramienta (datos[4]));
            crearElementos(inventario[3]);
            recuerdos.push(new Recuerdo (recdatos[3]));
            crearRecuerdos(recuerdos[1]);
        }
        else {
            inventario.push( new Herramienta (datos[4]));
            crearElementos(inventario[4]);
            recuerdos.push(new Recuerdo (recdatos[3]));
            crearRecuerdos(recuerdos[2]);
        }
        console.log(inventario);
        foto_btn.parentNode.removeChild(foto_btn);
        let foto_inventario = document.getElementById("foto_li");
        foto_inventario.onclick = () => {
        modalPista();
        }
        let recuerdo4 = document.getElementById("recuerdo4_li");
        recuerdo4.onclick = () => {
            modalRecuerdo();
        }


    }

    

    let carta_btn = document.getElementById("carta");
    carta_btn.onclick = () => {
        if(inventario.length == 2){
            inventario.push( new Herramienta (datos[5]));
            crearElementos(inventario[2]);
            recuerdos.push(new Recuerdo (recdatos[4]));
            crearRecuerdos(recuerdos[0]);
        }
        else if(inventario.length == 3){
            inventario.push( new Herramienta (datos[5]));
            crearElementos(inventario[3]);
            recuerdos.push(new Recuerdo (recdatos[4]));
            crearRecuerdos(recuerdos[1]);
        }
        else{
            inventario.push( new Herramienta (datos[5]));
            crearElementos(inventario[4]);
            recuerdos.push(new Recuerdo (recdatos[4]));
            crearRecuerdos(recuerdos[2]);
        }

        console.log(inventario);
        carta_btn.parentNode.removeChild(carta_btn);
        let carta_inventario = document.getElementById("carta_li");
        carta_inventario.onclick = () => {
            modalPista();
            }
            let recuerdo5 = document.getElementById("recuerdo5_li");
            recuerdo5.onclick = () => {
                modalRecuerdo();
            }

    }

    let camisa_btn = document.getElementById("camisa");
    camisa_btn.onclick = () => {
        if(inventario.length == 2){
            inventario.push( new Herramienta (datos[3]));
            crearElementos(inventario[2]);
            recuerdos.push(new Recuerdo (recdatos[5]));
            crearRecuerdos(recuerdos[0]);
        }
        else if(inventario.length == 3){
            inventario.push( new Herramienta (datos[3]));
            crearElementos(inventario[3]);
            recuerdos.push(new Recuerdo (recdatos[5]));
            crearRecuerdos(recuerdos[1]);
        }
        else {
            inventario.push( new Herramienta (datos[3]));
            crearElementos(inventario[4]);
            recuerdos.push(new Recuerdo (recdatos[5]));
            crearRecuerdos(recuerdos[2]);
        }
        console.log(inventario);
        camisa_btn.parentNode.removeChild(camisa_btn);
        let camisa_inventario = document.getElementById("camisa_li");
        camisa_inventario.onclick = () => {
            modalPista();
            }
        let recuerdo6 = document.getElementById("recuerdo6_li");
        recuerdo6.onclick = () => {
            modalRecuerdo();
            }
    }

    let papel_btn = document.getElementById("papel");
    let mensaje = document.createElement("p");
    mensaje.id = "mensaje_papel";
    mensaje.innerText = `Este papel no pareciera tener mayor importancia... tal vez tenga mas sentido tomarlo luego...`;
    papel_btn.appendChild(mensaje);
    papel_btn.onclick = () => {
        if(inventario.length == 5){
            inventario.push( new Herramienta (datos[9]));
            crearElementos(inventario[5]);
            papel_btn.parentNode.removeChild(papel_btn);
        }
        else {
            mensaje.style = `visibility: visible`;
            papel_btn.onmouseout = () => {
                mensaje.style = `visibility: hidden`;
            }
        }
        console.log(inventario);
        let papel_inventario = document.getElementById("papel_li");
        papel_inventario.onclick = () => {
            modalPista();
            }
        }

    })
})

}

