

function estadoInicial (){
    
    localStorage.clear();

// llamada asincronica con AJAX
$.getJSON(URLJSON, function (datos, estado) {

    // compruebo que este todo ok
    console.log(estado);
    console.log(datos);

// INTRODUCCION

contenedorJuego.innerHTML = `<div id = "introduccion"></div>
                            </div>
                            `

const intro = new Typewriter('#introduccion', {
    loop : false,
    delay : 10 
});

        intro.typeString('Abrís los ojos... estás en una especie de bosque, te sentís desorientado. Está anocheciendo, y no te acordás nada de las últimas horas. Vas a tener que empezar a caminar, y buscar indicios que te ayuden a recordar lo que pasó... lo único que tenés con vos es tu mochila, con un celular sin batería.')
                .pauseFor(100)
                .deleteAll(15)
                .typeString('Estás caminando a través del bosque, mirando con atención, y al lado de un árbol encontrás tirados un cuchillo y una linterna. Dado el reducido espacio de tu mochila, solo podés agarrar uno...')
                .callFunction(() => {
                    opciones.push(new Herramienta (datos[1]));
                    opciones.push(new Herramienta (datos[2]));
                    console.log(opciones);
        
                    for (const opcion of opciones){
                        crearBoton(opcion);
                    }
        
                    eventoLinterna();
        
                    eventoCuchillo();
                
                    guardadoJuego();
                    
                })
                .start();

        })

}

