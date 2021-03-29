function estadoInicial (){
    
    localStorage.clear();

// INTRODUCCION: Consigo el padre, contenedorJuego, y genero el HTML con dos p, el msj introductorio y la primera propuesta al usuario.

contenedorJuego.innerHTML = `<p>Abrís los ojos... estás en una especie de bosque, te sentís desorientado. Está anocheciendo, y no te acordás nada de las últimas horas. Vas a tener que empezar a caminar, y buscar indicios que te ayuden a recordar lo que pasó... lo único que tenés con vos es tu mochila, con un celular sin batería.</p>
                            <p>Estás caminando a través del bosque, mirando con atención, y al lado de un árbol encontrás tirados un cuchillo y una linterna. Dado el reducido espacio de tu mochila, solo podés agarrar uno...</p>
                            <div>
                                <img id= "img_pasto" src= "imagenes/placeholder_pasto.jpeg"  alt= "Esto es un placeholder del pasto">
                                <p id= "p_pasto">Si tan solo tuvieras algo con que cortar esta maleza...</p>
                            </div>
                            <div id="camino_div">
                                <p id= "p_camino"> Este camino se ve muy oscuro y peligroso...</p>
                            </div>
                            `

// Agrego las opciones desde la clase Herramienta y creo los botones a partir del nombre de los objetos.

opciones.push(new Herramienta (datos_herramientas[1]));
opciones.push(new Herramienta (datos_herramientas[2]));
console.log(opciones);

// Creo las opciones como elementos usando la funcion crearBoton.

for (const opcion of opciones){
    crearBoton(opcion);
}

// Agrego los strings correspondientes al array de consecuencias.

// consecuencias.push("Elegiste la linterna, seria conveniente guardarla para cuando oscuresca...");
// consecuencias.push("Elegiste el cuchillo, tenelo en acceso rapido en caso de alguna urgencia.");
// console.log(consecuencias);


eventoLinterna();

eventoCuchillo();

guardadoJuego();

}