const {
  limpiarInput,
  esEmailValido,
  esPasswordLarga,
  slugify,
  extraerId,
  mascararTarjeta,
  soloNumeros,
  capitalizar,
  limitarTexto,
  obtenerExtension,
} = require("./03-validaciones");

describe("Bloque 3: Validaciones y Sanitización", () => {
  // ─────────────────────────────────────────────────
  test("Kata 1 — limpiarInput() debe quitar espacios y convertir a minúsculas", () => {
    expect(limpiarInput("  Ana  ")).toBe("ana");
    expect(limpiarInput(" HOLA ")).toBe("hola");
    expect(limpiarInput("test")).toBe("test");
  });

  // ─────────────────────────────────────────────────
  test("Kata 2 — esEmailValido() debe retornar true con email válido", () => {
    expect(esEmailValido("ana@mail.com")).toBe(true);
    expect(esEmailValido("user@dominio.org")).toBe(true);
  });

  test("Kata 2 — esEmailValido() debe retornar false con email inválido", () => {
    expect(esEmailValido("sinArroba")).toBe(false);
    expect(esEmailValido("sinpunto@dominio")).toBe(false);
  });

  // ─────────────────────────────────────────────────
  test("Kata 3 — esPasswordLarga() debe retornar true con 8+ caracteres", () => {
    expect(esPasswordLarga("12345678")).toBe(true);
    expect(esPasswordLarga("contraseñalarga")).toBe(true);
  });

  test("Kata 3 — esPasswordLarga() debe retornar false con menos de 8", () => {
    expect(esPasswordLarga("1234567")).toBe(false);
    expect(esPasswordLarga("")).toBe(false);
  });

  // ─────────────────────────────────────────────────
  test("Kata 4 — slugify() convierte a minúsculas con guiones", () => {
    expect(slugify("Hola Mundo")).toBe("hola-mundo");
    expect(slugify("Mi Blog Post")).toBe("mi-blog-post");
    expect(slugify("JavaScript")).toBe("javascript");
  });

  // ─────────────────────────────────────────────────
  test("Kata 5 — extraerId() debe retornar el número del string", () => {
    expect(extraerId("item-42")).toBe(42);
    expect(extraerId("item-7")).toBe(7);
    expect(typeof extraerId("item-10")).toBe("number");
  });

  // ─────────────────────────────────────────────────
  test("Kata 6 — mascararTarjeta() debe mostrar solo los últimos 4 dígitos", () => {
    expect(mascararTarjeta("12345678")).toBe("****5678");
    expect(mascararTarjeta("1234567890123456")).toBe("************3456");
  });

  // ─────────────────────────────────────────────────
  test("Kata 7 — soloNumeros() debe eliminar letras y conservar dígitos", () => {
    expect(soloNumeros("abc123def456")).toBe("123456");
    expect(soloNumeros("hola99")).toBe("99");
    expect(soloNumeros("sinNumeros")).toBe("");
  });

  // ─────────────────────────────────────────────────
  test("Kata 8 — capitalizar() debe poner primera letra en mayúscula", () => {
    expect(capitalizar("neri")).toBe("Neri");
    expect(capitalizar("JUAN")).toBe("Juan");
    expect(capitalizar("ana")).toBe("Ana");
  });

  // ─────────────────────────────────────────────────
  test("Kata 9 — limitarTexto() debe cortar y agregar '...' si supera el límite", () => {
    expect(limitarTexto("Hola Mundo", 4)).toBe("Hola...");
    expect(limitarTexto("Hola", 10)).toBe("Hola");
    expect(limitarTexto("Exacto", 6)).toBe("Exacto");
  });

  // ─────────────────────────────────────────────────
  test("Kata 10 — obtenerExtension() debe retornar la extensión sin el punto", () => {
    expect(obtenerExtension("foto.png")).toBe("png");
    expect(obtenerExtension("archivo.test.js")).toBe("js");
    expect(obtenerExtension("documento.pdf")).toBe("pdf");
  });
});
