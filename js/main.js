
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
    this.bateria--;}

    dejarDeUsar(){
        this.uso = false;
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

//Mensaje introductorio y primera propuesta al usuario.

let primeraSituacion = document.createElement("p");
primeraSituacion.innerHTML = "Estás caminando a través del bosque, mirando con atención, y al lado de un árbol encontrás tirados un cuchillo y una linterna. Dado el reducido espacio de tu mochila, solo podés agarrar uno..."; 
contenedorJuego.appendChild(primeraSituacion);

// Agrego las opciones desde la clase Herramienta y creo los botones a partir del nombre de los objetos.

opciones.push(new Herramienta (datos_herramientas[1]));
opciones.push(new Herramienta (datos_herramientas[2]));
console.log(opciones);

// Agrego los strings correspondientes al array de consecuencias.

consecuencias.push("Elegiste la linterna, seria conveniente guardarla para cuando oscuresca...");
consecuencias.push("Elegiste el cuchillo, tenelo en acceso rapido en caso de alguna urgencia.");
console.log(consecuencias);

// Creo las opciones como elementos usando la funcion crearBoton.

for (const opcion of opciones){
    crearBoton(opcion);
}

// Creo el Inventario como elemento en el HTML con el celular previamente agregado.

crearElementos(inventario[0]);

// Funcion para crear los botones que funcionaran como opciones para el usuario.

function crearBoton(opcion){
    let objeto = document.createElement("div");
    objeto.id = opcion.nombre.toLowerCase(); 
    objeto.innerHTML = `<img src= ${opcion.imagen} alt= "Esto es un placeholder del ${opcion.nombre}">
                        <p>${opcion.nombre}</p>`;
    contenedorJuego.appendChild(objeto);
}

//Asocio los botones a eventos onclick, desencadena en una consecuencia y el objeto elegido se agrega al inventario. Se eliminan los objetos que no seran utilizados.

let cuchillo_btn = document.getElementById("cuchillo");
cuchillo_btn.onclick = () => {
    crearConsecuencias(consecuencias[1]);
    inventario.push(new Herramienta (datos_herramientas[2]));
    crearElementos(inventario[1]);
    console.log(inventario);

    // Almaceno el elemento elegido en el Almacenamiento Local.

    const almacenado_cuc = JSON.stringify(datos_herramientas[2]);
    localStorage.setItem("cuchillo", almacenado_cuc);

    // Obtengo el mismo y lo veo por consola. La idea es luego poder usar esta informacion como punto de guardado. 

    const almacenado_cuc2 = JSON.parse(localStorage.getItem("cuchillo"));
    console.log(almacenado_cuc2);

    linterna_btn.parentNode.removeChild(linterna_btn);
    intro.parentNode.removeChild(intro);
    primeraSituacion.parentNode.removeChild(primeraSituacion);
    cuchillo_btn.parentNode.removeChild(cuchillo_btn);

    segundaSituacion();

    // Esto me permite, al hacer click, usar el elemento cuchillo del inventario. Para dejar de usarlo, hago doble click.
    
    let cuchillo_inventario = document.getElementById("cuchillo_li");
    cuchillo_inventario.onclick = () => {
    inventario[1].usar();
    if(inventario[1].uso == true){
        if(inventario[1].uso == true){
            onmousemove = e => {
                cuchillo_inventario.style =`position: absolute;
                                            top: ${e.pageY-25}px; 
                                            left: ${e.pageX-25}px;`
            }
        }
    }
            cuchillo_inventario.ondblclick = () => {
                inventario[1].dejarDeUsar();
                onmousemove = () => {
                cuchillo_inventario.style =`position: relative;`
            }
        }
    }
}

let linterna_btn = document.getElementById("linterna");
linterna_btn.onclick = () => {
    crearConsecuencias(consecuencias[0]);
    inventario.push( new Herramienta (datos_herramientas[1]));
    crearElementos(inventario[1]);
    console.log(inventario);

// Almaceno el elemento elegido en el Almacenamiento Local.

    const almacenado_lin = JSON.stringify(datos_herramientas[1]);
    localStorage.setItem("linterna", almacenado_lin);

// Obtengo el mismo y lo veo por consola. La idea es luego poder usar esta informacion como punto de guardado.

    const almacenado_lin2 = JSON.parse(localStorage.getItem("linterna"));
    console.log(almacenado_lin2);

    cuchillo_btn.parentNode.removeChild(cuchillo_btn);
    intro.parentNode.removeChild(intro);
    primeraSituacion.parentNode.removeChild(primeraSituacion);
    linterna_btn.parentNode.removeChild(linterna_btn);

    segundaSituacion();

    // Esto me permite, al hacer click, usar el elemento linterna del inventario. Para dejar de usarlo, hago doble click.

    let linterna_inventario = document.getElementById("linterna_li");
    linterna_inventario.onclick = () => {
    inventario[1].usar(); 
    if(inventario[1].uso == true){
        onmousemove = e => {
            linterna_inventario.style =`position: absolute;
                                        color: $colorFondo;
                                        top: ${e.pageY-25}px; 
                                        left: ${e.pageX-25}px;
                                        box-shadow: 1px 0px 80px rgb(255, 255, 255); `
            }
        }
    }
        linterna_inventario.ondblclick = () => {
            inventario[1].dejarDeUsar();
            onmousemove = () => {
            linterna_inventario.style =`position: relative;`
            }
        }
    }

// Funcion para crear la segunda situacion, la misma va a depender del objeto elegido en la instancia anterior.

function segundaSituacion (){

    let situacionDos = document.createElement("p");
    situacionDos.innerHTML = "Continuas caminando, y te encontras con una hierba alta que te impide seguir..."; 
    contenedorJuego.appendChild(situacionDos);
    if(inventario.find(elemento => elemento.nombre == "Cuchillo")){
        consecuencias.push("Como escogiste el cuchillo, podes abrirte camino entre la maleza y continuar por este rumbo.");
        crearConsecuencias(consecuencias[2]);
        console.log(consecuencias);
        }
            else if (inventario.find(elemento => elemento.nombre == "Linterna")){ 
                consecuencias.push("Vas a tener que tomar el camino a tu izquierda, que se ve mas oscuro y peligroso... por suerte tenes la linterna!");
                crearConsecuencias(consecuencias[2]);    
                console.log(consecuencias);
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
