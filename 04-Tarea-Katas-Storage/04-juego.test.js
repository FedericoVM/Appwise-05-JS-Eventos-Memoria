const {
  calcularNivel,
  porcentajeProgreso,
  esNuevoRecord,
  ordenarRanking,
  topTres,
  generarId,
  aplicarMultiplicador,
  estaBloqueado,
  formatearPosicion,
  calcularDistancia,
} = require("./04-juego");

describe("Bloque 4: Lógica de Juego y Rankings", () => {
  // ─────────────────────────────────────────────────
  test("Kata 1 — calcularNivel() nivel empieza en 1", () => {
    expect(calcularNivel(0)).toBe(1);
    expect(calcularNivel(99)).toBe(1);
  });

  test("Kata 1 — calcularNivel() sube un nivel cada 100 XP", () => {
    expect(calcularNivel(100)).toBe(2);
    expect(calcularNivel(250)).toBe(3);
    expect(calcularNivel(500)).toBe(6);
  });

  // ─────────────────────────────────────────────────
  test("Kata 2 — porcentajeProgreso() debe calcular el porcentaje correcto", () => {
    expect(porcentajeProgreso(50, 200)).toBe(25);
    expect(porcentajeProgreso(200, 200)).toBe(100);
    expect(porcentajeProgreso(0, 100)).toBe(0);
  });

  // ─────────────────────────────────────────────────
  test("Kata 3 — esNuevoRecord() retorna true solo si supera el máximo", () => {
    expect(esNuevoRecord(200, 150)).toBe(true);
  });

  test("Kata 3 — esNuevoRecord() retorna false si no supera o es igual", () => {
    expect(esNuevoRecord(150, 150)).toBe(false);
    expect(esNuevoRecord(100, 200)).toBe(false);
  });

  // ─────────────────────────────────────────────────
  test("Kata 4 — ordenarRanking() debe ordenar de mayor a menor", () => {
    expect(ordenarRanking([30, 10, 50, 20])).toEqual([50, 30, 20, 10]);
    expect(ordenarRanking([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test("Kata 4 — ordenarRanking() no debe mutar el array original", () => {
    const original = [30, 10, 50];
    ordenarRanking(original);
    expect(original[0]).toBe(30);
  });

  // ─────────────────────────────────────────────────
  test("Kata 5 — topTres() debe retornar los 3 mejores puntajes", () => {
    expect(topTres([30, 10, 50, 20, 80])).toEqual([80, 50, 30]);
  });

  test("Kata 5 — topTres() con menos de 3 elementos retorna todos", () => {
    expect(topTres([5, 1])).toEqual([5, 1]);
  });

  // ─────────────────────────────────────────────────
  test("Kata 6 — generarId() debe retornar un número positivo", () => {
    const id = generarId();
    expect(typeof id).toBe("number");
    expect(id).toBeGreaterThan(0);
  });

  test("Kata 6 — generarId() dos llamadas seguidas retornan valores iguales o distintos (pero ambos válidos)", () => {
    const id1 = generarId();
    const id2 = generarId();
    expect(typeof id1).toBe("number");
    expect(typeof id2).toBe("number");
  });

  // ─────────────────────────────────────────────────
  test("Kata 7 — aplicarMultiplicador() debe multiplicar y redondear hacia abajo", () => {
    expect(aplicarMultiplicador(10, 1.5)).toBe(15);
    expect(aplicarMultiplicador(7, 1.3)).toBe(9);
    expect(aplicarMultiplicador(100, 2)).toBe(200);
  });

  // ─────────────────────────────────────────────────
  test("Kata 8 — estaBloqueado() retorna true con 3 o más intentos", () => {
    expect(estaBloqueado(3)).toBe(true);
    expect(estaBloqueado(10)).toBe(true);
  });

  test("Kata 8 — estaBloqueado() retorna false con menos de 3 intentos", () => {
    expect(estaBloqueado(2)).toBe(false);
    expect(estaBloqueado(0)).toBe(false);
  });

  // ─────────────────────────────────────────────────
  test("Kata 9 — formatearPosicion() debe agregar el sufijo º", () => {
    expect(formatearPosicion(1)).toBe("1º");
    expect(formatearPosicion(2)).toBe("2º");
    expect(formatearPosicion(10)).toBe("10º");
  });

  // ─────────────────────────────────────────────────
  test("Kata 10 — calcularDistancia() debe aplicar Pitágoras correctamente", () => {
    expect(calcularDistancia(0, 0, 3, 4)).toBe(5);
    expect(calcularDistancia(0, 0, 1, 1)).toBe(1.41);
    expect(calcularDistancia(1, 1, 1, 1)).toBe(0);
  });
});
