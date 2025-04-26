// vocales.test.js

const contarVocales = require('./vocales');

test('Cuenta las vocales en una cadena simple', () => {
  expect(contarVocales('Hola Mundo')).toBe(4); // 'o', 'a', 'u', 'o'
});

test('Cuenta las vocales en una cadena con mayúsculas', () => {
  expect(contarVocales('HOLA MUNDO')).toBe(4); // 'O', 'A', 'U', 'O'
});

test('Cadena sin vocales', () => {
  expect(contarVocales('HLMND')).toBe(0);
});

test('Cadena con todas las vocales', () => {
  expect(contarVocales('aeiouAEIOU')).toBe(10);
});

test('Cadena vacía', () => {
  expect(contarVocales('')).toBe(0);
});