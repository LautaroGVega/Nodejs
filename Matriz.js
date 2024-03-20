// Matriz.js
class Matriz {
    constructor(filas, columnas) {
      this.filas = filas;
      this.columnas = columnas;
      this.matriz = new Array(filas).fill(null).map(() => new Array(columnas).fill(0));
    }
  
    obtenerValor(fila, columna) {
      return this.matriz[fila][columna];
    }
  
    asignarValor(fila, columna, valor) {
      this.matriz[fila][columna] = valor;
    }
  
    esIgual(otraMatriz) {
      if (this.filas !== otraMatriz.filas || this.columnas !== otraMatriz.columnas) {
        return false;
      }
  
      for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
          if (this.matriz[i][j] !== otraMatriz.matriz[i][j]) {
            return false;
          }
        }
      }
  
      return true;
    }
  }
  
  module.exports = Matriz;
  