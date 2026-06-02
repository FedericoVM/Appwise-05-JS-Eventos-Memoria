const {
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
} = require("./02-tiempo");

describe("Bloque 2: El Tiempo y Fechas", () => {
  // ─────────────────────────────────────────────────
  test("Kata 1 — segundosAMinutos() debe formatear correctamente", () => {
    expect(segundosAMinutos(65)).toBe("01:05");
    expect(segundosAMinutos(9)).toBe("00:09");
    expect(segundosAMinutos(120)).toBe("02:00");
    expect(segundosAMinutos(0)).toBe("00:00");
  });

  // ─────────────────────────────────────────────────
  test("Kata 2 — msASegundos() debe convertir ms a segundos enteros", () => {
    expect(msASegundos(3500)).toBe(3);
    expect(msASegundos(1000)).toBe(1);
    expect(msASegundos(999)).toBe(0);
  });

  // ─────────────────────────────────────────────────
  test("Kata 3 — esMasDeUnaHora() debe retornar true si supera 3600", () => {
    expect(esMasDeUnaHora(3601)).toBe(true);
    expect(esMasDeUnaHora(7200)).toBe(true);
  });

  test("Kata 3 — esMasDeUnaHora() debe retornar false si no supera 3600", () => {
    expect(esMasDeUnaHora(3600)).toBe(false);
    expect(esMasDeUnaHora(100)).toBe(false);
  });

  // ─────────────────────────────────────────────────
  test("Kata 4 — obtenerAnio() debe retornar el año actual como número", () => {
    expect(obtenerAnio()).toBe(new Date().getFullYear());
    expect(typeof obtenerAnio()).toBe("number");
  });

  // ─────────────────────────────────────────────────
  test("Kata 5 — diferenciaEnSegundos() debe calcular segundos entre dos timestamps", () => {
    expect(diferenciaEnSegundos(5000, 8500)).toBe(3);
    expect(diferenciaEnSegundos(0, 10000)).toBe(10);
    expect(diferenciaEnSegundos(1000, 1999)).toBe(0);
  });

  // ─────────────────────────────────────────────────
  test("Kata 6 — formatearFechaCorta() debe retornar DD/MM/YYYY", () => {
    // new Date(año, mes 0-indexado, día)
    expect(formatearFechaCorta(new Date(2026, 2, 30))).toBe("30/03/2026");
    expect(formatearFechaCorta(new Date(2026, 0, 5))).toBe("05/01/2026");
  });

  // ─────────────────────────────────────────────────
  test("Kata 7 — sumarDias() debe retornar un Date con los días sumados", () => {
    const inicio = new Date(2026, 0, 1); // 1 ene 2026
    const resultado = sumarDias(inicio, 10);
    expect(resultado.getDate()).toBe(11);
    expect(resultado.getMonth()).toBe(0);
  });

  test("Kata 7 — sumarDias() no debe modificar el Date original", () => {
    const inicio = new Date(2026, 0, 1);
    sumarDias(inicio, 5);
    expect(inicio.getDate()).toBe(1); // el original no cambia
  });

  // ─────────────────────────────────────────────────
  test("Kata 8 — esFinDeSemana() debe retornar true para sábado", () => {
    expect(esFinDeSemana(new Date(2026, 2, 28))).toBe(true); // sábado
  });

  test("Kata 8 — esFinDeSemana() debe retornar true para domingo", () => {
    expect(esFinDeSemana(new Date(2026, 2, 29))).toBe(true); // domingo
  });

  test("Kata 8 — esFinDeSemana() debe retornar false para día de semana", () => {
    expect(esFinDeSemana(new Date(2026, 2, 30))).toBe(false); // lunes
  });

  // ─────────────────────────────────────────────────
  test("Kata 9 — obtenerSaludo() debe retornar un string no vacío", () => {
    const resultado = obtenerSaludo();
    expect(typeof resultado).toBe("string");
    expect(resultado.length).toBeGreaterThan(0);
  });

  test("Kata 9 — obtenerSaludo() debe ser uno de los tres saludos válidos", () => {
    const validos = ["Buenos días", "Buenas tardes", "Buenas noches"];
    expect(validos).toContain(obtenerSaludo());
  });

  // ─────────────────────────────────────────────────
  test("Kata 10 — tiempoRestante() debe desglosar ms en { min, seg, ms }", () => {
    expect(tiempoRestante(75500)).toEqual({ min: 1, seg: 15, ms: 500 });
    expect(tiempoRestante(60000)).toEqual({ min: 1, seg: 0, ms: 0 });
    expect(tiempoRestante(1500)).toEqual({ min: 0, seg: 1, ms: 500 });
  });
});
