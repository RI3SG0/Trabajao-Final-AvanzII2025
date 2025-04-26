// fibonacci.js
function fibonacci(n) {
  if (n < 0) {
    throw new Error('El número debe ser no negativo');
  }
  const resultado = [];
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      resultado[i] = i;
    } else {
      resultado[i] = resultado[i - 1] + resultado[i - 2];
    }
  }
  return resultado;
}

module.exports = fibonacci;