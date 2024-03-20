// suma.test.js
const suma = require('./suma');

test('suma 1 + 2 para obtener 3', () => {
  expect(suma(1, 2)).toBe(3);
});

test('suma -1 + 1 para obtener 0', () => {
  expect(suma(-1, 1)).toBe(0);
});

test('suma de números decimales', () => {
  expect(suma(0.1, 0.2)).toBeCloseTo(0.3);
});

test('suma de números grandes', () => {
  expect(suma(1000000000, 2000000000)).toBe(3000000000);
});

