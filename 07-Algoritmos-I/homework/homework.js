'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  //tengo un numero anotarme en algun lugar todos sus divisores primos(division entera)
  //yo se que uno es un divisor siempre
  //voy aumentando el divisor a 1
  //si la division me da entera anoto el divisor , si no al siguiente vuelvo a probar
  //hago todo mientras mi numero sea mayor

  const divisore = [1];

  let div = 2;
  while (num > 1) {
    if (num%div === 0) {
      divisore.push(div);
      num = num/ div;
    } else {
      div++;
    }
  }
  return divisore;


}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //tengo una lista de numeros => array
  //recorrer los numeros de una lista uno por uno => for
  //formo burbujas de un numero con el siguiente y me pregunto si estan ordenados
  //si estan ordenados re bien , si no estan ordenados re mal los tengo que ordenar (darlos la vuelta)
  //hago esto hasta llegar al final
  //me fijo si  mi lista ya esta ordenada si no la sigo ordenando
  //hasta que este totalmente ordenada= mientras este desordeado
  
  let desordeado = true; 
  
 while(desordeado){
  desordeado = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i +1]) {
      let aux = array[i];
      array[i] = array[i+1];
      array[i+1] = aux;

      desordeado = true;
    }
    
  }
}
return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // tengo una lista de nuemeros
  //tenes que sacar cada numero y compararlo con los de atras
  //si el de atras es mayor, lo empujo hacia adelante
  //lo soltas cuando lleguas al principio de la lista o cuando el valor anterior sea mas chico
  //legar al principio => posicion 0
  //lo voy tirando hacia atras mientras no este en el principio ni tenga uno menor atras
  //quiero hacer esto una vez cada numero de la lista
  //el primer numero numero no me interesa que viaje
   
   for (let i = 0; i < array.length; i++) {
       let aux = array[i];
       let j = i-1;
       while (j >= 0 && array[j] > aux) {
         array[j+1] = array[j];
         j--;
       }
     array[j+1] = aux;
   }
   return array;


}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // recorremos la lista vamos guardando el menor de todos los valores recorridos
  //intercambiamos el menor de todo por el primer desordenado

  for (let i = 0; i < array.length -1 ; i++) {
    let minIndex = i;

    for (let j = i +1; j < array.length; j++) {
       //busqueda del minimo
      if(array[j] < array[minIndex]) minIndex = j;
      
    }
    if (i !== minIndex) {
      let aux = array[i];
      array[i] = array[minIndex];
      array[minIndex] = aux;
    }
  }
 return array;


}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
