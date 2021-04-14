// Funcion para crear la segunda situacion, la misma va a depender del objeto elegido en la instancia anterior.

function segundaSituacion (){
    contenedorJuego.innerHTML = `<div>
                                <img id= "img_pasto" src= "imagenes/placeholder_pasto.jpeg"  alt= "Esto es un placeholder del pasto">
                                <p id= "p_pasto">Si tan solo tuvieras algo con que cortar esta maleza...</p>
                                </div>
                                <div id="camino_div">
                                <p id= "p_camino"> Este camino se ve muy oscuro y peligroso...</p>
                                </div>`;

    if(inventario.find(elemento => elemento.nombre == "Cuchillo")){

        let pasto_img = document.getElementById("img_pasto");
        pasto_img.onclick = () => { 
            if (inventario[1].uso == true){

                localStorage.setItem("tramoB", "Situacion 2, tramo B");
                localStorage.getItem("tramoB");        
                            
                terceraSituacionTramoB();
                
                }
            }
        }

            else { 

                let camino_d = document.getElementById("camino_div");
                camino_d.onclick = () => { 
                    if (inventario[1].uso == true){

                        localStorage.setItem("tramoA", "Situacion 2, tramo A");
                        localStorage.getItem("tramoA");
                        
                        terceraSituacionTramoA();
                        
                        }
                    }
                }
            
            }