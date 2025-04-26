// palindrome.test.js

const esPalindromo = require('./palindromo');

test('Palíndromo simple', () => {
  expect(esPalindromo('anilina')).toBe(true);
});

test('No es palíndromo', () => {
  expect(esPalindromo('hola')).toBe(false);
});

test('Cadena vacía', () => {
  expect(esPalindromo('')).toBe(true);
});