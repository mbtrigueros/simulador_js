// Seccion de guardado del Juego.

function guardadoJuego (){
    for (let i = 0; i < localStorage.length; i++){
            let clave = localStorage.key(i);
            console.log(clave);
            switch (clave){
                case "linterna": 
                contenedorJuego.innerHTML = `<div>
                                <img id= "img_pasto" src= "imagenes/placeholder_pasto.jpeg"  alt= "Esto es un placeholder del pasto">
                                <p id= "p_pasto">Si tan solo tuvieras algo con que cortar esta maleza...</p>
                                </div>
                                <div id="camino_div">
                                <p id= p_camino> Este camino se ve muy oscuro y peligroso...</p>
                                </div>`;
                                
                                // llamada asincrocina con AJAX
                                $.getJSON(URLJSON, function (datos, estado) {

                                inventario.push(new Herramienta (datos[1]));
                                crearElementos(inventario[1]);
                                console.log(inventario);

                                segundaSituacion();
                                usarLinterna();

                            })

                break;

                case "cuchillo":
                    contenedorJuego.innerHTML = `<div>
                                <img id= "img_pasto" src= "imagenes/placeholder_pasto.jpeg"  alt= "Esto es un placeholder del pasto">
                                <p id= "p_pasto">Si tan solo tuvieras algo con que cortar esta maleza...</p>
                                </div>
                                <div id="camino_div">
                                <p id= "p_camino"> Este camino se ve muy oscuro y peligroso...</p>
                                </div>`;    
                                

                                // llamada asincrocina con AJAX
                                $.getJSON(URLJSON, function (datos, estado) {

                                    inventario.push(new Herramienta (datos[2]));
                                    crearElementos(inventario[1]);
                                    console.log(inventario);

                                    segundaSituacion();
                                    usarCuchillo();

                                })

                                
                break;

                case "tramoA":
                        terceraSituacionTramoA();
                    break;

                case "tramoB":
                            terceraSituacionTramoB();
                    break;

                default: 
                estadoInicial(); 
                break;               
            }
        }
    }