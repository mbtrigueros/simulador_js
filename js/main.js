// /*  Situación ejemplo: el usuario tiene que elegir una opción en el juego, y eso desemboca en distintas consecuencias.
// */
// //Variables: defino las opciones y sus consecuencias.
// let opciones = ["Sacar el celular", "Tratar de esconderme"];
// let consecuencias = ["'Ahi estas! Te descubrimos!' Tal vez hubiera sido mejor mantenerse en la oscuridad...", "No hay lugar para esconderse... a correr!"];
// //Mensaje introductorio y primera propuesta al usuario
// let entradaUsuario = parseInt(prompt("No recuerdo nada de las últimas horas, no sé dónde estoy... está todo oscuro. Opciones: 1 - Sacar el celular 2 - Tratar de esconderme 0 - Salir" ));
// //Bucle interactivo: se verifica la elección del usuario 
// while(entradaUsuario > 0){
//     if (entradaUsuario <= 2){
//         alert(opcionElegida(entradaUsuario));
//     } else {
//         alert("No elegiste ninguna opcion, acaso no queres ver como sigue la historia?");
//     }
//     break;
// }
// //Función para definir la elección 
// function opcionElegida(numeroElegido){
//     //Transformamos la elección en el índice de la lista
//     let indice = numeroElegido - 1;
//     //Retornamos la consecuencia de dicha eleccion
//     return consecuencias[indice];
// }


// Situacion ejemplo 2: Inventario. El jugador tiene un inventario con objetos, y elige si leer su diario o no.

// Clase Inventario
class Inventario {
    constructor (diario, celular){
        this.diario = diario;
        this.celular = celular;
    }
    leerDiario(){
        alert("Fecha 10/01: Hoy voy a ir al bosque a acampar con mis amigos. Hace mucho que no los veo, así que tengo ganas de pasar el día con ellos en la naturaleza...");
}
}

// Creo el objeto Inventario
const inventario = new Inventario("diario", "celular");

// Variables
let opciones = ["Leer el diario", "No leer el diario"];
let consecuencias = ["Elegiste leer el diario, esto te ayudara a encontrar pistas respecto a lo que paso.", "Preferiste no leer el diario, para intentar recordar de otra manera sin preconceptos."];

let entradaUsuario = parseInt(prompt("Encuentro un diario en mi mochila. Esto puede ser util para recordar las ultimas horas, aunque tambien puede que influya en mi memoria y me confunda... que deberia hacer? 1 - Leer el diario 2 - No leerlo  0 - Salir" ));
// //Bucle interactivo: se verifica la elección del usuario 
while(entradaUsuario > 0){
    if (entradaUsuario == 1){
    alert(opcionElegida(entradaUsuario));
    inventario.leerDiario();
    }
    else if (entradaUsuario == 2){
    alert(opcionElegida(entradaUsuario));
    } 
    else {
    alert("No elegiste ninguna opcion, acaso no queres ver como sigue la historia?");
}
break;
}

// //Función para definir la elección 
function opcionElegida(numeroElegido){
         //Transformamos la elección en el índice de la lista
let indice = numeroElegido - 1;
    //Retornamos la consecuencia de dicha eleccion
return consecuencias[indice];
}
