
// Funcion para crear los botones que funcionaran como opciones para el usuario.

function crearBoton(opcion){
    let objeto = document.createElement("div");
    objeto.id = opcion.nombre.toLowerCase(); 
    objeto.innerHTML = `<img src= ${opcion.imagen} alt= "Imagen correspondiente a ${opcion.nombre}">`;
    contenedorJuego.appendChild(objeto);
}


// Funcion para crear las opciones

function crearOpcion(opcion){
    let objeto = document.createElement("button");
    objeto.className = "boton";
    objeto.innerHTML = opcion;
    contenedorJuego.appendChild(objeto);
}
        
// Funcion para crear los elementos del inventario. 

function crearElementos (elemento){
    let inventarioJuego = document.getElementById("inventario_juego");
    let objeto = document.createElement("li");
    objeto.id = elemento.nombre.toLowerCase() + "_li"; 
    objeto.innerHTML = `<img src= ${elemento.imagenInventario} alt= "Imagen correspondiente a ${elemento.nombre}">
                        `;
    inventarioJuego.appendChild(objeto);

    let modal = document.createElement("div");
    modal.id = elemento.nombre.toLowerCase() + "-modal";
    modal.innerHTML = `<div class="fondo-modal" id= ${elemento.nombre.toLowerCase()}"-modal">
                        <div class= "modal__">
                        <img src= ${elemento.imagen2}>
                        <p>${elemento.texto}</p>
                        <img  class= "modal__cerrar" src= "cerrar.png" alt= "icono de cerrar">
                            </div>
                            </div>
                            `;
    modal.style = "display: none";
    contenedorJuego.appendChild(modal);
    $(".modal__cerrar").click(function () { 
        modal.style = "display: none";
    });

}

// Funcion para crear los recuerdos del personaje. 

function crearRecuerdos (recuerdo){
    let recuerdosJuego = document.getElementById("recuerdos_juego");
    let objeto = document.createElement("li");
    objeto.className = "recuerdos";
    objeto.id = recuerdo.nombre.toLowerCase() + "_li"; 
    objeto.innerHTML = `<img src= ${recuerdo.imagen} alt= "Imagen correspondiente a ${recuerdo.nombre}">
                        `;
    recuerdosJuego.appendChild(objeto);

    let recuerdoModal = document.createElement("div");
    recuerdoModal.id = recuerdo.nombre.toLowerCase() + "-modal";
    recuerdoModal.innerHTML = `<div class="fondo-modal" id= ${recuerdo.nombre.toLowerCase()}"-modal">
                        <div class= "modal__">
                        <p>${recuerdo.texto}</p>
                        <img  class= "modal__cerrar_2" src= "cerrar.png" alt= "icono de cerrar">
                            </div>
                            </div>`;

    recuerdoModal.style = "display:none";
    contenedorJuego.appendChild(recuerdoModal);
    $(".modal__cerrar_2").click(function () { 
        recuerdoModal.style = "display: none";
    });
}

// Funcion para oscurecer paulatinamente el fondo y visceversa

function oscurecerFondo (){
        onmousemove = e => {
        document.getElementById("contenedor_juego").style.animation = "fondo 5s ease-in forwards";
    }
}

function oscurecerFondo (){
    onmousemove = e => {
    document.getElementById("contenedor_juego").style.animation = "fondo_2 2s ease-in forwards";
}
}


// Funciones tercera situacion 


function crearCamisa(){


    let camisa_btn = document.getElementById("camisa");
    camisa_btn.onclick = () => {

    agregarCamisaInventario();

    localStorage.setItem("camisa", "Camisa");
    localStorage.getItem("camisa");      


    console.log(inventario);
    camisa_btn.parentNode.removeChild(camisa_btn);

    }

}

function crearSimbolo(){


    let simbolo_btn = document.getElementById("simbolo");
    simbolo_btn.onclick = () => {

    agregarSimboloInventario();

    localStorage.setItem("simbolo", "Simbolo");
    localStorage.getItem("simbolo");


    simbolo_btn.parentNode.removeChild(simbolo_btn);

    }

}

function crearEsqueleto(){


    let esqueleto_btn = document.getElementById("esqueleto");
    esqueleto_btn.onclick = () => {
    
    agregarEsqueletoInventario();

    localStorage.setItem("esqueleto", "Esqueleto");
    localStorage.getItem("esqueleto");

    
    esqueleto_btn.parentNode.removeChild(esqueleto_btn);

    }


}

function crearPalo(){


    let palo_btn = document.getElementById("palo");
    
    let mensaje = document.createElement("p");
    mensaje.id = "mensaje_palo";
    mensaje.innerText = `Para que querrias un palo ahora...?`;
    palo_btn.appendChild(mensaje);

    palo_btn.onclick = () => {

    agregarPaloInventario();

    console.log(inventario);

    localStorage.setItem("palo", "Palo");
    localStorage.getItem("palo");



        }


}


function crearPapel(){

    let papel_btn = document.getElementById("papel");
    let mensaje = document.createElement("p");
    mensaje.id = "mensaje_papel";
    mensaje.innerText = `Este papel no pareciera tener mayor importancia... tal vez tenga mas sentido tomarlo luego...`;
    papel_btn.appendChild(mensaje);

    papel_btn.onclick = () => {

        agregarPapelInventario();

        localStorage.setItem("papel", "Papel");
        localStorage.getItem("papel");

        console.log(inventario);
        
    }

}

function crearCamisa2 (){


    let camisa_btn = document.getElementById("camisa");
    camisa_btn.onclick = () => {

        agregarCamisa2Inventario();

        console.log(inventario);

        localStorage.setItem("camisa_2", "Camisa, tramo B");
        localStorage.getItem("camisa_2");

        camisa_btn.parentNode.removeChild(camisa_btn);
        
    }


}

function crearCarta (){


    let carta_btn = document.getElementById("carta");
    carta_btn.onclick = () => {

        agregarCartaInventario();

        localStorage.setItem("carta", "Carta");
        localStorage.getItem("carta");
    
    
        carta_btn.parentNode.removeChild(carta_btn);
        
    }


}

function crearFoto(){

    let foto_btn = document.getElementById("foto");
    foto_btn.onclick = () => {

        agregarFotoInventario();

        localStorage.setItem("foto", "Foto");
        localStorage.getItem("foto");

        console.log(inventario);
        foto_btn.parentNode.removeChild(foto_btn);

    }    

}


// Funciones para agregar elementos al inventario TRAMO A

function agregarCamisaInventario(){

    $.getJSON(URLJSON, function (datos, estado) {
    $.getJSON(URLJSON_2, function (recdatos, estado) {

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


    let camisa_inventario = document.getElementById("camisa_li");
    camisa_inventario.onclick = () => {
        let modal = document.getElementById("camisa-modal");
        modal.style = "display: block";
        }
        let recuerdo1 = document.getElementById("recuerdo1_li");
        recuerdo1.onclick = () => {
            let modal = document.getElementById("recuerdo1-modal");
            modal.style = "display: block";
        }

    })
})

}

function agregarSimboloInventario(){

    $.getJSON(URLJSON, function (datos, estado) {
        $.getJSON(URLJSON_2, function (recdatos, estado) {

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


    let simbolo_inventario = document.getElementById("simbolo_li");
    simbolo_inventario.onclick = () => {
        let modal = document.getElementById("simbolo-modal");
        modal.style = "display: block";
        }
        
    let recuerdo2 = document.getElementById("recuerdo2_li");
    recuerdo2.onclick = () => {
        let modal = document.getElementById("recuerdo2-modal");
        modal.style = "display: block";
        }

        
})
})

}

function agregarEsqueletoInventario(){

    $.getJSON(URLJSON, function (datos, estado) {
        $.getJSON(URLJSON_2, function (recdatos, estado) {

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


    let esqueleto_inventario = document.getElementById("esqueleto_li");
    esqueleto_inventario.onclick = () => {
        let modal = document.getElementById("esqueleto-modal");
        modal.style = "display: block";
        }

    let recuerdo3 = document.getElementById("recuerdo3_li");
    recuerdo3.onclick = () => {
        let modal = document.getElementById("recuerdo3-modal");
        modal.style = "display: block";
        }

    })
})
    

}

function agregarPaloInventario(){

    $.getJSON(URLJSON, function (datos, estado) {
        $.getJSON(URLJSON_2, function (recdatos, estado) {

    let palo_btn = document.getElementById("palo");
    let mensajePalo = document.getElementById("mensaje_palo");

    if(inventario.length == 5){
        inventario.push( new Herramienta (datos[8]));
        crearElementos(inventario[5]);
        palo_btn.parentNode.removeChild(palo_btn); }
        else{
            mensajePalo.style = `visibility: visible`;
            palo_btn.onmouseout = () => {
                mensajePalo.style = `visibility: hidden`;
            }
        }

        let palo_inventario = document.getElementById("palo_li");
        palo_inventario.onclick = () => {
            inventario[5].usar();
            if(inventario[5].uso == true){
                    onmousemove = e => {
                        palo_inventario.style =`position: absolute;
                                                    top: ${e.pageY}px; 
                                                    left: ${e.pageX +5}px;`
                    }
                }
            
                    contenedorJuego.ondblclick = () => {
                        inventario[5].dejarDeUsar();
                        onmousemove = () => {
                        palo_inventario.style =`position: relative;`
                        }
                    }
                }

            })
        })

}

// Funciones para agregar elementos al inventario TRAMO B

function agregarPapelInventario(){

    $.getJSON(URLJSON, function (datos, estado) {
        $.getJSON(URLJSON_2, function (recdatos, estado) {
    
    let papel_btn = document.getElementById("papel");
    let papelMensaje = document.getElementById("mensaje_papel");

    if(inventario.length == 5){
        inventario.push( new Herramienta (datos[9]));
        crearElementos(inventario[5]);
        papel_btn.parentNode.removeChild(papel_btn);
    }
    else {
        papelMensaje.style = `visibility: visible`;
        papel_btn.onmouseout = () => {
            papelMensaje.style = `visibility: hidden`;
        }
    }

    let papel_inventario = document.getElementById("papel_li");
    papel_inventario.onclick = () => {
        let modal = document.getElementById("papel-modal");
        modal.style = "display: block";
        
        }

    })
})

}

function agregarCamisa2Inventario(){

    $.getJSON(URLJSON, function (datos, estado) {
        $.getJSON(URLJSON_2, function (recdatos, estado) {

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

    let camisa_inventario = document.getElementById("camisa_li");
    camisa_inventario.onclick = () => {
        let modal = document.getElementById("camisa-modal");
        modal.style = "display: block";
        }
    
    let recuerdo6 = document.getElementById("recuerdo6_li");
    recuerdo6.onclick = () => {
        let modal = document.getElementById("recuerdo6-modal");
        modal.style = "display: block";
        }

    })
})


}

function agregarCartaInventario(){


    $.getJSON(URLJSON, function (datos, estado) {
        $.getJSON(URLJSON_2, function (recdatos, estado) {

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

    let carta_inventario = document.getElementById("carta_li");
    carta_inventario.onclick = () => {
        let modal = document.getElementById("carta-modal");
        modal.style = "display: block";
        }
    
    let recuerdo5 = document.getElementById("recuerdo5_li");
    recuerdo5.onclick = () => {
        let modal = document.getElementById("recuerdo5-modal");
        modal.style = "display: block";
        }

    })
})

}

function agregarFotoInventario(){

    $.getJSON(URLJSON, function (datos, estado) {
        $.getJSON(URLJSON_2, function (recdatos, estado) {

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

    let foto_inventario = document.getElementById("foto_li");
    foto_inventario.onclick = () => {
        let modal = document.getElementById("foto-modal");
        modal.style = "display: block";
    }
    
    let recuerdo4 = document.getElementById("recuerdo4_li");
    recuerdo4.onclick = () => {
        let modal = document.getElementById("recuerdo4-modal");
        modal.style = "display: block";
    }

})
})


}