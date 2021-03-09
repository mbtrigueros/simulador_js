class Personaje {
    constructor(nombre, edad, arma){
        this.nombre = nombre;
        this.edad = parseInt(edad);
        this.arma = arma;
    }
}

let personajes = [];

personajes.push(new Personaje("Crash", 18, "Patada" ));
personajes.push(new Personaje("Sam", 6, "Garras"));
personajes.push(new Personaje("Harry", 17, "Abra Kadabra"));

personajes.sort(function (a, b) {
    if (a.nombre > b.nombre) {
    return 1;
    }
    if (a.nombre < b.nombre) {
    return -1;
    }
    return 0;
});

console.log(personajes);

