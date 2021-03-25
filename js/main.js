// Variables

const opciones = [];
const consecuencias = [];
const inventario = [];

// Agrego elemento "Celular" de tipo Herramienta al inventario.

inventario.push(new Herramienta(datos_herramientas[0]));
console.log(inventario);


// INTRODUCCION: Consigo el padre, contenedorJuego, y genero el HTML con dos p, el msj introductorio y la primera propuesta al usuario.

const contenedorJuego = document.getElementById("contenedor_juego");
contenedorJuego.innerHTML = `<p>Abrís los ojos... estás en una especie de bosque, te sentís desorientado. Está anocheciendo, y no te acordás nada de las últimas horas. Vas a tener que empezar a caminar, y buscar indicios que te ayuden a recordar lo que pasó... lo único que tenés con vos es tu mochila, con un celular sin batería.</p>
                            <p>Estás caminando a través del bosque, mirando con atención, y al lado de un árbol encontrás tirados un cuchillo y una linterna. Dado el reducido espacio de tu mochila, solo podés agarrar uno...</p>
                            `

// Agrego las opciones desde la clase Herramienta y creo los botones a partir del nombre de los objetos.

opciones.push(new Herramienta (datos_herramientas[1]));
opciones.push(new Herramienta (datos_herramientas[2]));
console.log(opciones);

// Creo las opciones como elementos usando la funcion crearBoton.

for (const opcion of opciones){
    crearBoton(opcion);
}

// Creo elemento pasto.

let pasto = document.createElement("div");
pasto.innerHTML = `<img id= "img_pasto" src= "imagenes/placeholder_pasto.jpeg"  alt= "Esto es un placeholder del pasto">
                    <p id= "p_pasto">Si tan solo tuvieras algo con que cortar esta maleza...</p>
                    `;
contenedorJuego.appendChild(pasto);

let camino = document.createElement("div");
camino.id = "camino_div";
camino.innerHTML = "<p id= p_camino> Este camino se ve muy oscuro y peligroso...</p>"
contenedorJuego.appendChild(camino);

// Creo el Inventario como elemento en el HTML con el celular previamente agregado.

crearElementos(inventario[0]);

// Agrego los strings correspondientes al array de consecuencias.

consecuencias.push("Elegiste la linterna, seria conveniente guardarla para cuando oscuresca...");
consecuencias.push("Elegiste el cuchillo, tenelo en acceso rapido en caso de alguna urgencia.");
console.log(consecuencias);


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

    segundaSituacion();

    // Esto me permite, al hacer click, usar el elemento cuchillo del inventario. Para dejar de usarlo, hago doble click.
    
    let cuchillo_inventario = document.getElementById("cuchillo_li");
    cuchillo_inventario.onclick = () => {
    inventario[1].usar();
    if(inventario[1].uso == true){
            onmousemove = e => {
                cuchillo_inventario.style =`position: absolute;
                                            top: ${e.pageY}px; 
                                            left: ${e.pageX +5}px;`
            }
        }
    
            contenedorJuego.ondblclick = () => {
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

    segundaSituacion();

    // Esto me permite, al hacer click, usar el elemento linterna del inventario. Para dejar de usarlo, hago doble click.

    let linterna_inventario = document.getElementById("linterna_li");
    linterna_inventario.onclick = () => {
    inventario[1].usar(); 
    if(inventario[1].uso == true){
        onmousemove = e => {
            linterna_inventario.style =`position: absolute;
                                        color: $colorFondo;
                                        top: ${e.pageY}px; 
                                        left: ${e.pageX+5}px;
                                        box-shadow: 1px 0px 80px rgb(255, 255, 255); `
            }
        }
    }
        contenedorJuego.ondblclick = () => {
            inventario[1].dejarDeUsar();
            onmousemove = () => {
            linterna_inventario.style =`position: relative;`
            }
        }
    }

