function estadoInicial (){
    
    localStorage.clear();

// INTRODUCCION: Consigo el padre, contenedorJuego, y genero el HTML con dos p, el msj introductorio y la primera propuesta al usuario.

// variables parrafos

const p1 = "Abrís los ojos... estás en una especie de bosque, te sentís desorientado. Está anocheciendo, y no te acordás nada de las últimas horas. Vas a tener que empezar a caminar, y buscar indicios que te ayuden a recordar lo que pasó... lo único que tenés con vos es tu mochila, con un celular sin batería.";
const p2 = "Estás caminando a través del bosque, mirando con atención, y al lado de un árbol encontrás tirados un cuchillo y una linterna. Dado el reducido espacio de tu mochila, solo podés agarrar uno...";


contenedorJuego.innerHTML = `<p id= p_1></p>
                            <p id= p_2 style = "display: none"></p>
                            <div>
                                <img id= "img_pasto" src= "imagenes/placeholder_pasto.jpeg"  alt= "Esto es un placeholder del pasto">
                                <p id= "p_pasto">Si tan solo tuvieras algo con que cortar esta maleza...</p>
                            </div>
                            <div id="camino_div">
                                <p id= "p_camino"> Este camino se ve muy oscuro y peligroso...</p>
                            </div>
                            `


typewrite("p_1", p1, 50);

$("#p_2").fadeIn(20000, () => {
    
    typewrite("p_2", p2, 60);
    
    // Agrego las opciones desde la clase Herramienta y creo los botones a partir del nombre de los objetos.

    opciones.push(new Herramienta (datos_herramientas[1]));
    opciones.push(new Herramienta (datos_herramientas[2]));
    console.log(opciones);

    // Creo las opciones como elementos usando la funcion crearBoton.

    for (const opcion of opciones){
        crearBoton(opcion);
    }
    
    eventoLinterna();

    eventoCuchillo();

    guardadoJuego();

        }
    ) 
}