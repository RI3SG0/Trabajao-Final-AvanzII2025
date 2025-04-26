// palindrome.js
function esPalindromo(palabra) {

  // Convertimos a minúsculas y eliminamos espacios y signos de puntuación
  const soloLetras = palabra.toLowerCase().replace(/[^a-z 0-9]/g, '');
  const reverso = soloLetras.split('').reverse().join('');
  return soloLetras === reverso;
}

module.exports = esPalindromo;