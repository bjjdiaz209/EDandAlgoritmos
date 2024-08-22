'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array; // Caso base: listas de 0 o 1 elemento ya están ordenadas
}

let pivote = array[array.length - 1]; // Seleccionamos el último elemento como pivote
let izquierda = []; // Sublista de elementos menores que el pivote
let derecha = []; // Sublista de elementos mayores que el pivote

for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivote) {
        izquierda.push(array[i]); // Elementos menores que el pivote
    } else {
        derecha.push(array[i]); // Elementos mayores que el pivote
    }
}

// Llamada recursiva a quickSort para las sublistas y combinación con el pivote
return [...quickSort(izquierda), pivote, ...quickSort(derecha)];
//return array;
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
}

// Dividimos el array en dos mitades
const mitad = Math.floor(array.length / 2);
const izquierda = array.slice(0, mitad);
const derecha = array.slice(mitad);

// Ordenamos recursivamente cada mitad
const sortedIzquierda = mergeSort(izquierda);
const sortedDerecha = mergeSort(derecha);

// Fusionamos las mitades ordenadas
return merge(sortedIzquierda, sortedDerecha);
}

function merge(izquierda, derecha) {
let resultado = [];
let i = 0;
let j = 0;

// Comparamos los elementos de las dos sublistas y los fusionamos en orden
while (i < izquierda.length && j < derecha.length) {
    if (izquierda[i] < derecha[j]) {
        resultado.push(izquierda[i]);
        i++;
    } else {
        resultado.push(derecha[j]);
        j++;
    }
}

// Agregamos los elementos restantes, si los hay
return resultado.concat(izquierda.slice(i)).concat(derecha.slice(j));

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
