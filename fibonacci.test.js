// fibonacci.test.js

const fibonacci = require('./fibonacci');

test('Serie de Fibonacci con n = 0', () => {
  expect(fibonacci(0)).toEqual([]);
});

test('Serie de Fibonacci con n = 1', () => {
  expect(fibonacci(1)).toEqual([0]);
});

test('Serie de Fibonacci con n = 5', () => {
  expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
});

test('Serie de Fibonacci con n = 10', () => {
  expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test('Debe lanzar error si n es negativo', () => {
  expect(() => fibonacci(-5)).toThrow('El número debe ser no negativo');
});

