
// Funcion para crear los botones que funcionaran como opciones para el usuario.

function crearBoton(opcion){
    let objeto = document.createElement("div");
    objeto.id = opcion.nombre.toLowerCase(); 
    objeto.innerHTML = `<img src= ${opcion.imagen} alt= "Esto es un placeholder del ${opcion.nombre}">
                        <p>${opcion.nombre}</p>`;
    contenedorJuego.appendChild(objeto);
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


// Funcion para oscurecer paulatinamente el fondo.

function oscurecerFondo (){
        onmousemove = e => {
        document.getElementById("contenedor_juego").style.animation = "oscurecerFondo 10s ease-in forwards";
    }
}

// Animacion para que los textos simulen estar siendo tipeados. 

function typewrite(element,text,delay) {

	/*
	
	Simula el tipeo de teclas
	
	element:	elemento donde insertar el texto.
	text:		texto a tipear.
	delay:		tiempo entre teclas (en milisegundos).

	*/

	// Insertar la siguiente letra
	letra = document.getElementById(element).innerHTML;
	letra = letra.concat(text.charAt(0));
	document.getElementById(element).innerHTML = letra;

	// Esperar "delay" milisegundos para la próxima tecla
	if (text.length > 1) {
		// Eliminar la tecla actual
		text = text.substr(1);
		setTimeout(typewrite,delay,element,text,delay);
	}
}

    
