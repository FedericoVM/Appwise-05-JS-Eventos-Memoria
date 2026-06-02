/* ==========================================================================
   🐭 WHACK-A-MOLE — Tu turno de construirlo
   Conceptos: setInterval, clearInterval, setTimeout, localStorage

   INSTRUCCIONES GENERALES:
   - Hay 8 pasos numerados. Hacelos en orden, uno a la vez.
   - Abrí el index.html en el navegador para ver el resultado en vivo.
   - Usá console.log() para depurar si algo no funciona.
   - ¡No te saltes ningún paso! Cada uno depende del anterior.
========================================================================== */

// ============================================================
// 📦 VARIABLES DE ESTADO — Ya están escritas, no las toques
// Estas variables guardan la "memoria" del juego en todo momento.
// ============================================================
let puntaje = 0;
let tiempoRestante = 30;
let intervaloTopo = null; // Va a guardar el ID del setInterval de los topos
let intervaloTimer = null; // Va a guardar el ID del setInterval del reloj
let juegoActivo = false;
let hoyoActivo = null; // El hoyo que tiene el topo visible en este momento

// ============================================================
// 🔌 CONEXIONES AL DOM — Ya están escritas, no las toques
// ============================================================
const displayPuntaje = document.querySelector("#puntaje");
const displayTiempo = document.querySelector("#tiempo");
const displayHighScore = document.querySelector("#high-score");
const btnIniciar = document.querySelector("#btn-iniciar");
const hoyos = document.querySelectorAll(".hoyo");
const mensajeFinal = document.querySelector("#mensaje-final");
const textoFinal = document.querySelector("#texto-final");

// ============================================================
// PASO 1 — Cargar el High Score desde localStorage
// ============================================================
// Objetivo: al abrir la página, mostrar el mejor puntaje guardado.
//
// Tip: localStorage.getItem("whack-highscore") te devuelve el valor
//      guardado, o null si nunca se guardó nada antes.
// Tip: Asigná ese valor a displayHighScore.textContent.
//      Si es null, mostrá "0" en su lugar.
// ============================================================
function cargarHighScore() {
  // TU CÓDIGO AQUÍ 👇
}

// ============================================================
// PASO 2 — Guardar el High Score si se rompe el récord
// ============================================================
// Objetivo: comparar el puntaje actual con el récord guardado.
//           Si el actual es mayor: guardarlo y retornar true.
//           Si no: retornar false (sin cambiar nada).
//
// Tip: Number(localStorage.getItem("whack-highscore")) || 0
//      convierte el string guardado a número. El || 0 evita NaN.
// Tip: localStorage.setItem("clave", valor) guarda el nuevo récord.
// Tip: Esta función debe retornar true o false (lo usa terminarPartida).
// ============================================================
function actualizarHighScore() {
  // TU CÓDIGO AQUÍ 👇
}

// ============================================================
// PASO 3 — Elegir un hoyo al azar
// ============================================================
// Objetivo: retornar uno de los 9 hoyos del array de forma aleatoria.
//
// Tip: hoyos es un NodeList con 9 elementos (índices 0 a 8).
// Tip: Math.random() da un número entre 0 y 1 (sin llegar a 1).
//      Multiplicalo por hoyos.length y usá Math.floor() para
//      obtener un índice entero aleatorio.
// Tip: retorná hoyos[indice].
// ============================================================
function hoyoAleatorio() {
  // TU CÓDIGO AQUÍ 👇
}

// ============================================================
// PASO 4 — Hacer aparecer un topo
// ============================================================
// Objetivo: mostrar el topo en un hoyo y ocultarlo solo después de 800ms.
//
// Pasos:
//   1. Si hoyoActivo no es null, quitale la clase "visible"
//      (el topo anterior baja antes de que suba el nuevo).
//   2. Llamá a hoyoAleatorio() y asignalo a hoyoActivo.
//   3. Agregale la clase "visible" a hoyoActivo (el topo sube).
//   4. Usá setTimeout(() => { ... }, 800) para ocultar el topo
//      después de 800ms — pero solo si hoyoActivo sigue siendo
//      ese mismo hoyo (si fue golpeado, ya es null).
//
// Tip: classList.add("visible") / classList.remove("visible")
// Tip: setTimeout ejecuta código una sola vez después de N ms.
// ============================================================
function mostrarTopo() {
  // TU CÓDIGO AQUÍ 👇
}

// ============================================================
// PASO 5 — Detectar el golpe al topo
// ============================================================
// Objetivo: sumar 1 punto cuando el jugador hace clic en un topo visible.
//
// Pasos:
//   1. Si !juegoActivo, salí de la función con return (el juego no está corriendo).
//   2. Guardá el hoyo clickeado: const hoyo = evento.currentTarget
//   3. Si el hoyo NO tiene la clase "visible", salí con return
//      (el jugador clickeó tierra, no vale).
//   4. Sumale 1 a puntaje y mostralo en displayPuntaje.textContent.
//   5. Quitale "visible" y agregale "golpeado" (efecto visual).
//   6. Usá setTimeout para quitarle "golpeado" después de 300ms.
//   7. Poné hoyoActivo = null (así el topo no cuenta doble).
// ============================================================
function golpearTopo(evento) {
  // TU CÓDIGO AQUÍ 👇
}

// ============================================================
// PASO 6 — Iniciar la partida
// ============================================================
// Objetivo: resetear el estado y arrancar los dos setInterval.
//
// Pasos:
//   1. Reseteá las variables: puntaje = 0, tiempoRestante = 30, juegoActivo = true.
//   2. Actualizá los displays y ocultá el mensajeFinal (clase "oculto").
//   3. Deshabilitá el botón: btnIniciar.disabled = true.
//   4. Llamá a mostrarTopo() una vez ya (para que aparezca al instante).
//   5. Creá el intervalo de topos con setInterval(mostrarTopo, 900)
//      y guardá su ID en intervaloTopo.
//   6. Creá el intervalo del reloj con setInterval(callback, 1000)
//      y guardá su ID en intervaloTimer. Dentro del callback:
//        a. Restale 1 a tiempoRestante y mostralo en displayTiempo.
//        b. Si tiempoRestante llega a 0, llamá a terminarPartida().
//
// Tip: guardá SIEMPRE el ID del setInterval para poder detenerlo después.
// ============================================================
function iniciarPartida() {
  // TU CÓDIGO AQUÍ 👇
}

// ============================================================
// PASO 7 — Terminar la partida
// ============================================================
// Objetivo: detener los intervalos, mostrar el resultado y el récord.
//
// Pasos:
//   1. Poné juegoActivo = false.
//   2. Detené los dos intervalos con clearInterval(intervaloTopo)
//      y clearInterval(intervaloTimer).
//   3. Si hoyoActivo no es null, quitale "visible" y poné hoyoActivo = null.
//   4. Llamá a actualizarHighScore() y guardá el resultado en una variable.
//      (te dice si fue récord o no).
//   5. Según ese resultado, asigná un mensaje a textoFinal.textContent.
//   6. Quitale la clase "oculto" a mensajeFinal para mostrarlo.
//   7. Habilitá el botón de nuevo y cambiá su texto a "🔄 Jugar de nuevo".
// ============================================================
function terminarPartida() {
  // TU CÓDIGO AQUÍ 👇
}

// ============================================================
// PASO 8 — Conectar los eventos
// ============================================================
// Objetivo: que los clics funcionen de verdad.
//
// Pasos:
//   1. Agregale un addEventListener "click" a btnIniciar que llame a iniciarPartida.
//   2. Recorrré el array hoyos con forEach y a cada hoyo
//      agregale un addEventListener "click" que llame a golpearTopo.
//
// Tip: hoyos.forEach((hoyo) => { ... })
// ============================================================

// TU CÓDIGO AQUÍ 👇

// ============================================================
// 🚀 ARRANQUE — Ya está escrito, no lo toques
// ============================================================
cargarHighScore();
