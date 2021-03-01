/*  Situación ejemplo: el usuario tiene que elegir una opción en el juego, y eso desemboca en distintas consecuencias.
*/
//Variables: defino las opciones y sus consecuencias.
let opciones = ["Sacar el celular", "Tratar de esconderme"];
let consecuencias = ["'Ahi estas! Te descubrimos!' Tal vez hubiera sido mejor mantenerse en la oscuridad...", "No hay lugar para esconderse... a correr!"];
//Mensaje introductorio y primera propuesta al usuario
let entradaUsuario = parseInt(prompt("No recuerdo nada de las últimas horas, no sé dónde estoy... está todo oscuro. Opciones: 1 - Sacar el celular 2 - Tratar de esconderme 0 - Salir" ));
//Bucle interactivo: se verifica la elección del usuario 
while(entradaUsuario > 0){
    if (entradaUsuario <= 2){
        alert(opcionElegida(entradaUsuario));
    } else {
        alert("No elegiste ninguna opcion, acaso no queres ver como sigue la historia?");
    }
    break;
}
//Función para definir la elección 
function opcionElegida(numeroElegido){
    //Transformamos la elección en el índice de la lista
    let indice = numeroElegido - 1;
    //Retornamos la consecuencia de dicha eleccion
    return consecuencias[indice];
}


