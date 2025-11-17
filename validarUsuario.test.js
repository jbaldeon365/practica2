const validarUsuario = require('./validarUsuario');

test('usuario adulto', () => {
  expect(validarUsuario("juan", 18)).toBe("adulto");
});

test('usuario menor', () => {
  expect(validarUsuario("fernando", 16)).toBe("menor");
});

test('nombre invalido', () => {
  expect(()=> validarUsuario(null, 16)).toThrow("Nombre inválido");
});

test('edad invalida', () => {
  expect(()=>validarUsuario("alex", -5)).toThrow("Edad inválida");
});