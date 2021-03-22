// Variables

let opciones = [];
let consecuencias = [];
const inventario = [];

// Clase Herramienta

class Herramienta {
    constructor(datos){
        this.nombre = datos.nombre;
        this.imagen = datos.imagen;
        this.uso = false;
        this.bateria = parseInt(datos.bateria);
    }
    // Compruebo si el elemento tiene bateria, y si la tiene, que tenga un valor mayor a cero para poder usar el mismo.
    usar(){ 
        if (this.bateria > 0){
        this.uso = true;
    }
        else if(this.bateria != 0){
            this.uso = true;
        }
    this.bateria--;
    }
}

// Agrego elemento "Celular" de tipo Herramienta al inventario.

inventario.push(new Herramienta(datos_herramientas[0]));
console.log(inventario);


// INTRODUCCION: Consigo el padre, contenedorJuego, y creo elemento "p", el primer diaologo introductorio.

let contenedorJuego = document.getElementById("contenedor_juego");

let intro = document.createElement("p");
intro.innerHTML = "Abrís los ojos... estás en una especie de bosque, te sentís desorientado. Está anocheciendo, y no te acordás nada de las últimas horas. Vas a tener que empezar a caminar, y buscar indicios que te ayuden a recordar lo que pasó... lo único que tenés con vos es tu mochila, con un celular sin batería."
contenedorJuego.appendChild(intro);

//Mensaje introductorio y primera propuesta al usuario

let primeraOpcion = document.createElement("p");
primeraOpcion.innerHTML = "Estás caminando a través del bosque, mirando con atención, y al lado de un árbol encontrás tirados un cuchillo y una linterna. Dado el reducido espacio de tu mochila, solo podés agarrar uno..."; 
contenedorJuego.appendChild(primeraOpcion);

// Agrego las opciones desde la clase Herramienta y creo los botones a partir del nombre de los objetos.

opciones.push(new Herramienta (datos_herramientas[1]));
opciones.push(new Herramienta (datos_herramientas[2]));
console.log(opciones);

for (const opcion of opciones){
    crearBoton(opcion);
}

crearElementos(inventario[0]);

// Funcion para crear los botones que funcionaran como opciones para el usuario.

function crearBoton(opcion){
    let objeto = document.createElement("div");
    objeto.id = opcion.nombre.toLowerCase(); 
    objeto.innerHTML = `<img src= ${opcion.imagen} alt= "Esto es un placeholder del ${opcion.nombre}">
                        <p>${opcion.nombre}</p>`;
    contenedorJuego.appendChild(objeto);
}

let cuchillo_btn = document.getElementById("cuchillo");
cuchillo_btn.onclick = () => {
    let consecuenciaDos = document.createElement("p");
    consecuenciaDos.innerHTML= "Elegiste el cuchillo, tenelo en acceso rapido en caso de alguna urgencia.";
    inventario.push(new Herramienta (datos_herramientas[2]));
    crearElementos(inventario[1]);
    console.log(inventario);
    contenedorJuego.appendChild(consecuenciaDos);
    linterna_btn.parentNode.removeChild(linterna_btn);
    intro.parentNode.removeChild(intro);
    primeraOpcion.parentNode.removeChild(primeraOpcion);
    cuchillo_btn.parentNode.removeChild(cuchillo_btn);

    opcionDos();
    
}

let linterna_btn = document.getElementById("linterna");
linterna_btn.onclick = () => {
    let consecuenciaUno = document.createElement("p");
    consecuenciaUno.innerHTML= "Elegiste la linterna, seria conveniente guardarla para cuando oscuresca...";
    inventario.push( new Herramienta (datos_herramientas[1]));
    crearElementos(inventario[1]);
    console.log(inventario);
    contenedorJuego.appendChild(consecuenciaUno);
    cuchillo_btn.parentNode.removeChild(cuchillo_btn);
    intro.parentNode.removeChild(intro);
    primeraOpcion.parentNode.removeChild(primeraOpcion);
    linterna_btn.parentNode.removeChild(linterna_btn);

    opcionDos();
}


// Funcion para crear la segunda opcion, la misma va a depender del objeto elegido en la instancia anterior.

function opcionDos (){


    let segundaOpcion = document.createElement("p");
    segundaOpcion.innerHTML = "Continuas caminando, y te encontras con una hierba alta que te impide seguir..."; 
    contenedorJuego.appendChild(segundaOpcion);
    if(inventario.find(elemento => elemento.nombre == "Cuchillo")){
        let consecuenciaTres = document.createElement("p");
        consecuenciaTres.innerHTML = "Como escogiste el cuchillo, podes abrirte camino entre la maleza y continuar por este rumbo.";
        contenedorJuego.appendChild(consecuenciaTres);
        }
        else if (inventario.find(elemento => elemento.nombre == "Linterna")){ 
            let consecuenciaCuatro = document.createElement("p");
            consecuenciaCuatro.innerHTML = "Vas a tener que tomar el camino a tu izquierda, que se ve mas oscuro y peligroso... por suerte tenes la linterna!";  
            contenedorJuego.appendChild(consecuenciaCuatro);
            }
        }


// Funcion para crear los elementos del inventario. 

function crearElementos (elemento){
    let inventarioJuego = document.getElementById("inventario_juego");
    let objeto = document.createElement("li");
    objeto.id = elemento.nombre.toLowerCase() + "_li"; 
    objeto.innerHTML = `<img src= ${elemento.imagen} alt= "Esto es un placeholder del ${elemento.nombre}">
                        <p>${elemento.nombre}</p>`;
    inventarioJuego.appendChild(objeto);
}