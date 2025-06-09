// Referencias a los elementos
const selector1 = document.getElementById('selector1');
const titulo1 = document.getElementById('div_titulo1');
const selector2 = document.getElementById('selector2');
const titulo2 = document.getElementById('div_titulo2');
const resultado1 = document.getElementById('resultado1');
const tituloResul1 = document.getElementById('div_resultado1');
const resultado2 = document.getElementById('resultado2');
const tituloResul2 = document.getElementById('div_resultado2');
const btnIniciar = document.getElementById('btn-iniciar');
const pantallaInicial = document.getElementById('pantalla-inicial');
const btnSiguiente = document.getElementById('btn-siguiente');
const btnTerminar = document.getElementById('btn-terminar');

function ocultarTodo() {
  document.getElementById('selector1').classList.add('oculto');
  document.getElementById('selector2').classList.add('oculto');
  document.getElementById('resultado1').classList.add('oculto');
  document.getElementById('resultado2').classList.add('oculto');
}

ocultarTodo(); 

function ocultarEstados() {
  // Ocultar imágenes de ganador y perdedor
  document.getElementById('img-ganador-j1').classList.add('oculto');
  document.getElementById('img-perdedor-j1').classList.add('oculto');
  document.getElementById('img-ganador-j2').classList.add('oculto');
  document.getElementById('img-perdedor-j2').classList.add('oculto');
  // Ocultar imagen de empate
  document.getElementById('img-empate').classList.add('oculto');
  
  // Ocultar los contenedores
  document.getElementById('estado-jugador1').classList.add('oculto');
  document.getElementById('estado-jugador2').classList.add('oculto');
  document.getElementById('celda-empate').classList.add('oculto');
}


btnIniciar.addEventListener('click', () => {
  // Ocultamos la pantalla inicial
  pantallaInicial.classList.add('oculto');
  alert("Indicaciones: Posiciona el mouse (en PC) o toca la pantalla (en móvil) sobre la imagen para iniciar la rotación. Cuando aparezca la opción que deseas, haz clic o toca nuevamente para seleccionarla.");
  // Iniciamos el turno del Jugador 1
  mostrarMensaje("Turno para el jugador 1")
  mostrarSelector1();
});


// Mostrar el botón Siguiente ronda cuando termina la ronda
function mostrarBotonContinuar() {
  btnSiguiente.classList.remove('oculto');
  btnTerminar.classList.remove('oculto');  
}

// Ocultar ambos botones
function ocultarBotones() {
  btnSiguiente.classList.add('oculto');
  btnTerminar.classList.add('oculto');
}

// Listener para botón Siguiente ronda
btnSiguiente.addEventListener('click', () => {
  prepararNuevaRonda();
  ocultarBotones();
  mostrarMensaje("Turno para el jugador 1");
});

function mostrarSelector1() {
  selector1.classList.remove('oculto');
  titulo1.classList.remove('oculto');
  selector2.classList.add('oculto');
  titulo2.classList.add('oculto');
  resultado1.classList.add('oculto');
  tituloResul1.classList.add('oculto');
  resultado2.classList.add('oculto');
  tituloResul2.classList.add('oculto');
}

function mostrarSelector2() {
  selector1.classList.add('oculto');
  titulo1.classList.add('oculto');
  selector2.classList.remove('oculto');
  titulo2.classList.remove('oculto');
  resultado1.classList.add('oculto');
  tituloResul1.classList.add('oculto');
  resultado2.classList.add('oculto');
  tituloResul2.classList.add('oculto')
}

function mostrarResultados() {
  selector1.classList.add('oculto');
  titulo1.classList.add('oculto');
  selector2.classList.add('oculto');
  titulo2.classList.add('oculto');
  resultado1.classList.remove('oculto');
  tituloResul1.classList.remove('oculto');
  resultado2.classList.remove('oculto');
  tituloResul2.classList.remove('oculto');
}

let eleccionJugador1 = null;

// Agregar listeners a las imágenes de selector1
document.querySelectorAll('#selector1 img').forEach(img => {
  img.addEventListener('click', () => {
    eleccionJugador1 = img.dataset.valor; // Guardamos la elección (Piedra, Papel, Tijera)

    // Mostrar solo la imagen seleccionada
    document.querySelectorAll('#selector1 img').forEach(i => i.classList.remove('visible'));
    img.classList.add('visible');

    // Ocultar selector1 y mostrar selector2
    mostrarMensaje("Turno para el jugador 2")
    mostrarSelector2();
  });
});

function iniciarRotacion(selectorId) {
  const selector = document.getElementById(selectorId);
  const imagenes = selector.querySelectorAll('img');
  let currentIndex = 0;
  let intervalo;

  const mostrarImagen = (index) => {
    imagenes.forEach((img, i) => {
      img.classList.toggle('visible', i === index);
    });
  };

  selector.addEventListener('mouseenter', () => {
    intervalo = setInterval(() => {
      currentIndex = (currentIndex + 1) % imagenes.length;
      mostrarImagen(currentIndex);
    }, 1600); // cambia cada 1600 ms
  });

  selector.addEventListener('mouseleave', () => {
    clearInterval(intervalo);
  });

  // Detener rotación al hacer clic en alguna imagen (opcional)
  imagenes.forEach(img => {
    img.addEventListener('click', () => {
      clearInterval(intervalo);
    });
  });
}

// Activar rotación en ambos selectores
iniciarRotacion('selector1');
iniciarRotacion('selector2');

let eleccionJugador2 = null;

document.querySelectorAll('#selector2 img').forEach(img => {
  img.addEventListener('click', () => {
    eleccionJugador2 = img.dataset.valor;

    // Mostrar solo la imagen seleccionada
    document.querySelectorAll('#selector2 img').forEach(i => i.classList.remove('visible'));
    img.classList.add('visible');

    // Ocultar selectores
    document.getElementById('selector1').classList.add('oculto');
    document.getElementById('selector2').classList.add('oculto');
    titulo2.classList.add('oculto');

    // Mostrar resultados
    document.getElementById('resultado1').classList.remove('oculto');
    tituloResul1.classList.remove('oculto');
    document.getElementById('resultado2').classList.remove('oculto');
    tituloResul2.classList.remove('oculto');

    // Mostrar imágenes seleccionadas
    mostrarElecciones();

    evaluarGanador();
  });
});

function mostrarElecciones() {
  // Mostrar imagen seleccionada de Jugador 1
  document.querySelectorAll('#resultado1 img').forEach(img => {
    img.classList.toggle('visible', img.dataset.valor === eleccionJugador1);
  });

  // Mostrar imagen seleccionada de Jugador 2
  document.querySelectorAll('#resultado2 img').forEach(img => {
    img.classList.toggle('visible', img.dataset.valor === eleccionJugador2);
  });
}


let ronda = 1;
let puntuacion1 = 0;
let puntuacion2 = 0;
let rachas = { j1: 0, j2: 0 };

function evaluarGanador() {
  // Ocultar todas las imágenes de estados primero
  document.getElementById('estado-jugador1').classList.add('oculto');
  document.getElementById('estado-jugador2').classList.add('oculto');
  document.getElementById('celda-empate').classList.add('oculto');
  
  // Ocultar todas las imágenes dentro de los estados
  document.querySelectorAll('#estado-jugador1 img').forEach(img => img.classList.add('oculto'));
  document.querySelectorAll('#estado-jugador2 img').forEach(img => img.classList.add('oculto'));

  let ganador = '';

  if (eleccionJugador1 === eleccionJugador2) {
    // Empate
    puntuacion1 += 1;
    puntuacion2 += 1;
    rachas.j1 = 0;
    rachas.j2 = 0;

    // Ocultar celdas 10 y 11 para centrar imagen empate
    document.getElementById('celda10').style.display = 'none';
    document.getElementById('celda11').style.display = 'none';

    // Mostrar celda empate con imagen
    document.getElementById('celda-empate').classList.remove('oculto');

    ganador = 'empate';
  } else {
    // Mostrar los estados para ambos jugadores
    document.getElementById('estado-jugador1').classList.remove('oculto');
    document.getElementById('estado-jugador2').classList.remove('oculto');
    // Mostrar celdas 10 y 11 porque no hay empate
    document.getElementById('celda10').style.display = '';
    document.getElementById('celda11').style.display = '';

    // Ocultar celda empate
    document.getElementById('celda-empate').classList.add('oculto');

    // Resultado ganador jugador 1
    const ganaJugador1 =
      (eleccionJugador1 === 'Piedra' && eleccionJugador2 === 'Tijera') ||
      (eleccionJugador1 === 'Tijera' && eleccionJugador2 === 'Papel') ||
      (eleccionJugador1 === 'Papel' && eleccionJugador2 === 'Piedra');

    if (ganaJugador1) {
      puntuacion1 += 3;
      rachas.j1++;
      rachas.j2 = 0;

      if (rachas.j1 === 3) {
        puntuacion1 += 2; // bono
        alert(`🎁 Jugador 1 ganó 3 rondas seguidas y recibe BONO!`, true);
        rachas.j1 = 0;
      }

      // Mostrar imagen ganador y perdedor
      document.getElementById('img-ganador-j1').classList.remove('oculto');
      document.getElementById('img-perdedor-j2').classList.remove('oculto');
      
      // Activar animación de brinco en el jugador ganador
      mostrarGanador("j1");

    } else {
      puntuacion2 += 3;
      rachas.j2++;
      rachas.j1 = 0;

      if (rachas.j2 === 3) {
        puntuacion2 += 2; // bono
        alert(`🎁 Jugador 2 ganó 3 rondas seguidas y recibe BONO!`, true);
        rachas.j2 = 0;
      }

      // Mostrar imagen perdedor y ganador
      document.getElementById('img-perdedor-j1').classList.remove('oculto');
      document.getElementById('img-ganador-j2').classList.remove('oculto');

      // Activar animación de brinco en el jugador ganador
      mostrarGanador("j2");
    }
  }

  // Actualizar scores en la tabla y scoreboard (igual que antes)
  document.getElementById('score1').textContent = puntuacion1;
  document.getElementById('score2').textContent = puntuacion2;

  mostrarMensaje(`Ronda ${ronda} finalizada. <br>Haz clic en "Siguiente ronda" para continuar.`);
  mostrarBotonContinuar();

  ronda++;
}



function crearImagen(src) {
  const img = document.createElement('img');
  img.src = src;
  img.style.width = '100px';
  return img;
}

function mostrarMensaje(texto) {
  const mensaje = document.getElementById('mensaje-juego');
  mensaje.innerHTML = `<span style="
    background-color: #FFECB3; /* Amarillo pastel */
    border: 3px solid #FA8072; /* Contorno salmón */
    padding: 10px; /* Espacio interno */
    border-radius: 8px; /* Bordes redondeados */
    color: black; /* Texto negro para mejor contraste */
    font-weight: bold;
    display: inline-block;">
      ${texto}
  </span>`;
}

function prepararNuevaRonda() {
  // Ocultar resultados o imágenes de estado
  document.getElementById('resultado1').classList.add('oculto');
  tituloResul1.classList.add('oculto');
  document.getElementById('resultado2').classList.add('oculto');
  tituloResul2.classList.add('oculto');

  // Restaurar celdas 10 y 11 (si es necesario)
  const c10 = document.getElementById('celda10');
  const c11 = document.getElementById('celda11');
  c10.colSpan = 1;
  c11.style.display = '';

  // Ocultar imágenes de estado (ganador, perdedor, empate)
  document.getElementById('estado-jugador1').classList.add('oculto');
  document.getElementById('estado-jugador2').classList.add('oculto');
  document.getElementById('celda-empate').classList.add('oculto');

  // Ocultar imágenes individuales dentro de los estados
  document.querySelectorAll('#estado-jugador1 img').forEach(img => img.classList.add('oculto'));
  document.querySelectorAll('#estado-jugador2 img').forEach(img => img.classList.add('oculto'));

  // Limpiar elecciones
  eleccionJugador1 = null;
  eleccionJugador2 = null;

  // Mostrar selector1 para iniciar la ronda
  document.getElementById('selector1').classList.remove('oculto');
  titulo1.classList.remove('oculto');

  // Ocultar botones de control hasta que termine ronda
  document.getElementById('btn-siguiente').classList.add('oculto');
  document.getElementById('btn-terminar').classList.add('oculto');
}

document.getElementById('btn-terminar').addEventListener('click', () => {
    // Calcular el ganador final
    let resultadoFinal = "";
    if (puntuacion1 > puntuacion2) {
        resultadoFinal = "🏆 ¡Jugador 1 es el ganador final!";
    } else if (puntuacion2 > puntuacion1) {
        resultadoFinal = "🏆 ¡Jugador 2 es el ganador final!";
    } else {
        resultadoFinal = "🤝 ¡Empate! Ningún jugador ganó.";
    }

    // Mostrar resumen en alert y esperar confirmación
    alert(`🎮 Juego terminado\nRondas jugadas: ${ronda-1}\nPuntuación final:\nJugador 1: ${puntuacion1}\nJugador 2: ${puntuacion2}\n\n${resultadoFinal}`);

    // Restablecer el juego a su estado inicial
    ronda = 1;
    puntuacion1 = 0;
    puntuacion2 = 0;
    rachas.j1 = 0;
    rachas.j2 = 0;

    // Ocultar imágenes de resultados
    document.getElementById('img-ganador-j1').classList.add('oculto');
    document.getElementById('img-perdedor-j1').classList.add('oculto');
    document.getElementById('img-ganador-j2').classList.add('oculto');
    document.getElementById('img-perdedor-j2').classList.add('oculto');
    document.getElementById('img-empate').classList.add('oculto');

    // Limpiar mensaje de juego
    document.getElementById('mensaje-juego').innerHTML = "";

    // Ocultar botones hasta que empiece una nueva ronda
    document.getElementById('btn-siguiente').classList.add('oculto');
    document.getElementById('btn-terminar').classList.add('oculto');

    document.getElementById('score1').textContent = 0;
    document.getElementById('score2').textContent = 0;

    pantallaInicial.classList.remove('oculto');
    resultado1.classList.add('oculto');
    tituloResul1.classList.add('oculto');
    resultado2.classList.add('oculto');
    tituloResul2.classList.add('oculto');

});

//Animacion 
function mostrarGanador(jugador) {
    const imagenGanador = document.getElementById(`img-ganador-${jugador}`);
    imagenGanador.classList.add('ganador');

    // Detener el brinco después de 3 segundos
    setTimeout(() => {
        imagenGanador.classList.remove('ganador');
    }, 3000);
}

function configurarCarrusel(idSelector) {
    const selector = document.getElementById(idSelector);
    const imagenes = selector.querySelectorAll("img");
    let currentIndex = 0;
    let intervalo;
    let eleccionFijada = false;
    let esMovil = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent); // Detecta si es móvil

    function mostrarImagen(index) {
        imagenes.forEach(img => img.classList.remove("visible"));
        imagenes[index].classList.add("visible");
    }

    function activarCarrusel() {
        if (!eleccionFijada) {
            intervalo = setInterval(() => {
                currentIndex = (currentIndex + 1) % imagenes.length;
                mostrarImagen(currentIndex);
            }, esMovil ? 1600 : 1200); // Velocidad ajustada para móviles y PC
        }
    }

    function fijarEleccion() {
        clearInterval(intervalo);
        eleccionFijada = true;
        console.log(`Elección fijada: ${imagenes[currentIndex].alt}`);
    }

    if (esMovil) {
        selector.addEventListener("touchstart", activarCarrusel);
        selector.addEventListener("touchend", fijarEleccion);
    } else {
        selector.addEventListener("mouseenter", activarCarrusel); // Solo en PC
        selector.addEventListener("click", fijarEleccion);
    }
}

// Configurar carruseles para ambos jugadores
configurarCarrusel("selector1"); // Jugador 1
configurarCarrusel("selector2"); // Jugador 2
