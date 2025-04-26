// vocales.js

function contarVocales(cadena) {
  // Convertimos la cadena a minúsculas para hacer la comparación insensible a mayúsculas/minúsculas
  const texto = cadena.toLowerCase();
  // Definimos las vocales
  const vocales = ['a', 'e', 'i', 'o', 'u'];
  // Inicializamos un contador
  let contador = 0;

  // Recorremos cada carácter de la cadena
  for (let char of texto) {
    if (vocales.includes(char)) {
      contador++;
    }
  }

  return contador;
}

module.exports = contarVocales;