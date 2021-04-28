// Seccion de guardado del Juego.

function guardadoJuego (){
    for (let i = 0; i < localStorage.length; i++){
            let clave = localStorage.key(i);
            console.log(clave);
            switch (clave){

                case "linterna":

                 // llamada asincrocina con AJAX
                $.getJSON(URLJSON, function (datos, estado) {

                    inventario.push(new Herramienta (datos[1]));
                    crearElementos(inventario[1]);
                    console.log(inventario);
                    usarLinterna();

                })
                
                    document.getElementById("contenedor_juego").style = `background-image: url(imagenes/fondo_escenaLinterna.png);`;
                    contenedorJuego.innerHTML = `<div id = "txt_tramoA"></div>`;
                    for (const pista of pistasTramoA){
                        crearBoton(pista); 
                    }
                        crearCamisa();
                        crearSimbolo();
                        crearEsqueleto();
                        crearPalo();
                        setTimeout(ojos, 1000);
                    break;

                case "cuchillo":

                // llamada asincrocina con AJAX
                $.getJSON(URLJSON, function (datos, estado) {

                    inventario.push(new Herramienta (datos[2]));
                    crearElementos(inventario[1]);
                    console.log(inventario);
                    usarCuchillo();

                                })
                    document.getElementById("contenedor_juego").style = `background-image: url(imagenes/fondo_escenaCuchillo.png);`;
                    contenedorJuego.innerHTML = `<div id = "txt_tramoB"></div>`;
                    for (const pista of pistasTramoB){
                        crearBoton(pista); 
                    }
                        crearFoto();
                        crearCarta();
                        crearCamisa2();
                        crearPapel();
                        setTimeout(enemigoAparece, 1000);
                    break;

                case "camisa":
                                    // llamada asincrocina con AJAX
                $.getJSON(URLJSON, function (datos, estado) {
                    agregarCamisaInventario();
                })
                    break;

                case "simbolo":
                                // llamada asincrocina con AJAX
                                $.getJSON(URLJSON, function (datos, estado) {
                    agregarSimboloInventario();
                                })
                    break;
                case "esqueleto":
                                    // llamada asincrocina con AJAX
                $.getJSON(URLJSON, function (datos, estado) {
                    agregarEsqueletoInventario();
                })
                    break;
                case "palo":
                                    // llamada asincrocina con AJAX
                $.getJSON(URLJSON, function (datos, estado) {
                    agregarPaloInventario();
                })
                    break;

                case "papel":
                                    // llamada asincrocina con AJAX
                $.getJSON(URLJSON, function (datos, estado) {
                    agregarPapelInventario();
                })
                    break;
                
                
                case "camisa_2":
                                    // llamada asincrocina con AJAX
                $.getJSON(URLJSON, function (datos, estado) {
                    agregarCamisa2Inventario();
                })
                    break;
                case "foto":
                                    // llamada asincrocina con AJAX
                $.getJSON(URLJSON, function (datos, estado) {
                    agregarFotoInventario();

                })
                    break;
                case "carta":
                                    // llamada asincrocina con AJAX
                $.getJSON(URLJSON, function (datos, estado) {
                    agregarCartaInventario();
                })
                    break;

                case "tramoA_sit3":
                    document.getElementById("contenedor_juego").style = `background-image: url(imagenes/fondo_escenaLinterna.png);`;
                    break;

                case "tramoB_sit3":
                    document.getElementById("contenedor_juego").style = `background-image: url(imagenes/fondo_escenaCuchillo.png);`;
                    break;

                default: 
                estadoInicial(); 
                break;               
            }
        }
    }