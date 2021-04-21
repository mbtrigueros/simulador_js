// Variables

const opciones = [];
const consecuencias = [];
const inventario = [];
const recuerdos = [];
const contenedorJuego = document.getElementById("contenedor_juego");

// declaro variables para los arrays de pistas. 

const pistasTramoA = [];
const pistasTramoB = [];

// agrego a los mismos las pistas desde una llamada asincronica con AJAX y JSON

$.getJSON(URLJSON, function (datos, estado) {

pistasTramoA.push (new Herramienta(datos[3]));
pistasTramoA.push (new Herramienta(datos[6]));
pistasTramoA.push (new Herramienta(datos[7]));
pistasTramoA.push (new Herramienta(datos[8]));

console.log(pistasTramoA);

pistasTramoB.push (new Herramienta(datos[3]));
pistasTramoB.push (new Herramienta(datos[4]));
pistasTramoB.push (new Herramienta(datos[5]));
pistasTramoB.push (new Herramienta(datos[9]));

console.log(pistasTramoB);

})


    // llamada asincronica con AJAX
    $.getJSON(URLJSON, function (datos, estado) {

// Agrego elemento "Celular" de tipo Herramienta al inventario.        
        
        inventario.push(new Herramienta(datos[0]));
        console.log(inventario); 

// Creo el Inventario como elemento en el HTML con el celular previamente agregado.

        crearElementos(inventario[0]); 
        
    })

        $(document).ready(function(){
            console.log("dom listo");
            pantallaInicio();
            
    })
