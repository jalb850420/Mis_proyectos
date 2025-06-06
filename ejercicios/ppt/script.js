// alert("Hola mundo!")
// variable=prompt("Elige piedra, papel o tijera")

function inicializacion(){
    // const contenedor3 = document.getElementById('resultado');
    // ruta1='<div class="div-imagen-ajustada-empate"><img src="" alt="Imagen mostrada" class="imagen-ajustada-empate"></div>'
    // contenedor3.innerHTML = ruta1;
    // ruta2='<div class="div-diferente"><div><img src="img/ganador.png" alt="Imagen mostrada" class="imagen-ajustada-result"></div>'+'<div><img src=img/perdedor.png alt="Imagen mostrada" class="imagen-ajustada-result"></div></div>'
    // contenedor3.innerHTML = ruta;





    document.getElementById("Jug_1").textContent = "Jugador 1";
    document.getElementById("Jug_2").textContent = "Jugador 2";
    return new Promise(resolve => setTimeout(resolve, 50));
}

function eleccion(){
    sw=0
    do{
        switch (prompt("Elige: \n 1. piedra \n 2. papel \n 3. tijera \n\nDigita 1, 2 o 3")) {
            case "1":
                return "Piedra"
                // break;
            case "2":
                return "Papel"
                // break;
            case "3":
                return "Tijera"
                // break;
            default:
                alert("Digito una opcion incorrecta!")
                // sw=1
        }
    }while(true)
}

function actualizarPuntajeYEsperar(puntaje1, puntaje2) {
    document.getElementById("score_player1").textContent = puntaje1;
    document.getElementById("score_player2").textContent = puntaje2;
    // Forzar render antes de continuar
    return new Promise(resolve => setTimeout(resolve, 50));
}

 async function miFuncion() {
    ronda=0;
    play=true;
    puntos_jug1=0;
    puntos_jug2=0;
    swb1=0
    swb2=0
    bonus=0;
    while (play==true){
        alert("Es el turno del Jugador 1")
        // jug1=prompt("Elige: \n 1. piedra \n 2. papel \n 3. tijera \n\nDigita 1, 2 o 3");
        jug1=  eleccion();
        alert("Es el turno del Jugador 2")
        // jug2=prompt("Elige: \n 1. piedra \n 2. papel \n 3. tijera \n\nDigita 1, 2 o 3");
        // =================================================================================================
        // alert(eleccion())
        jug2=  eleccion();
        
        await inicializacion();
        // jug1=  asignacion(jug1);
        // jug2=  asignacion(jug2);
        await asig_img(jug1,jug2);
        switch (jug1) {
            case "Piedra":
                if(jug2=="Papel"){
                    await resultado(2);
                    alert("Gano el jugador 2")
                    puntos_jug2+=3
                    swb2+=1
                    swb1=0
                }else if(jug2=="Tijera"){
                    await resultado(1);
                    alert("Gano el jugador 1")
                    puntos_jug1+=3
                    swb1+=1
                    swb2=0
                }else if(jug1==jug2){
                    await resultado(0);
                    alert("Es un empate")
                    puntos_jug1+=1
                    puntos_jug2+=1
                }
                break;
            case "Papel":
                if(jug2=="Piedra"){
                    await resultado(1);
                    alert("Gano el jugador 1")
                    puntos_jug1+=3
                    swb1+=1
                    swb2=0
                }else if(jug2=="Tijera"){
                    await resultado(2);
                    alert("Gano el jugador 2")
                    puntos_jug2+=3
                    swb2+=1
                    swb1=0
                }else if(jug1==jug2){
                    await resultado(0);
                    alert("Es un empate")
                    puntos_jug1+=1
                    puntos_jug2+=1
                }
                break;
            case "Tijera":
                if(jug2=="Piedra"){
                    await resultado(2);
                    alert("Gano el jugador 2")
                    puntos_jug2+=3
                    swb2+=1
                    swb1=0
                }else if(jug2=="Papel"){
                    await resultado(1);
                    alert("Gano el jugador 1")
                    puntos_jug1+=3
                    swb1+=1
                    swb2=0
                }else if(jug1==jug2){
                    await resultado(0);
                    alert("Es un empate")
                    puntos_jug1+=1
                    puntos_jug2+=1
                }
                break;
            default:
                // Código si ningún caso coincide
        }
        // =================================================================================================
        // validacion bono
        if(swb1==3){
            puntos_jug1+=2
            alert("El Jugador 1 ha ganado un bono de 2 puntos adicionales por haber ganado tres manos seguidas!!!")
            swb1=0
            swb2=0
        }
        if(swb2==3){
            puntos_jug2+=2
            alert("El Jugador 2 ha ganado un bono de 2 puntos adicionales por haber ganado tres manos seguidas!!!")
            swb1=0
            swb2=0
        }
        // =================================================================================================
        if (confirm('Presiona "Aceptar" si deseas seguir jugando, de lo contrario presiona "Cancelar"')) {
            // alert("Si")
            play=true;
            ronda+=1;
            await actualizarPuntajeYEsperar(puntos_jug1, puntos_jug2);          
            // document.getElementById("score_player1").textContent = puntos_jug1;
            // document.getElementById("score_player2").textContent = puntos_jug2;
            message="Estado del juego:\nMano: "+jug1+" vr "+jug2+"\n# rondas: "+ronda+"\nPuntos Jug1: "+puntos_jug1+"\nPuntos Jug2: "+puntos_jug2;
            alert(message);
        }else{
            // alert("No")
            play=false
            if(puntos_jug1==puntos_jug2){
                final="Es un empate"
            }else if(puntos_jug1>puntos_jug2){
                final="El gran ganador es el Jugador 1"
            }else{
                final="El gran ganador es el Jugador 2"
            }
            document.getElementById("score_player1").textContent = puntos_jug1;
            document.getElementById("score_player2").textContent = puntos_jug2;

            message="Estado del juego:\nMano: "+jug1+" vr "+jug2+"\n# rondas: "+ronda+"\nPuntos Jug1: "+puntos_jug1+"\nPuntos Jug2: "+puntos_jug2+"\nVeredicto: "+final;
            alert(message);
        }
    }
}

// function asignacion(valor){
//     if(valor==1){
//         return "Piedra"
//     }else if(valor==2){
//         return "Papel"
//     }else if(valor==3){
//         return "Tijera"
//     }
// }

function img_jug1(jug1){
    switch (jug1) {
        case "Piedra":
            imagen="img/Piedraizq.png"
            break;
        case "Papel":
            imagen="img/Papelizq.png"
            break;
        case "Tijera":
            imagen="img/tijeraizq.png"
            break;
        default:
    }
    ruta = '<img src='+imagen+' alt="Imagen mostrada" class="imagen-ajustada">'
    return ruta 
}

function img_jug2(jug2){
    // const contenedor = document.getElementById('container_jug1');
    switch (jug2) {
        case "Piedra":
            imagen="img/Piedraderecha.png"
            break;
        case "Papel":
            imagen="img/Papelderecha.png"
            break;
        case "Tijera":
            imagen="img/tijeraderecha.png"
            break;
        default:
    }
    ruta = '<img src='+imagen+' alt="Imagen mostrada" class="imagen-ajustada">'
    return ruta 
}

async function asig_img(jug1,jug2){
    const contenedor1 = document.getElementById('container_jug1');
    ruta1= img_jug1(jug1)
    contenedor1.innerHTML = ruta1;

    const contenedor2 = document.getElementById('container_jug2');
    ruta2= img_jug2(jug2)
    contenedor2.innerHTML = ruta2;

    return new Promise(resolve => setTimeout(resolve, 50));
}

async function resultado(resul){
    const contenedor3 = document.getElementById('resultado');
    switch (resul) {
        case 0:
            ruta='<div class="div-imagen-ajustada-empate"><img src="img/empate.png" alt="Imagen mostrada" class="imagen-ajustada-empate"></div>'
            break;
        case 1:
            ruta='<div class="div-diferente"><div><img src="img/ganador.png" alt="Imagen mostrada" class="imagen-ajustada-result"></div>'+'<div><img src=img/perdedor.png alt="Imagen mostrada" class="imagen-ajustada-result"></div></div>'
            break;
        case 2:
            ruta='<div class="div-diferente"><div><img src=img/perdedor.png alt="Imagen mostrada" class="imagen-ajustada-result"></div>'+'<div><img src=img/ganador.png alt="Imagen mostrada" class="imagen-ajustada-result"></div></div>'
            break;
        default:
    }
    contenedor3.innerHTML = ruta;
    
    return new Promise(resolve => setTimeout(resolve, 50));
}



// function pruebaimagenes(){
//     const contenedor = document.getElementById('imagen-container');
//     imagen="img/Papelderecha.png";
//     // "img/Papelderecha.png"
//     // "img/Piedraderecha.png"
//     // "img/"
//     // "img/tijeraderecha.png"
//     // "img/"
//     ruta='<img src='+imagen+' alt="Imagen mostrada">'
//     contenedor.innerHTML = ruta;
// }





// function miprompt() {
//     ronda=0;
//     play=true;
//     puntos_jug1=0;
//     puntos_jug2=0;
//     swb1=0
//     swb2=0
//     bonus=0;
//     while (play==true){
//         alert("Es el turno del Jugador 1")
//         jug1=prompt("Elige: \n 1. piedra \n 2. papel \n 3. tijera \n\nDigita 1, 2 o 3");
//         alert("Es el turno del Jugador 2")
//         jug2=prompt("Elige: \n 1. piedra \n 2. papel \n 3. tijera \n\nDigita 1, 2 o 3");
//         // =================================================================================================
//         jug1=asignacion(jug1)
//         jug2=asignacion(jug2)
//         switch (jug1) {
//             case "Piedra":
//                 if(jug2=="Papel"){
//                     alert("Gano el jugador 2")
//                     puntos_jug2+=3
//                     swb2+=1
//                     swb1=0
//                 }else if(jug2=="Tijera"){
//                     alert("Gano el jugador 1")
//                     puntos_jug1+=3
//                     swb1+=1
//                     swb2=0
//                 }else if(jug1==jug2){
//                     alert("Es un empate")
//                     puntos_jug1+=1
//                     puntos_jug2+=1
//                 }
//                 break;
//             case "Papel":
//                 if(jug2=="Piedra"){
//                     alert("Gano el jugador 1")
//                     puntos_jug1+=3
//                     swb1+=1
//                     swb2=0
//                 }else if(jug2=="Tijera"){
//                     alert("Gano el jugador 2")
//                     puntos_jug2+=3
//                     swb2+=1
//                     swb1=0
//                 }else if(jug1==jug2){
//                     alert("Es un empate")
//                     puntos_jug1+=1
//                     puntos_jug2+=1
//                 }
//                 break;
//             case "Tijera":
//                 if(jug2=="Piedra"){
//                     alert("Gano el jugador 2")
//                     puntos_jug2+=3
//                     swb2+=1
//                     swb1=0
//                 }else if(jug2=="Papel"){
//                     alert("Gano el jugador 1")
//                     puntos_jug1+=3
//                     swb1+=1
//                     swb2=0
//                 }else if(jug1==jug2){
//                     alert("Es un empate")
//                     puntos_jug1+=1
//                     puntos_jug2+=1
//                 }
//                 break;
//             default:
//                 // Código si ningún caso coincide
//         }
//         // =================================================================================================
//         // validacion bono
//         if(swb1==3){
//             puntos_jug1+=2
//             alert("El Jugador 1 ha ganado un bono de 2 puntos adicionales por haber ganado tres manos seguidas!!!")
//             swb1=0
//             swb2=0
//         }
//         if(swb2==3){
//             puntos_jug2+=2
//             alert("El Jugador 2 ha ganado un bono de 2 puntos adicionales por haber ganado tres manos seguidas!!!")
//             swb1=0
//             swb2=0
//         }
//         // =================================================================================================
//         if (confirm('Presiona "Aceptar" si deseas seguir jugando, de lo contrario presiona "Cancelar"')) {
//             // alert("Si")
//             play=true
//             ronda+=1
//             message="Estado del juego:\nMano: "+jug1+" vr "+jug2+"\n# rondas: "+ronda+"\nPuntos Jug1: "+puntos_jug1+"\nPuntos Jug2: "+puntos_jug2
//             alert(message)
//         }else{
//             // alert("No")
//             play=false
//             if(puntos_jug1==puntos_jug2){
//                 final="Es un empate"
//             }else if(puntos_jug1>puntos_jug2){
//                 final="El gran ganador es el Jugador 1"
//             }else{
//                 final="El gran ganador es el Jugador 2"
//             }
//             message="Estado del juego:\nMano: "+jug1+" vr "+jug2+"\n# rondas: "+ronda+"\nPuntos Jug1: "+puntos_jug1+"\nPuntos Jug2: "+puntos_jug2+"\nVeredicto: "+final
//             alert(message)
//         }
//     }
    
    
    
//     // document.getElementById("miElemento").textContent = variable;
// }





// 1. piedra \n 2. papel \n 3. tijera

// piedra gana a tijera
// 1 - 3

// papel gana a piedra
// 2 - 1

// tijera gana a papel
// 3 - 2

// if ((jug1"piedra"=="piedra" && jug2 "Papel"=="Papel") || (jug1"Papel"=="Papel" && jug2 "piedra"=="piedra"))
// if (("piedra"=="piedra" && "Papel"=="Papel") || ("Papel"=="Papel" && "piedra"=="piedra")){
//     if ("piedra"=="piedra"){
//         alert("gano el jug1")
//     }else{
//         alert("gano el jug2")
//     }
// }



// switch (jug1) {
//     case "Piedra":
//         // Código si expresión === valor1
//         if(jug2=="Papel"){
//             alert("Gano el jugador 2")
//         }else if(jug2=="Tijera"){
//             alert("Gano el jugador 1")
//         }else if(jug1==jug2){
//             alert("Es un empate")
//         }
//         break;
//     case "Papel":
//         // Código si expresión === valor2
//         if(jug2=="Piedra"){
//             alert("Gano el jugador 1")
//         }else if(jug2=="Tijera"){
//             alert("Gano el jugador 2")
//         }else if(jug1==jug2){
//             alert("Es un empate")
//         }
//         break;
//     case "Tijera":
//         // Código si expresión === valor2
//         if(jug2=="Piedra"){
//             alert("Gano el jugador 2")
//         }else if(jug2=="Papel"){
//             alert("Gano el jugador 1")
//         }else if(jug1==jug2){
//             alert("Es un empate")
//         }
//         break;
//     default:
//         // Código si ningún caso coincide
// }




// function otroboton() {
//     // alert("boton dos");
//     // if (confirm("¿Estás seguro?")) {
//     //     alert("Si")
//     // }else{
//     //     alert("No")
//     // }
//     jug1=prompt("digite su opcion")
//     jug2=prompt("digite su opcion")
//     jug1=asignacion(jug1)
//     jug2=asignacion(jug2)
//     switch (jug1) {
//         case "Piedra":
//             if(jug2=="Papel"){
//                 alert("Gano el jugador 2")
//             }else if(jug2=="Tijera"){
//                 alert("Gano el jugador 1")
//             }else if(jug1==jug2){
//                 alert("Es un empate")
//             }
//             break;
//         case "Papel":
//             if(jug2=="Piedra"){
//                 alert("Gano el jugador 1")
//             }else if(jug2=="Tijera"){
//                 alert("Gano el jugador 2")
//             }else if(jug1==jug2){
//                 alert("Es un empate")
//             }
//             break;
//         case "Tijera":
//             if(jug2=="Piedra"){
//                 alert("Gano el jugador 2");
//             }else if(jug2=="Papel"){
//                 alert("Gano el jugador 1")
//             }else if(jug1==jug2){
//                 alert("Es un empate")
//             }
//             break;
//         default:
//             // Código si ningún caso coincide
//     }
   
   
//     // if ((jug1=="Piedra" && jug2=="Papel") || (jug1=="Papel" && jug2=="Piedra")){
//     //     if(jug1=="Piedra"){
//     //         alert("gano el jug1")
//     //     }else{
//     //         alert("gano el jug2")
//     //     }
//     // }else if (jug1==jug2){
//     //     alert("Es un empate")
//     // }
//     alert("Se termino la validacion")
//}
