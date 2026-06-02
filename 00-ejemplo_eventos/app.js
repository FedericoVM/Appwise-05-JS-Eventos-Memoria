// ============================================================
//  Helpers de visualización
// ============================================================
function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function step(label, html) {
  return `<div class="step"><span class="step-label">${label}</span>${html}</div>`;
}

function arrow(txt) {
  return `<div class="arrow">▼ ${txt}</div>`;
}

function ret(val, label = "↩ Retorna") {
  return `<div class="ret"><span class="ret-label">${label}:</span><code>${esc(val)}</code></div>`;
}

// ============================================================
//  DEMOS — EVENTOS, TIEMPO Y STORAGE
// ============================================================
const DEMOS_EVENTOS = [
  {
    emoji: "🖱️",
    titulo: "click & e.target",
    desc: "Se dispara cuando el usuario hace clic. El objeto <code>e.target</code> nos dice <strong>exactamente</strong> qué elemento HTML fue tocado.",
    codigo: `const btn = document.querySelector('#miBoton');\n\nbtn.addEventListener('click', (e) => {\n  console.log('Hiciste clic en:', e.target.tagName);\n});`,
    run() {
      const uid = Math.random().toString(36).slice(2);
      setTimeout(() => {
        const btn = document.getElementById(`btn-${uid}`);
        const out = document.getElementById(`res-${uid}`);
        let clics = 0;

        btn.addEventListener("click", (e) => {
          clics++;
          out.innerHTML = `
            ${arrow("¡Evento 'click' detectado!")}
            ${ret(`Clics: ${clics} | e.target: <${e.target.tagName.toLowerCase()}>`, "Info del evento")}
          `;
          btn.style.transform = "scale(0.95)";
          setTimeout(() => (btn.style.transform = "scale(1)"), 100);
        });
      }, 0);

      return `
        ${step("Área Interactiva", `<button id="btn-${uid}" style="padding:10px 20px; background:var(--green); color:#000; font-weight:bold; border-radius:5px; border:none; cursor:pointer; transition:0.1s;">¡Hacé Clic Acá!</button>`)}
        <div id="res-${uid}" style="min-height: 80px; margin-top: 10px;">
           <span style="color:var(--muted); font-size: 0.9em;">Esperando interacción...</span>
        </div>
      `;
    },
  },
  {
    emoji: "⌨️",
    titulo: "input (El Chismoso)",
    desc: "Se dispara <strong>cada vez</strong> que el valor cambia. Ideal para buscadores en tiempo real.",
    codigo: `const input = document.querySelector('#buscador');\n\ninput.addEventListener('input', (e) => {\n  console.log('Escribió:', e.target.value);\n});`,
    run() {
      const uid = Math.random().toString(36).slice(2);
      setTimeout(() => {
        const input = document.getElementById(`inp-${uid}`);
        const out = document.getElementById(`res-${uid}`);

        input.addEventListener("input", (e) => {
          console.log(e);
          out.innerHTML = ret(e.target.value, "e.target.value");
        });
      }, 0);

      return `
        ${step("Escribí algo:", `<input id="inp-${uid}" type="text" placeholder="Escribí aquí..." style="padding:8px; width:100%; border-radius:4px; border:1px solid var(--border); background:#222; color:white;">`)}
        <div id="res-${uid}" style="min-height: 50px; margin-top: 10px;">
           <span style="color:var(--muted); font-size: 0.9em;">Esperando que escribas...</span>
        </div>
      `;
    },
  },
  {
    emoji: "🎯",
    titulo: "mousemove",
    desc: "Se dispara continuamente. <code>e.clientX</code> y <code>e.clientY</code> dan las coordenadas del mouse.",
    codigo: `caja.addEventListener('mousemove', (e) => {\n  console.log('X:', e.clientX, 'Y:', e.clientY);\n});`,
    run() {
      const uid = Math.random().toString(36).slice(2);
      setTimeout(() => {
        const area = document.getElementById(`area-${uid}`);
        const coords = document.getElementById(`coords-${uid}`);

        area.addEventListener("mousemove", (e) => {
          const rect = area.getBoundingClientRect();
          const x = Math.round(e.clientX - rect.left);
          const y = Math.round(e.clientY - rect.top);
          coords.innerHTML = `<span style="color:var(--purple)">X: ${x}</span> | <span style="color:var(--green)">Y: ${y}</span>`;
        });

        area.addEventListener("mouseleave", () => {
          coords.innerHTML = "¡Volvé a entrar!";
        });
      }, 0);

      return `
        ${step(
          "Área Radar",
          `
          <div id="area-${uid}" style="width:100%; height:100px; background:#1e1e2e; border:2px dashed var(--purple); border-radius:8px; display:flex; justify-content:center; align-items:center; cursor:crosshair;">
            <strong id="coords-${uid}" style="font-family:monospace; font-size:1.2rem;">Mové el mouse acá adentro</strong>
          </div>
        `,
        )}
      `;
    },
  },
  {
    emoji: "🚀",
    titulo: "submit & preventDefault()",
    desc: "Atrapa el envío de un formulario. <code>e.preventDefault()</code> <strong>frena</strong> la recarga de la página.",
    codigo: `form.addEventListener('submit', (e) => {\n  e.preventDefault(); // ¡Frena la recarga!\n  console.log('Enviado por JS');\n});`,
    run() {
      const uid = Math.random().toString(36).slice(2);
      setTimeout(() => {
        const form = document.getElementById(`form-${uid}`);
        const out = document.getElementById(`res-${uid}`);

        form.addEventListener("submit", (e) => {
          e.preventDefault();
          out.innerHTML = `
            ${arrow("Se ejecutó e.preventDefault()")}
            ${step("Estado", "<span style='color:var(--green)'>¡La página no se recargó!</span>")}
          `;
        });
      }, 0);

      return `
        ${step(
          "Formulario",
          `
          <form id="form-${uid}" style="display:flex; gap:10px;">
            <input type="text" required placeholder="Tu nombre" style="padding:8px; border-radius:4px; border:1px solid var(--border); background:#222; color:white;">
            <button type="submit" style="padding:8px 15px; background:var(--purple); color:white; border:none; border-radius:4px; cursor:pointer;">Enviar</button>
          </form>
        `,
        )}
        <div id="res-${uid}" style="min-height: 60px; margin-top: 10px;"></div>
      `;
    },
  },
  {
    emoji: "⏱️",
    titulo: "setInterval",
    desc: "Ejecuta en bucle. Guardá su ID para frenarlo con <code>clearInterval()</code>.",
    codigo: `const latido = setInterval(() => {\n  console.log('Latido');\n}, 1000);\n\nclearInterval(latido);`,
    run() {
      const uid = Math.random().toString(36).slice(2);
      setTimeout(() => {
        const btnStart = document.getElementById(`start-${uid}`);
        const btnStop = document.getElementById(`stop-${uid}`);
        const out = document.getElementById(`res-${uid}`);

        let intervalo = null;
        let count = 0;

        btnStart.addEventListener("click", () => {
          if (intervalo) return;
          out.innerHTML = ret(count, "Contador");
          intervalo = setInterval(() => {
            count++;
            out.innerHTML = ret(count, "Contador");
          }, 1000);
        });

        btnStop.addEventListener("click", () => {
          clearInterval(intervalo);
          intervalo = null;
          out.innerHTML += arrow("¡clearInterval() ejecutado!");
        });
      }, 0);

      return `
        ${step(
          "Control de Tiempo",
          `
          <div style="display:flex; gap:10px;">
            <button id="start-${uid}" style="padding:8px 15px; background:var(--green); border:none; border-radius:4px; cursor:pointer;">▶ Empezar</button>
            <button id="stop-${uid}" style="padding:8px 15px; background:#e06c75; border:none; border-radius:4px; cursor:pointer;">⏹ Frenar</button>
          </div>
        `,
        )}
        <div id="res-${uid}" style="min-height: 60px; margin-top: 15px;"></div>
      `;
    },
  },
  {
    emoji: "💾",
    titulo: "LocalStorage",
    desc: "Guarda información que sobrevive al F5 de la página.",
    codigo: `localStorage.setItem('clave', 'valor');\nlet dato = localStorage.getItem('clave');`,
    run() {
      const uid = Math.random().toString(36).slice(2);
      setTimeout(() => {
        const btnSave = document.getElementById(`save-${uid}`);
        const btnLoad = document.getElementById(`load-${uid}`);
        const out = document.getElementById(`res-${uid}`);

        btnSave.addEventListener("click", () => {
          localStorage.setItem("demo_appwise_r", "Nivel 99");
          out.innerHTML = step(
            "Memoria",
            "<span style='color:var(--green)'>¡Guardado! 'demo_appwise_r' : 'Nivel 99'</span>",
          );
        });

        btnLoad.addEventListener("click", () => {
          const valor = localStorage.getItem("demo_appwise_r");
          out.innerHTML = ret(valor, "Valor recuperado");
        });
      }, 0);

      return `
        ${step(
          "Interacción",
          `
          <div style="display:flex; gap:10px;">
            <button id="save-${uid}" style="padding:8px; background:var(--purple); color:white; border:none; border-radius:4px; cursor:pointer;">1. setItem()</button>
            <button id="load-${uid}" style="padding:8px; background:#61afef; color:#000; border:none; border-radius:4px; cursor:pointer;">2. getItem()</button>
          </div>
        `,
        )}
        <div id="res-${uid}" style="min-height: 60px; margin-top: 15px;">
           <span style="color:var(--muted); font-size: 0.9em;">Guardá, apretá F5 y dale a Leer. ¡Sigue ahí!</span>
        </div>
      `;
    },
  },
];

// ============================================================
//  Motor de render
// ============================================================
const runners = {};

function renderSection(demos, containerId) {
  const container = document.getElementById(containerId);

  // 🔥 ¡LA SOLUCIÓN! Si el HTML no tiene este div, no rompas todo, solo salí de la función.
  if (!container) return;

  demos.forEach((demo) => {
    const id = Math.random().toString(36).slice(2);
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="card-header">
        <span class="card-emoji">${demo.emoji}</span>
        <div>
          <div class="card-title">${demo.titulo}</div>
          <div class="card-desc">${demo.desc}</div>
        </div>
      </div>
      <pre class="card-code">${esc(demo.codigo)}</pre>
      <div class="card-footer" style="margin-top:10px;">
        <button class="btn-run" onclick="ejecutar('${id}')">▶ Ejecutar Prueba</button>
      </div>
      <div class="output" id="out-${id}" style="margin-top:15px; display:none;"></div>
    `;

    container.appendChild(card);
    runners[id] = demo.run.bind(demo);
  });
}

// Función global atada al onclick de los botones
window.ejecutar = function (id) {
  const out = document.getElementById(`out-${id}`);
  out.style.display = "block";
  out.innerHTML = runners[id]();
  out.classList.remove("visible");
  void out.offsetWidth;
  out.classList.add("visible");
};

// ── Tabs ──────────────────────────────────────────────────
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    document
      .querySelectorAll(".grid")
      .forEach((g) => g.classList.add("hidden"));

    const targetDiv = document.getElementById(tab.dataset.target);
    if (targetDiv) targetDiv.classList.remove("hidden");
  });
});

// ── Init ──────────────────────────────────────────────────
// Si usas los otros archivos, dejalos. Si no existen en el HTML, ya no rompen nada.
if (typeof DEMOS_ARRAYS !== "undefined") renderSection(DEMOS_ARRAYS, "arrays");
if (typeof DEMOS_OBJETOS !== "undefined")
  renderSection(DEMOS_OBJETOS, "objetos");

// ¡Renderizamos nuestros eventos!
renderSection(DEMOS_EVENTOS, "eventos");
