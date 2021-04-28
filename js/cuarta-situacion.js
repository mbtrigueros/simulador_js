// TRAMO A 

// OPCION HABLAR

function opcionHabar () {
    
    let btn2 = document.getElementById("hablar");
    btn2.onclick = () => {
        document.getElementById("contenedor_juego").style = `background-image: url(imagenes/fondo_genLin1.png);`
        contenedorJuego.innerHTML = `<div id = "txt_tramoA_hablar"></div>`;    
    
    const texto_tramoA_hablar = new Typewriter('#txt_tramoA_hablar', {
        loop : false,
        delay : 10 
    });

    texto_tramoA_hablar.typeString('¡Te estabamos buscando! ¿Estás bien? Parece que tuviste un accidente... Toma este té, va a hacerte sentir mejor...')
    .pauseFor(5000)
    .callFunction(() => {
        contenedorJuego.innerHTML = `<div id = "txt_tramoA_hablar"></div>
        <div class= "botones_flex">
        <button class= "boton" id= "op1_TA_hablar">${opcionesTA_hablar[0]}</button>
        <button class= "boton" id= "op2_TA_hablar">${opcionesTA_hablar[1]}</button>
        </div>`;  

    $('.boton').css('opacity', '1');
    
    let btnop1 = document.getElementById("op1_TA_hablar");
    btnop1.onclick = () => {   
    
            contenedorJuego.innerHTML = `<div id = "txt_tramoA_si_no"></div>
                                    <div class="fondo-modal">
                                    <div class= "modal__">
                                    <img class= "imgs__" src= "imagenes/tramoA/aliens_int.png" alt= "secta turbia">
                                    </div>
                                    </div>
                                    </div>`;    
    
            const texto_tramoA_si_no = new Typewriter('#txt_tramoA_si_no', {
                loop : false,
            });
        
        texto_tramoA_si_no.typeString('Nos alegra que te hayas unido a nuestra comunidad...')
        .start();

    }

    let btnop2 = document.getElementById("op2_TA_hablar");
    btnop2.onclick = () => {
        if(inventario.find(elemento => elemento.nombre == "Palo")){
            contenedorJuego.innerHTML = `<div id = "txt_tramoA_no_si"></div>`;    
    
            const texto_tramoA_no_si = new Typewriter('#txt_tramoA_no_si', {
                loop : false,
            });
    texto_tramoA_no_si.typeString('No quiero tomar nada, quiero que me digan que pasó, y dónde está mi pareja... ¡no voy a dudar en matarlos! ¡malditos hippies!')
    .pauseFor(50)
    .deleteAll(15)
    .typeString('Es una pena que pienses así...')
    .callFunction(() => {
        contenedorJuego.innerHTML = 
                                    `<div id = "txt_tramoA_no_si"></div>
                                    <div class="fondo-modal">
                                    <div class= "modal__">
                                    <img class= "imgs__" src= "imagenes/tramoA/ritual-2.png" alt= "secta turbia">
                                    </div>
                                    </div>
                                    </div>`;   
    })

    .start();
        }
        else{
            contenedorJuego.innerHTML = `<div id = "txt_tramoA_no_no"></div>`;    
    
            const texto_tramoA_no_no = new Typewriter('#txt_tramoA_no_no', {
                loop : false,
            });
        texto_tramoA_no_no.typeString('Lo intentamos por las buenas... va a tener que ser por las malas. Es una lástima, realmente creímos que ibas a formar parte de nuestra familia...')
        .deleteAll(15)
        .callFunction(() => {
            oscurecerFondo();
            })
            .callFunction(() => {
                contenedorJuego.innerHTML = `<div id = "#txt_tramoA_no_no"></div>
                                            <div class= "botones_flex">
                                            <button class= "boton" id= "${volverAempezar[0].toLowerCase()}">${volverAempezar[0]}</button>
                                            <a href= index.html> <img class= "modal__cerrar" src= "cerrar.png" alt= "icono de cerrar"></a>
                                            </div>`;    
                $('.boton').css('opacity', '1');
                let btnSi = document.getElementById("si");
                btnSi.onclick = () => {
                    guardadoJuego();
                }
        })
        .typeString('Queres otra oportunidad?')
        .start();
        }
    }

    })

    .start();
    }
}

// OPCION ESCONDERSE

function opcionEsconderse(){
    
    let btn2 = document.getElementById("esconderse");
    btn2.onclick = () => {
        contenedorJuego.innerHTML = `<div id = "txt_tramoA_esconderse"></div>`;    
    
    const texto_tramoA_esconderse = new Typewriter('#txt_tramoA_esconderse', {
        loop : false,
    });
    
    texto_tramoA_esconderse.typeString('Mejor idea va a ser esconderse, y seguirlos...')
    .pauseFor(5000)
    .callFunction(() => {
        if(inventario.find(elemento => elemento.nombre == "Palo")){
    
            contenedorJuego.innerHTML = `
                                        <div id = "txt_tramoA_no_si"></div>
                                        <div class="fondo-modal">
                                        <div class= "modal__">
                                        <img class= "imgs__" src= "imagenes/tramoA/esconderse-si.png" alt= "gente discutiendo, cuerpo en el fondo">
                                        </div>
                                        </div>
                                        </div>`;    
    
            const texto_tramoAA_esconderse = new Typewriter('#txt_tramoAA_esconderse', {
                loop : false,
            });
    
            texto_tramoAA_esconderse.typeString('¿¿Eso es un cuerpo?? ¡Parece mi pareja...!')
            .pauseFor(5000)
            .deleteAll(15)
            .typeString('Estan hablando, se ven agitados... creo que es el mejor momento para atacar...')
            .pauseFor(2000)
            .callFunction(() => {
    
            contenedorJuego.innerHTML = `<div id = "txt_tramoA_si"></div>
            <img class= "imgs__" src= "imagenes/tramoA/esconderse-si-atac.png" alt= "ataque mortal!!!!!">`;    

        })
            const texto_tramoA_si = new Typewriter('#txt_tramoA_si', {
                loop : false,
            });


    texto_tramoA_si.typeString('Matas a ambos, en la desesperacion y miedo... vas a ver a tu novia, resulta que estaba viva, solo tuvo un accidente... VOS SOS EL ASESINO')
    .callFunction(() => {
        contenedorJuego.innerHTML = `
        <img class= "imgs__" src= "imagenes/tramoA/soselasesino.png" alt= "asesino en primer plano">`;  })
        .deleteAll(15)
        .callFunction(() => {
            oscurecerFondo();
            })
            .callFunction(() => {
                contenedorJuego.innerHTML = `<div id = "#txt_tramoA_no_no"></div>
                                            <div class= "botones_flex">
                                            <button class= "boton" id= "${volverAempezar[0].toLowerCase()}">${volverAempezar[0]}</button>
                                            <a href= index.html> <img class= "modal__cerrar" src= "cerrar.png" alt= "icono de cerrar"></a>
                                            </div>`;    
                $('.boton').css('opacity', '1');
                let btnSi = document.getElementById("si");
                btnSi.onclick = () => {
                    guardadoJuego();
                }
        })
        .typeString('Queres otra oportunidad?')
        .start();
    
        }

        else {
            contenedorJuego.innerHTML = `<div id = "txt_tramoAA_esconderse"></div>`;    
    
            const texto_tramoAA_esconderse = new Typewriter('#txt_tramoAA_esconderse', {
                loop : false,

            });
    
            texto_tramoAA_esconderse.typeString('Mejor idea va a ser esconderse, y seguirlos...')
            .pauseFor(5000)
            .deleteAll(15)
            .typeString('Ves que se sacan unas mascaras... ¿¿¿¿¿¿¿¿SON ALIENS???????')
            .pauseFor(2000)
            .callFunction(() => {
            contenedorJuego.innerHTML = `<div id = "txt_tramoAA_esconderse"></div>
                                        <div class="fondo-modal">
                                        <div class= "modal__">
                                        <img class= "imgs__" src= "imagenes/tramoA/aliens_1.png" alt= "aliens">
                                        </div>
                                        </div>
                                        </div>  `;     
            })
    
    
            const texto_tramoA2_si = new Typewriter('#txt_tramoA2_si', {
                loop : false,
            });

        texto_tramoA2_si.typeString('Salis corriendo, pero sentis que algo te golpea por tu espalda, y ves un rayo de luz... ')
        .callFunction(() => {
            contenedorJuego.innerHTML = `
            <img class= "imgs__" src= "imagenes/tramoA/aliensfin.png" alt= "aliens en primer plano">`;  })
            .deleteAll(15)
            .callFunction(() => {
                oscurecerFondo();
                })
                .callFunction(() => {
                    contenedorJuego.innerHTML = `<div id = "#txt_tramoA_no_no"></div>
                                                <div class= "botones_flex">
                                                <button class= "boton" id= "${volverAempezar[0].toLowerCase()}">${volverAempezar[0]}</button>
                                                <a href= index.html> <img class= "modal__cerrar" src= "cerrar.png" alt= "icono de cerrar"></a>
                                                </div>`;    
                    $('.boton').css('opacity', '1');
                    let btnSi = document.getElementById("si");
                    btnSi.onclick = () => {
                        guardadoJuego();
                    }
            })
            
            .typeString('Queres otra oportunidad?')
            .start();
            }
        })
    .start();
        }
    }

    


// TRAMO B

// OPCION CORRER

// function opcionCorrer (){

//     let btn1 = document.getElementById("correr");
//     btn1.onclick = () => {
//         contenedorJuego.innerHTML = `<div id = "txt_tramoB_correr"></div>`;    
    
//     const texto_tramoB_correr = new Typewriter('#txt_tramoB_correr', {
//         loop : false,
//     });

//     texto_tramoB_correr.typeString('Te scuestran y moris')
//     .pauseFor(5000)
//     .deleteAll(15)
//     .typeString('Queres otra oportunidad?')
//     .callFunction(() => {
//         contenedorJuego.innerHTML = `<div id = "txt_tramoB_correr"></div>
//                                     <div class= "botones_flex">
//                                     <button class= "boton" id= "${volverAempezar[0].toLowerCase()}">${volverAempezar[0]}</button>
//                                     <a class = "boton" href = "index.html"><button class= "boton" id= "${volverAempezar[1].toLowerCase()}">${volverAempezar[1]}</button></a>
//                                     </div>`;    
//         $('.boton').css('opacity', '1');
//         let btnSi = document.getElementById("si");
//         btnSi.onclick = () => {
//             guardadoJuego();
//         }
    
//     })
//     .start();
//     }
// }

// OPCION HABLAR2

function opcionHablar2(){
    
let btn2 = document.getElementById("hablar");
btn2.onclick = () => {
    contenedorJuego.innerHTML = `<div id = "txt_tramoB_hablar"></div>`;    

const texto_tramoB_hablar = new Typewriter('#txt_tramoB_hablar', {
    loop : false,
});

texto_tramoB_hablar.typeString('Se desvanece. moribundo y dice...')
.pauseFor(5000)
.callFunction(() => {
    if(inventario.find(elemento => elemento.nombre == "Papel")){


        contenedorJuego.innerHTML = `<div id = "txt_tramoBB_hablar"></div>`;    

        const texto_tramoBB_hablar = new Typewriter('#txt_tramoBB_hablar', {
            loop : false,
        });

        texto_tramoBB_hablar.typeString('Corre!!!!')
        .pauseFor(5000)
        .deleteAll(15)
        .typeString('Luego de escapar de la trampa, se acerca un guardabosques...')
        .pauseFor(2000)
        .typeString('Oh, caiste en mi trampa para animales... necesitas ayuda? Tengo una cabania cerca, alli tengo un telefono para que uses...')
        .callFunction(() => {

        contenedorJuego.innerHTML = `<div id = "txt_tramoBB_hablar"></div>
        <div class= "botones_flex">
        <button class= "boton" id= "op1_TB_hablar">${opcionesTB_hablar[0]}</button>
        <button class= "boton" id= "op2_TB_hablar">${opcionesTB_hablar[1]}</button>
        </div>`;  

$('.boton').css('opacity', '1'); 

let btnop1 = document.getElementById("op1_TB_hablar");
btnop1.onclick = () => {
        contenedorJuego.innerHTML = `<div id = "txt_tramoB_si"></div>`;    

        const texto_tramoB_si = new Typewriter('#txt_tramoB_si', {
            loop : false,
        });
texto_tramoB_si.typeString('Espera.. me resultas familiar... oh no, vos sos el asesino!!!!!!')

.start();
    }

let btnop2 = document.getElementById("op2_TB_hablar");
btnop2.onclick = () => {
        contenedorJuego.innerHTML = `<div id = "txt_tramoB_no"></div>`;    

        const texto_tramoB_no = new Typewriter('#txt_tramoB_no', {
            loop : false,
        });
texto_tramoB_no.typeString('PUM!!!!!!! KE????')
.start();
    }
    })
    .start();
    }
    else {

        contenedorJuego.innerHTML = `<div id = "txt_tramoBB_hablar"></div>`;    

        const texto_tramoBB_hablar = new Typewriter('#txt_tramoBB_hablar', {
            loop : false,
        });

        texto_tramoBB_hablar.typeString('Ella... nos va a matar a todos...')
        .pauseFor(5000)
        .deleteAll(15)
        .typeString('Escuchas gritos, y esa persona te parece familiar...')
        .pauseFor(2000)
        .callFunction(() => {

        contenedorJuego.innerHTML = `<div id = "txt_tramoBB_hablar"></div>
        <div class= "botones_flex">
        <button class= "boton" id= "op1_TB2_hablar">${opcionesTB2_hablar[0]}</button>
        <button class= "boton" id= "op2_TB2_hablar">${opcionesTB2_hablar[1]}</button>
        </div>`;  

    $('.boton').css('opacity', '1'); 

let btnop1_2 = document.getElementById("op1_TB2_hablar");
btnop1_2.onclick = () => {
        contenedorJuego.innerHTML = `<div id = "txt_tramoB2_si"></div>`;    

        const texto_tramoB2_si = new Typewriter('#txt_tramoB2_si', {
            loop : false,
        });
texto_tramoB2_si.typeString('OH NO!!!!! Pero ella no habia muerto????? *DESMAYO*')
.start();

    }

let btnop2_2 = document.getElementById("op2_TB2_hablar");
btnop2_2.onclick = () => {
        contenedorJuego.innerHTML = `<div id = "txt_tramoB2_no"></div>`;    

        const texto_tramoB2_no = new Typewriter('#txt_tramoB2_no', {
            loop : false,
        });
texto_tramoB2_no.typeString('Mejor voy a buscar ayuda... ')
    .start(); 
}
})
.start(); 
}
    })
.start();
}
}


// OPCION ATACAR

// function opcionAtacar(){
    
//     let btn2 = document.getElementById("atacar");
//     btn2.onclick = () => {
//         contenedorJuego.innerHTML = `<div id = "txt_tramoB_atacar"></div>`;    
    
//     const texto_tramoB_atacar = new Typewriter('#txt_tramoB_atacar', {
//         loop : false,
//     });
    
//     texto_tramoB_atacar.typeString('Mejor acabar con esto, voy a agarrar el cuchillo...')
//     .pauseFor(5000)
//     .callFunction(() => {
//         if(inventario.find(elemento => elemento.nombre == "Papel")){
    
    
//             contenedorJuego.innerHTML = `<div id = "txt_tramoBB_atacar"></div>`;    
    
//             const texto_tramoBB_atacar = new Typewriter('#txt_tramoBB_atacar', {
//                 loop : false,
//             });
    
//             texto_tramoBB_atacar.typeString('NO!! No lo mates!!!!! Dijo, antes de caer muerto...')
//             .pauseFor(5000)
//             .deleteAll(15)
//             .typeString('Que haces?')
//             .pauseFor(2000)
//             .callFunction(() => {
    
//             contenedorJuego.innerHTML = `<div id = "txt_tramoBB_atacar"></div>
//             <div class= "botones_flex">
//             <button class= "boton" id= "op1_TB_atacar">${opcionesTB_atacar[0]}</button>
//             <button class= "boton" id= "op2_TB_atacar">${opcionesTB_atacar[1]}</button>
//             </div>`;  
    
//     $('.boton').css('opacity', '1'); 
    
//     let btnop1 = document.getElementById("op1_TB_atacar");
//     btnop1.onclick = () => {
//             contenedorJuego.innerHTML = `<div id = "txt_tramoB_si"></div>`;    
    
//             const texto_tramoB_si = new Typewriter('#txt_tramoB_si', {
//                 loop : false,
//             });
//     texto_tramoB_si.typeString('No... por favor no me mates... *RECUERDO* VOS SOS EL ASESINO, TE CAGO MATANDO FORRO')
    
//     .start();
//         }
    
//     let btnop2 = document.getElementById("op2_TB_atacar");
//     btnop2.onclick = () => {
//             contenedorJuego.innerHTML = `<div id = "txt_tramoB_no"></div>`;    
    
//             const texto_tramoB_no = new Typewriter('#txt_tramoB_no', {
//                 loop : false,
//             });
//     texto_tramoB_no.typeString('Seguime, tengo una idea de donde ir para salvarnos... *MENTIRA, TE VOY A MATAR ADIOS*')
//     .start();
//         }
//         })
//         .start();
//         }
//         else {
    
//             contenedorJuego.innerHTML = `<div id = "txt_tramoBB_atacar"></div>`;    
    
//             const texto_tramoBB_atacar = new Typewriter('#txt_tramoBB_atacar', {
//                 loop : false,
//             });
    
//             texto_tramoBB_atacar.typeString('Agarras el cuchillo y lo matas, sin piedad...')
//             .pauseFor(5000)
//             .deleteAll(15)
//             .typeString('Salis corriendo, y ves a uno de tus amigos muertos... parece que llegaste demasiado tarde... aparece otra persona, empapada en sangre... sera peligroso?')
//             .pauseFor(2000)
//             .callFunction(() => {
    
//             contenedorJuego.innerHTML = `<div id = "txt_tramoBB_atacar"></div>
//             <div class= "botones_flex">
//             <button class= "boton" id= "op1_TB2_atacar">${opcionesTB2_atacar[0]}</button>
//             <button class= "boton" id= "op2_TB2_atacar">${opcionesTB2_atacar[1]}</button>
//             </div>`;  
    
//         $('.boton').css('opacity', '1'); 
    
//     let btnop1_2 = document.getElementById("op1_TB2_atacar");
//     btnop1_2.onclick = () => {
//             contenedorJuego.innerHTML = `<div id = "txt_tramoB2_si"></div>`;    
    
//             const texto_tramoB2_si = new Typewriter('#txt_tramoB2_si', {
//                 loop : false,
//             });
//     texto_tramoB2_si.typeString('Lo matas, ya totalmente desenfrenado y asustado... ves a otro de tus amigos, quien te mira con temor... TE CONVERTISTE EN UN ASESINOOOOOOO')
//     .start();
    
//         }
    
//     let btnop2_2 = document.getElementById("op2_TB2_atacar");
//     btnop2_2.onclick = () => {
//             contenedorJuego.innerHTML = `<div id = "txt_tramoB2_no"></div>`;    
    
//             const texto_tramoB2_no = new Typewriter('#txt_tramoB2_no', {
//                 loop : false,
//             });
//     texto_tramoB2_no.typeString('Me estan persiguiendo!!!!!!!! - Ah, trank, ya mate al asesino... SURPRISE MATASTE AL EQUIVOCADO, ACA ESTOY')
//         .start(); 
//     }
//     })
//     .start(); 
//     }
//         })
//     .start();
//     }
//     }