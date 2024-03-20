// Matriz.test.js
const Matriz = require('./Matriz');

test('verificar si dos matrices son iguales', () => {
  const matriz1 = new Matriz(2, 2);
  matriz1.asignarValor(0, 0, 1);
  matriz1.asignarValor(0, 1, 2);
  matriz1.asignarValor(1, 0, 3);
  matriz1.asignarValor(1, 1, 4);

  const matriz2 = new Matriz(2, 2);
  matriz2.asignarValor(0, 0, 1);
  matriz2.asignarValor(0, 1, 2);
  matriz2.asignarValor(1, 0, 3);
  matriz2.asignarValor(1, 1, 4);

  expect(matriz1.esIgual(matriz2)).toBe(true);
});

test('verificar si dos matrices son diferentes', () => {
  const matriz1 = new Matriz(2, 2);
  matriz1.asignarValor(0, 0, 1);
  matriz1.asignarValor(0, 1, 2);
  matriz1.asignarValor(1, 0, 3);
  matriz1.asignarValor(1, 1, 4);

  const matriz2 = new Matriz(2, 2);
  matriz2.asignarValor(0, 0, 1);
  matriz2.asignarValor(0, 1, 2);
  matriz2.asignarValor(1, 0, 0); // Cambiamos un valor
  matriz2.asignarValor(1, 1, 4);

  expect(matriz1.esIgual(matriz2)).toBe(false);
});
