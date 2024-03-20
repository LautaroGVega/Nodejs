// compararMatrices.js
function compararMatrices(matriz1, matriz2) {
    if (matriz1.length !== matriz2.length || matriz1[0].length !== matriz2[0].length) {
      return false;
    }
  
    for (let i = 0; i < matriz1.length; i++) {
      for (let j = 0; j < matriz1[0].length; j++) {
        if (matriz1[i][j] !== matriz2[i][j]) {
          return false;
        }
      }
    }
  
    return true;
  }
  
  module.exports = compararMatrices;
  