const {
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
} = require("./01-storage");

describe("Bloque 1: JSON y Persistencia", () => {
  // ─────────────────────────────────────────────────
  test("Kata 1 — empaquetar() debe convertir un objeto a JSON string", () => {
    expect(empaquetar({ nombre: "Ana" })).toBe('{"nombre":"Ana"}');
    expect(typeof empaquetar({ a: 1 })).toBe("string");
  });

  test("Kata 1 — empaquetar() debe funcionar con arrays", () => {
    expect(empaquetar([1, 2, 3])).toBe("[1,2,3]");
  });

  // ─────────────────────────────────────────────────
  test("Kata 2 — desempaquetar() debe convertir un JSON string a objeto", () => {
    expect(desempaquetar('{"ciudad":"Córdoba"}')).toEqual({
      ciudad: "Córdoba",
    });
  });

  test("Kata 2 — desempaquetar() debe funcionar con JSON de array", () => {
    expect(desempaquetar("[10,20,30]")).toEqual([10, 20, 30]);
  });

  // ─────────────────────────────────────────────────
  test("Kata 3 — esJsonValido() debe retornar true con JSON válido", () => {
    expect(esJsonValido('{"a":1}')).toBe(true);
    expect(esJsonValido("[1,2,3]")).toBe(true);
  });

  test("Kata 3 — esJsonValido() debe retornar false con texto inválido", () => {
    expect(esJsonValido("hola mundo")).toBe(false);
    expect(esJsonValido("{nombre: Juan}")).toBe(false);
  });

  // ─────────────────────────────────────────────────
  test("Kata 4 — existeClave() debe retornar true si la clave existe", () => {
    expect(existeClave({ tema: "oscuro", idioma: "es" }, "tema")).toBe(true);
  });

  test("Kata 4 — existeClave() debe retornar false si la clave no existe", () => {
    expect(existeClave({ tema: "oscuro" }, "usuario")).toBe(false);
  });

  // ─────────────────────────────────────────────────
  test("Kata 5 — serializarLista() debe unir con comas", () => {
    expect(serializarLista(["Ana", "Luis", "Marta"])).toBe("Ana,Luis,Marta");
  });

  test("Kata 5 — serializarLista() con un solo elemento no agrega coma", () => {
    expect(serializarLista(["Solo"])).toBe("Solo");
  });

  // ─────────────────────────────────────────────────
  test("Kata 6 — limpiarNulos() debe eliminar null y undefined", () => {
    expect(limpiarNulos(["Ana", null, "Luis", undefined, "Gabi"])).toEqual([
      "Ana",
      "Luis",
      "Gabi",
    ]);
  });

  test("Kata 6 — limpiarNulos() con array limpio no cambia nada", () => {
    expect(limpiarNulos([1, 2, 3])).toEqual([1, 2, 3]);
  });

  // ─────────────────────────────────────────────────
  test("Kata 7 — fusionarConfig() las propiedades del usuario tienen prioridad", () => {
    expect(
      fusionarConfig({ tema: "claro" }, { tema: "oscuro", idioma: "es" }),
    ).toEqual({
      tema: "claro",
      idioma: "es",
    });
  });

  test("Kata 7 — fusionarConfig() agrega propiedades que faltan en el usuario", () => {
    expect(fusionarConfig({}, { nivel: 1, monedas: 0 })).toEqual({
      nivel: 1,
      monedas: 0,
    });
  });

  // ─────────────────────────────────────────────────
  test("Kata 8 — contarPropiedades() debe retornar la cantidad correcta", () => {
    expect(contarPropiedades({ a: 1, b: 2, c: 3 })).toBe(3);
    expect(contarPropiedades({})).toBe(0);
  });

  // ─────────────────────────────────────────────────
  test('Kata 9 — claveAEmojis() debe convertir "true" en ✅', () => {
    expect(claveAEmojis("true")).toBe("✅");
  });

  test('Kata 9 — claveAEmojis() debe convertir "false" en ❌', () => {
    expect(claveAEmojis("false")).toBe("❌");
  });

  test("Kata 9 — claveAEmojis() debe retornar ❓ para otros valores", () => {
    expect(claveAEmojis("otro")).toBe("❓");
  });

  // ─────────────────────────────────────────────────
  test("Kata 10 — clonarSeguro() debe retornar el mismo contenido", () => {
    expect(clonarSeguro({ x: 1, y: "hola" })).toEqual({ x: 1, y: "hola" });
  });

  test("Kata 10 — clonarSeguro() el clon no debe ser la misma referencia", () => {
    const original = { valor: 42 };
    const clon = clonarSeguro(original);
    clon.valor = 99;
    expect(original.valor).toBe(42);
  });
});
