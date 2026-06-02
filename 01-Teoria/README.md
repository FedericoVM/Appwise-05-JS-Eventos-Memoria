# ⏱️ El Tiempo y la Persistencia

> El navegador tiene memoria. Nosotros le enseñamos a usarla.

---

## 🕐 PARTE 1 — El Tiempo (Temporizadores)

JavaScript puede ejecutar código después de un tiempo o de forma repetida. Para eso existen dos herramientas clave:

### `setTimeout(fn, ms)` — "Hacelo una vez, después de X ms"

```js
const miTimeout = setTimeout(() => {
  console.log("¡Han pasado 2 segundos!");
}, 2000);
```

- Ejecuta la función **una sola vez** después del retardo.
- Retorna un **ID** que podés usar para cancelarlo antes de que se ejecute.

### `setInterval(fn, ms)` — "Hacelo cada X ms, hasta que lo detengas"

```js
const intervalo = setInterval(() => {
  console.log("Tick...");
}, 1000);
```

- Ejecuta la función **repetidamente** cada X milisegundos.
- Corre indefinidamente **hasta que se llame `clearInterval`** con su ID.
- Retorna un **ID** que es esencial guardar para poder detenerlo.

### `clearTimeout(id)` y `clearInterval(id)` — "Pará todo"

```js
// Detener un setInterval en marcha
clearInterval(intervalo);

// Cancelar un setTimeout que todavía no se ejecutó
clearTimeout(miTimeout);
```

Caso de uso real — cancelar una acción si el usuario hace click antes de que ocurra:

```js
const aviso = setTimeout(() => {
  mostrarAlerta("¡Tu sesión expiró!");
}, 5000);

botonActividad.addEventListener("click", () => {
  clearTimeout(aviso); // el usuario sigue activo, cancelamos la alerta
});
```

> ⚠️ **Regla de oro**: siempre guardá el ID del intervalo/timeout en una variable. Si no podés apagarlo, tenés una fuga de memoria.

---

## 💾 PARTE 2 — La Persistencia (localStorage)

`localStorage` es una mini base de datos que vive en el navegador. Los datos **sobreviven al cierre de la pestaña** y hasta al reinicio del navegador.

### API básica

| Método                                   | ¿Qué hace?                           |
| ---------------------------------------- | ------------------------------------ |
| `localStorage.setItem("clave", "valor")` | Guarda un string                     |
| `localStorage.getItem("clave")`          | Lee el valor (o `null` si no existe) |
| `localStorage.removeItem("clave")`       | Borra esa clave                      |
| `localStorage.clear()`                   | Borra TODO el storage                |

### Ejemplos de `removeItem` y `clear`

```js
// Guardar preferencias de usuario
localStorage.setItem("tema", "oscuro");
localStorage.setItem("idioma", "es");

// Borrar solo una clave
localStorage.removeItem("tema"); // solo borra "tema", "idioma" sigue

// Cerrar sesión → limpiar todo
localStorage.clear(); // borra absolutamente todo
```

### ⚠️ Solo guarda strings

```js
// ❌ Esto guarda "[object Object]"
localStorage.setItem("usuario", { nombre: "Ana" });

// ✅ Esto funciona
localStorage.setItem("usuario", JSON.stringify({ nombre: "Ana" }));

// ✅ Para recuperarlo
const usuario = JSON.parse(localStorage.getItem("usuario"));
```

> **Regla de oro**: siempre `JSON.stringify()` al guardar objetos y `JSON.parse()` al recuperarlos.

### ⚠️ `JSON.parse` puede fallar — usá `try/catch`

Si el valor guardado en localStorage está corrupto o fue modificado manualmente, `JSON.parse` lanza un error que rompe la app.

```js
// ❌ Peligroso — si el valor está corrupto, explota
const datos = JSON.parse(localStorage.getItem("usuario"));

// ✅ Seguro
function leerStorage(clave) {
  try {
    return JSON.parse(localStorage.getItem(clave));
  } catch {
    console.warn(`Error al leer "${clave}" del storage. Se descartó el valor.`);
    localStorage.removeItem(clave); // limpiamos el valor corrupto
    return null;
  }
}
```

### ⚠️ localStorage tiene límite de capacidad

El almacenamiento está limitado a **~5MB por origen**. Si se supera, el navegador lanza un `QuotaExceededError`.

```js
try {
  localStorage.setItem("datos", JSON.stringify(datosGrandes));
} catch (e) {
  if (e.name === "QuotaExceededError") {
    console.error("No hay espacio suficiente en localStorage.");
  }
}
```

---

## 🧠 PARTE 3 — Combinando Tiempo + Persistencia

La magia ocurre cuando los unimos. A continuación, dos ejemplos progresivos.

### Ejemplo 1 — High Score que persiste entre sesiones

```js
function actualizarHighScore(puntajeActual) {
  const mejorPuntaje = Number(localStorage.getItem("highScore")) || 0;

  if (puntajeActual > mejorPuntaje) {
    localStorage.setItem("highScore", puntajeActual);
    console.log("🏆 ¡Nuevo récord!");
  }
}
```

### Ejemplo 2 — Cronómetro que recuerda su estado al recargar la página

```js
let segundos = Number(localStorage.getItem("cronometro")) || 0;
let intervalo = null;

function iniciar() {
  if (intervalo) return; // evitar múltiples intervalos
  intervalo = setInterval(() => {
    segundos++;
    localStorage.setItem("cronometro", segundos); // persistir cada tick
    console.log(`Tiempo: ${segundos}s`);
  }, 1000);
}

function detener() {
  clearInterval(intervalo);
  intervalo = null;
}

function reiniciar() {
  detener();
  segundos = 0;
  localStorage.removeItem("cronometro");
}
```

> Al recargar la página, `segundos` se inicializa desde el storage, retomando donde estaba.

---

## 🗂️ Diferencias rápidas: localStorage vs sessionStorage

|                           | `localStorage`        | `sessionStorage`                                  |
| ------------------------- | --------------------- | ------------------------------------------------- |
| Duración                  | Permanente            | Solo mientras dure la pestaña                     |
| Compartido entre pestañas | ✅ Sí                 | ❌ No                                             |
| Capacidad                 | ~5MB por origen       | ~5MB por origen                                   |
| Cuándo usarlo             | Preferencias, récords | Datos de formulario temporales, carrito de sesión |

`sessionStorage` tiene la **misma API** que `localStorage` (`setItem`, `getItem`, etc.), solo cambia el ciclo de vida de los datos.

```js
// Guardar datos solo para esta sesión de navegación
sessionStorage.setItem("paso_actual", "3");
```

---

## 📋 Resumen de Conceptos

| Concepto              | ¿Qué hace?                                                    |
| --------------------- | ------------------------------------------------------------- |
| `setTimeout(fn, ms)`  | Ejecuta `fn` **una vez** después de `ms` milisegundos         |
| `setInterval(fn, ms)` | Ejecuta `fn` **repetidamente** cada `ms` milisegundos         |
| `clearTimeout(id)`    | Cancela un timeout que todavía no se ejecutó                  |
| `clearInterval(id)`   | Detiene un intervalo en marcha                                |
| `localStorage`        | Persiste datos en el navegador como strings (permanente)      |
| `sessionStorage`      | Igual que localStorage pero solo dura la sesión de la pestaña |
| `JSON.stringify`      | Convierte objeto → string para guardar en storage             |
| `JSON.parse`          | Convierte string → objeto al recuperar del storage            |
| `try/catch` en parse  | Protege la app si el valor en storage está corrupto           |
