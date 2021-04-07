// Variables
const opciones = [];
const consecuencias = [];
const inventario = [];
const contenedorJuego = document.getElementById("contenedor_juego");


// Agrego elemento "Celular" de tipo Herramienta al inventario.


    // llamada asincronica con AJAX
    const URLJSON = "js/data.json"
    $.getJSON(URLJSON, function (datos, estado) {
        
        inventario.push(new Herramienta(datos[0]));
        console.log(inventario); 

// Creo el Inventario como elemento en el HTML con el celular previamente agregado.

        crearElementos(inventario[0]); 
        
    })

        $(document).ready(function(){
            console.log("dom listo");
            pantallaInicio();
    })
