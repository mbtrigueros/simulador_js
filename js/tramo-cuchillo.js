function eventoCuchillo() {

    let cuchillo_btn = document.getElementById("cuchillo");
    cuchillo_btn.onclick = () => {
        // crearConsecuencias(consecuencias[1]);
        inventario.push(new Herramienta (datos_herramientas[2]));
        crearElementos(inventario[1]);
        console.log(inventario);
        almacenoCuchillo();
        segundaSituacion();
        usarCuchillo();
        }
    }

function almacenoCuchillo() {
        // Almaceno el elemento elegido en el Almacenamiento Local.
    const almacenado_cuc = JSON.stringify(datos_herramientas[2]);
    localStorage.setItem("cuchillo", almacenado_cuc);
    // Obtengo el mismo y lo veo por consola. La idea es luego poder usar esta informacion como punto de guardado. 
    const almacenado_cuc2 = JSON.parse(localStorage.getItem("cuchillo"));
    console.log(almacenado_cuc2);
    }

    function usarCuchillo (){

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