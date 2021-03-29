// Variables
const opciones = [];
const consecuencias = [];
const inventario = [];
const contenedorJuego = document.getElementById("contenedor_juego");


// Agrego elemento "Celular" de tipo Herramienta al inventario.

inventario.push(new Herramienta(datos_herramientas[0]));
console.log(inventario);

// Creo el Inventario como elemento en el HTML con el celular previamente agregado.

crearElementos(inventario[0]);

$(document).ready(function(){
    console.log("dom listo");
    pantallaInicio();
})
