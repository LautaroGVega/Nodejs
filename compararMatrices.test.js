// compararMatrices.test.js
const compararMatrices = require('./compararMatrices');

test('comparar dos matrices iguales', () => {
  const matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const matriz2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  expect(compararMatrices(matriz1, matriz2)).toBe(true);
});

test('comparar dos matrices diferentes', () => {
  const matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const matriz2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0]
  ];
  expect(compararMatrices(matriz1, matriz2)).toBe(false);
});

test('comparar dos matrices de diferentes dimensiones', () => {
  const matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const matriz2 = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];
  expect(compararMatrices(matriz1, matriz2)).toBe(false);
});
