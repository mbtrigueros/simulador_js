// Funcion para crear la segunda situacion, la misma va a depender del objeto elegido en la instancia anterior.

function segundaSituacion (){
    document.getElementById("contenedor_juego").style = `background-image: url(imagenes/fondo_escena2.png);`
    contenedorJuego.innerHTML = `
                                <p id= "p_pasto">Si tan solo tuvieras algo con que cortar esta maleza...</p> 
                                <p id= "p_camino"> Este camino se ve muy oscuro y peligroso...</p>
                                `;

    if(inventario.find(elemento => elemento.nombre == "Cuchillo")){

        let pasto_img = document.getElementById("p_pasto");
        pasto_img.onclick = () => { 
            if (inventario[1].uso == true){   
                            
                terceraSituacionTramoB();
                
                }
            }
        }

            else { 

                let camino_d = document.getElementById("p_camino");
                camino_d.onclick = () => { 
                    if (inventario[1].uso == true){
                        
                        terceraSituacionTramoA();
                        
                        }
                    }
                }
            
            }