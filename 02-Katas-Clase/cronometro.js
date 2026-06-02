/* ==========================================================================
   CRONÓMETRO — Lógica pura: Play, Pause, Reset
   Conceptos: setInterval, clearInterval, manipulación del DOM
========================================================================== */

// 1. EL ESTADO GLOBAL DEL CRONÓMETRO
// Necesitás dos variables: una para contar los segundos y otra para guardar el ID del intervalo
// Pista: el ID del intervalo debe arrancar en null

// 2. AGARRAMOS LOS ELEMENTOS DEL HTML
// Seleccioná: #display, #btn-play, #btn-pause, #btn-reset

// 3. HELPER — Convierte un número de segundos a formato "MM:SS"
// Pista: usá Math.floor para los minutos, el operador % para los segundos restantes
//        y padStart(2, "0") para agregar el cero inicial cuando sea necesario
function formatearTiempo(segs) {
  // Tu código acá
}

// 4. FUNCIÓN PLAY — Arranca el cronómetro
// Pista: antes de crear el intervalo, verificá que no haya uno ya corriendo
//        Dentro del intervalo, incrementá los segundos y actualizá el display
//        Al final, deshabilitá el botón play y habilitá el de pause
function play() {
  // Tu código acá
}

// 5. FUNCIÓN PAUSE — Pausa sin resetear el conteo
// Pista: detené el intervalo, poné su ID en null y actualizá los botones
function pause() {
  // Tu código acá
}

// 6. FUNCIÓN RESET — Vuelve todo a cero
// Pista: detené el intervalo, reseteá los segundos, el display y los botones
function reset() {
  // Tu código acá
}

// 7. CONECTAMOS LOS EVENTOS A LOS BOTONES
// Asociá cada botón con su función correspondiente
