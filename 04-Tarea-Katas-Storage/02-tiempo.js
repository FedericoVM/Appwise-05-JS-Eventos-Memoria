/* ==========================================================================
   06 — Bloque 2: El Tiempo y Fechas (Timers & Date) | 10 Katas
   Foco: cálculos matemáticos para cronómetros y marcas de tiempo.
   Completá cada función RETORNANDO el valor pedido.
   ⚠️  NO uses console.log() — las funciones deben RETORNAR el resultado.
========================================================================== */

/* --------------------------------------------------------------------------
   KATA 1 — segundosAMinutos
   Convierte segundos a formato "MM:SS".
   Ej: 65 → "01:05" | 9 → "00:09" | 120 → "02:00"
-------------------------------------------------------------------------- */
function segundosAMinutos(s) {
  // TU CÓDIGO AQUÍ 👇
  let minutos = Math.floor(s / 60);
  let segundos = s % 60;

  const minutosFormato = minutos.toString().padStart(2, "0");
  const segundosFormato = segundos.toString().padStart(2, "0");

  return `${minutosFormato}:${segundosFormato}`;
}

/* --------------------------------------------------------------------------
   KATA 2 — msASegundos
   Convierte milisegundos a segundos redondos (hacia abajo).
   Ej: 3500 → 3 | 1000 → 1 | 999 → 0
-------------------------------------------------------------------------- */
function msASegundos(ms) {
  // TU CÓDIGO AQUÍ 👇
  let segundos = Math.floor(ms / 1000);
  return segundos;
}

/* --------------------------------------------------------------------------
   KATA 3 — esMasDeUnaHora
   Retorna true si los segundos superan los 3600 (una hora), false si no.
   Ej: 3601 → true | 3600 → false
-------------------------------------------------------------------------- */
function esMasDeUnaHora(s) {
  // TU CÓDIGO AQUÍ 👇
  if (s > 3600) {
    return true;
  } else {
    return false;
  }
}

/* --------------------------------------------------------------------------
   KATA 4 — obtenerAnio
   Retorna el año actual (número) usando el objeto Date.
   Ej: (en 2026) → 2026
-------------------------------------------------------------------------- */
function obtenerAnio() {
  // TU CÓDIGO AQUÍ 👇
  let anioActual = new Date().getFullYear();
  return anioActual;
}

/* --------------------------------------------------------------------------
   KATA 5 — diferenciaEnSegundos
   Recibe dos timestamps en ms y retorna cuántos segundos completos
   hay de diferencia entre ellos (positivo siempre).
   Ej: (5000, 8500) → 3
-------------------------------------------------------------------------- */
function diferenciaEnSegundos(inicio, fin) {
  // TU CÓDIGO AQUÍ 👇
  let diferenciaTiempo = Math.floor((fin - inicio) / 1000);
  return diferenciaTiempo;
}

/* --------------------------------------------------------------------------
   KATA 6 — formatearFechaCorta
   Recibe un objeto Date y retorna el string "DD/MM/YYYY".
   Ej: new Date(2026, 2, 30) → "30/03/2026"
   Tip: padStart(2, "0") para el día y el mes.
-------------------------------------------------------------------------- */
function formatearFechaCorta(date) {
  // TU CÓDIGO AQUÍ 👇

  const dia = String(date.getDate()).padStart(2, "0");
  const mes = String(date.getMonth() + 1).padStart(2, "0");
  const anio = date.getFullYear();

  return `${dia}/${mes}/${anio}`;
}

/* --------------------------------------------------------------------------
   KATA 7 — sumarDias
   Recibe un objeto Date y una cantidad de días. Retorna un nuevo Date
   sumándole esos días (útil para calcular vencimientos).
   Ej: (new Date(2026,0,1), 10) → Date equivalente al 11/01/2026
-------------------------------------------------------------------------- */
function sumarDias(date, dias) {
  // TU CÓDIGO AQUÍ 👇
  const nuevaFecha = new Date(date);
  nuevaFecha.setDate(nuevaFecha.getDate() + dias);
  return nuevaFecha;
}

/* --------------------------------------------------------------------------
   KATA 8 — esFinDeSemana
   Retorna true si el objeto Date cae en sábado (6) o domingo (0).
   Ej: new Date(2026, 2, 28) → true (sábado)
-------------------------------------------------------------------------- */
function esFinDeSemana(date) {
  // TU CÓDIGO AQUÍ 👇
  let fecha = new Date(date);
  let dia = fecha.getDay();
  if (dia === 6 || dia === 0) {
    return true;
  } else {
    return false;
  }
}

/* --------------------------------------------------------------------------
   KATA 9 — obtenerSaludo
   Retorna un saludo según la hora actual:
   - 6 a 12  → "Buenos días"
   - 12 a 20 → "Buenas tardes"
   - resto   → "Buenas noches"
-------------------------------------------------------------------------- */
function obtenerSaludo() {
  // TU CÓDIGO AQUÍ 👇
  let horaActual = new Date().getUTCHours();
  if (horaActual >= 6 && horaActual <= 12) {
    return "Buenos dias";
  } else if (horaActual > 12 && horaActual <= 20) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
}

/* --------------------------------------------------------------------------
   KATA 10 — tiempoRestante
   Convierte milisegundos en un objeto con minutos, segundos y ms restantes.
   Ej: 75500 → { min: 1, seg: 15, ms: 500 }
-------------------------------------------------------------------------- */
function tiempoRestante(ms) {
  // TU CÓDIGO AQUÍ 👇
  const miliseg = ms % 1000;
  const segundosTotales = Math.floor(ms / 1000);
  const min = Math.floor(segundosTotales / 60);
  const seg = segundosTotales % 60;

  return {
    min: min,
    seg: seg,
    ms: miliseg,
  };
}

// 🚨 ¡NO TOCAR! Exportación para los tests
module.exports = {
  segundosAMinutos,
  msASegundos,
  esMasDeUnaHora,
  obtenerAnio,
  diferenciaEnSegundos,
  formatearFechaCorta,
  sumarDias,
  esFinDeSemana,
  obtenerSaludo,
  tiempoRestante,
};
