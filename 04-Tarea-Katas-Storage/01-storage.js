/* ==========================================================================
   05 — Bloque 1: JSON y Persistencia (Storage) | 10 Katas
   Foco: mover datos entre el código y la memoria del navegador.
   Completá cada función RETORNANDO el valor pedido.
   ⚠️  NO uses console.log() — las funciones deben RETORNAR el resultado.
========================================================================== */

/* --------------------------------------------------------------------------
   KATA 1 — empaquetar
   Recibe un objeto y retorna su versión en JSON string.
   Ej: { nombre: "Ana" } → '{"nombre":"Ana"}'
-------------------------------------------------------------------------- */
function empaquetar(obj) {
  // TU CÓDIGO AQUÍ 👇
  return JSON.stringify(obj);
}

/* --------------------------------------------------------------------------
   KATA 2 — desempaquetar
   Recibe un JSON string y retorna el objeto real.
   Ej: '{"nombre":"Ana"}' → { nombre: "Ana" }
-------------------------------------------------------------------------- */
function desempaquetar(str) {
  // TU CÓDIGO AQUÍ 👇
  return JSON.parse(str);
}

/* --------------------------------------------------------------------------
   KATA 3 — esJsonValido
   Retorna true si el texto es un JSON que no rompe al parsear,
   false si lanza un error.
   Ej: '{"a":1}' → true | 'hola mundo' → false
-------------------------------------------------------------------------- */
function esJsonValido(str) {
  // TU CÓDIGO AQUÍ 👇
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

/* --------------------------------------------------------------------------
   KATA 4 — existeClave
   Recibe un objeto de configuración y una clave (string).
   Retorna true si esa clave existe en el objeto, false si no.
   Ej: ({ tema: "oscuro" }, "tema") → true
-------------------------------------------------------------------------- */
function existeClave(config, key) {
  // TU CÓDIGO AQUÍ 👇
  let existeClave = Object.keys(config);
  if (existeClave[0] === key) {
    return true;
  } else {
    return false;
  }
}

/* --------------------------------------------------------------------------
   KATA 5 — serializarLista
   Convierte un array de nombres en un string separado por comas.
   Ej: ["Ana", "Luis", "Marta"] → "Ana,Luis,Marta"
-------------------------------------------------------------------------- */
function serializarLista(arr) {
  // TU CÓDIGO AQUÍ 👇
  let pasarString = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      pasarString += arr[i];
    } else {
      pasarString += `${arr[i]},`;
    }
  }

  return pasarString;
}

/* --------------------------------------------------------------------------
   KATA 6 — limpiarNulos
   Filtra un array eliminando los valores null o undefined.
   Ej: ["Ana", null, "Luis", undefined] → ["Ana", "Luis"]
-------------------------------------------------------------------------- */
function limpiarNulos(arr) {
  // TU CÓDIGO AQUÍ 👇
  let nuevoArray = arr.filter((item) => {
    return item;
  });
  return nuevoArray;
}

/* --------------------------------------------------------------------------
   KATA 7 — fusionarConfig
   Une las preferencias del usuario con valores por defecto.
   Las propiedades del usuario tienen prioridad sobre las del default.
   Ej: ({ tema: "claro" }, { tema: "oscuro", idioma: "es" })
       → { tema: "claro", idioma: "es" }
-------------------------------------------------------------------------- */
function fusionarConfig(user, def) {
  // TU CÓDIGO AQUÍ 👇
  if (user.tema != def.tema) {
    def.tema = user.tema;
  }

  return def;
}

/* --------------------------------------------------------------------------
   KATA 8 — contarPropiedades
   Retorna cuántas propiedades tiene el objeto.
   Ej: { a: 1, b: 2, c: 3 } → 3
-------------------------------------------------------------------------- */
function contarPropiedades(obj) {
  // TU CÓDIGO AQUÍ 👇
  let contador = 0;
  const objeto = obj;
  for (const key in objeto) {
    ++contador;
  }
  return contador;
}

/* --------------------------------------------------------------------------
   KATA 9 — claveAEmojis
   Convierte el string "true" en "✅" y "false" en "❌".
   Cualquier otro valor retorna "❓".
   Ej: "true" → "✅" | "false" → "❌" | "otro" → "❓"
-------------------------------------------------------------------------- */
function claveAEmojis(str) {
  // TU CÓDIGO AQUÍ 👇
  if (str === "true") {
    return "✅";
  } else if (str === "false") {
    return "❌";
  } else {
    return "❓";
  }
}

/* --------------------------------------------------------------------------
   KATA 10 — clonarSeguro
   Retorna una copia profunda del objeto usando el truco de JSON
   (stringify → parse). El clon no debe estar conectado al original.
   Ej: { x: 1 } → { x: 1 } (otro objeto, mismos valores)
-------------------------------------------------------------------------- */
function clonarSeguro(obj) {
  // TU CÓDIGO AQUÍ 👇
  let copiaObj = JSON.stringify(obj);
  return JSON.parse(copiaObj);
}

// 🚨 ¡NO TOCAR! Exportación para los tests
module.exports = {
  empaquetar,
  desempaquetar,
  esJsonValido,
  existeClave,
  serializarLista,
  limpiarNulos,
  fusionarConfig,
  contarPropiedades,
  claveAEmojis,
  clonarSeguro,
};
