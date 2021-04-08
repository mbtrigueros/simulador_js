const URLJSON = "js/data.json";

// Clase Herramienta

class Herramienta {
    constructor(datos){
        this.nombre = datos.nombre;
        this.imagen = datos.imagen;
        this.uso = false;
        this.ver = false;
        this.bateria = parseInt(datos.bateria);
    }
    
    // Compruebo si el elemento tiene bateria, y si la tiene, que tenga un valor mayor a cero para poder usar el mismo.
    usar(){ 
        if (this.bateria > 0){
        this.uso = true;
    }
        else if(this.bateria != 0){
            this.uso = true;
        }

    this.bateria--;}

    dejarDeUsar(){
        this.uso = false;
    }

    mirar(){
        this.ver = true;
    }
    
    dejarDeMirar(){
        this.ver = false;
    }
    
}