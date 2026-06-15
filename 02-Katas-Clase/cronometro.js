/* ==========================================================================
   CRONÓMETRO — Lógica pura: Play, Pause, Reset
   Conceptos: setInterval, clearInterval, manipulación del DOM
========================================================================== */

// 1. EL ESTADO GLOBAL DEL CRONÓMETRO
// Necesitás dos variables: una para contar los segundos y otra para guardar el ID del intervalo
// Pista: el ID del intervalo debe arrancar en null
let segundos = 0;
let contadorSegundos = null;

// 2. AGARRAMOS LOS ELEMENTOS DEL HTML
// Seleccioná: #display, #btn-play, #btn-pause, #btn-reset
const display = document.getElementById("display");
const btnPlay = document.getElementById("btn-play");
const btnPause = document.getElementById("btn-pause");
const btnReset = document.getElementById("btn-reset");

// 3. HELPER — Convierte un número de segundos a formato "MM:SS"
// Pista: usá Math.floor para los minutos, el operador % para los segundos restantes
//        y padStart(2, "0") para agregar el cero inicial cuando sea necesario
function formatearTiempo(segs) {
  // Tu código acá

  const minutos = Math.floor(segs / 60);
  const segundosRestantes = segs % 60;

  const minutosFormateados = String(minutos).padStart(2, "0");
  const segundosFormateados = String(segundosRestantes).padStart(2, "0");

  return `${minutosFormateados}:${segundosFormateados}`;
}

// 4. FUNCIÓN PLAY — Arranca el cronómetro
// Pista: antes de crear el intervalo, verificá que no haya uno ya corriendo
//        Dentro del intervalo, incrementá los segundos y actualizá el display
//        Al final, deshabilitá el botón play y habilitá el de pause
function play() {
  // Tu código acá
  if (contadorSegundos === null) {
    contadorSegundos = setInterval(() => {
      ++segundos;
      display.textContent = formatearTiempo(segundos);
    }, 1000);

    btnPlay.disabled = true;
    btnPause.disabled = false;
  }
}

// 5. FUNCIÓN PAUSE — Pausa sin resetear el conteo
// Pista: detené el intervalo, poné su ID en null y actualizá los botones
function pause() {
  // Tu código acá
  if (contadorSegundos != null) {
    clearInterval(contadorSegundos);
    contadorSegundos = null;
  }
  btnPlay.disabled = false;
  btnPause.disabled = true;
}

// 6. FUNCIÓN RESET — Vuelve todo a cero
// Pista: detené el intervalo, reseteá los segundos, el display y los botones
function reset() {
  // Tu código acá
  clearInterval(contadorSegundos);
  display.textContent = `00:00`;
  if (contadorSegundos != null) {
    contadorSegundos = null;
  }
  btnPause.disabled = true;
}

// 7. CONECTAMOS LOS EVENTOS A LOS BOTONES
// Asociá cada botón con su función correspondiente
btnPlay.addEventListener("click", () => {
  play();
});

btnPause.addEventListener("click", () => {
  pause();
});

btnReset.addEventListener("click", () => {
  reset();
});
