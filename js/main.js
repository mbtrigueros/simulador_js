// Variables

let opciones = [];
let consecuencias = [];
const inventario = [];

// Clase Celular

class Celular {
    constructor(bateria){
        this.bateria = parseInt(bateria);
        this.signal = false;
    }
    cargar(){
        this.bateria = this.bateria++;
    }
    signalFound(){
        this.signal = true;
    }
}

inventario.push(new Celular(0));

// INTRODUCCION: Consigo el padre, contenedorJuego, y creo elemento "p", el primer diaologo introductorio.

let contenedorJuego = document.getElementById("contenedor_juego");

let intro = document.createElement("p");
intro.innerHTML = "Abrís los ojos... estás en una especie de bosque, te sentís desorientado. Está anocheciendo, y no te acordás nada de las últimas horas. Vas a tener que empezar a caminar, y buscar indicios que te ayuden a recordar lo que pasó... lo único que tenés con vos es tu mochila, con un celular sin batería."
contenedorJuego.appendChild(intro);

// //Mensaje introductorio y primera propuesta al usuario

let primeraOpcion = document.createElement("p");
primeraOpcion.innerHTML = "Estás caminando a través del bosque, mirando con atención, y al lado de un árbol encontrás tirados un cuchillo y una linterna. Dado el reducido espacio de tu mochila, solo podés agarrar uno..."; 
contenedorJuego.appendChild(primeraOpcion);

// Agrego las opciones y las consecuencias a los arrays correspondientes.

opciones.push("Linterna");
opciones.push("Cuchillo");

for (const opcion of opciones){
    let boton = document.createElement("button");
    boton.innerHTML = opcion;
    contenedorJuego.appendChild(boton);
}

// consecuencias.push("Elegiste la linterna, seria conveniente guardarla para cuando oscuresca...");
// consecuencias.push("Elegiste el cuchillo, tenelo en acceso rapido en caso de alguna urgencia.");

// Clase Arma

class Arma {
    constructor(nombre, potencia){
        this.nombre = nombre;
        this.potencia = parseInt(potencia);
    }
}

// Clase Linterna

class Linterna{
    constructor(pila){
        this.pila = parseInt(pila);
        this.encendida = false;
    }
    encender(){
        this.encendida = true;
        this.pila = this.pila--;
    }
}

// //Bucle interactivo: se verifica la elección del usuario 
// De acuerdo al objeto elegido, este se agrega al inventario. 

// while(entradaUsuario > 0){
//     if (entradaUsuario == 1){
//     alert(opcionElegida(entradaUsuario));
//     inventario.push(new Linterna(100));
//     console.log(inventario);
//     }
//     else if (entradaUsuario == 2){
//     alert(opcionElegida(entradaUsuario));
//     inventario.push(new Arma("Cuchillo", 5));
//     console.log(inventario);
//     } 
//     else {
//     alert("No elegiste ninguna opcion, acaso no queres ver como sigue la historia?");
// }
// // Aca depende de lo que elegiste, vas a poder avanzar o tener que continuar x otro camino. Para lograr esto, usando FIND busco en el inventario por el objeto que necesito.
//     alert("Continuas caminando, y te encontras con una hierba alta que te impide seguir...");
//     if(inventario.find(elemento => elemento.nombre == "Cuchillo")){
//                 alert("Como escogiste el cuchillo, podes abrirte camino entre la maleza y continuar por este rumbo.");
//             }
//             else{
//                 alert("Vas a tener que tomar el camino a tu izquierda, que se ve mas oscuro y peligroso... por suerte tenes la linterna!");
//             } 
// break;
// }



