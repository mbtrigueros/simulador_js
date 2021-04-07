function eventoLinterna () {

    let linterna_btn = document.getElementById("linterna");
    linterna_btn.onclick = () => {

        // llamada asincronica con AJAX
        $.getJSON(URLJSON, function (datos, estado) {
            
            inventario.push( new Herramienta (datos[1]));
            crearElementos(inventario[1]);
            console.log(inventario);
            almacenoLinterna();
            segundaSituacion();
            usarLinterna();

        })
        } 
    }

function almacenoLinterna () {

    // llamada asincronica con AJAX
    $.getJSON(URLJSON, function (datos, estado) {
        
    // Almaceno el elemento elegido en el Almacenamiento Local.
        const almacenado_lin = JSON.stringify(datos[1]);
        localStorage.setItem("linterna", almacenado_lin);
    // Obtengo el mismo y lo veo por consola. La idea es luego poder usar esta informacion como punto de guardado.
        const almacenado_lin2 = JSON.parse(localStorage.getItem("linterna"));
        console.log(almacenado_lin2);

    })
    }

function usarLinterna (){


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