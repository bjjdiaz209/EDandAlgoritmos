const {
    Queue,
    Node,
    LinkedList,
    BinarySearchTree
} = require('./DS.js')

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function(array) {
    // Tu código aca:

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
       if (Array.isArray(array[i])) {
        sum+=countArray(array[i]);//sum = sum +respuesta de counArray(array[i])
       } else {
        sum+=array[i];
       }
        
    }
  return sum;  
};


// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function(obj) {
    // Tu código aca:
    let count = 0;
    //for in -> "recorrer objetos"
    for (const prop  in obj) {
        count++;
        if (typeof obj[prop] === 'object') {
            //los arrays devuelven true
            if (!Array.isArray(obj[prop])) {
                count+=countProps(obj[prop]);
            }            
        }
    }
   return count;
}


// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1
// modifico la lista que tengo
//devuelvo la cantidad de cambios ya hechos ![integer//numero]

LinkedList.prototype.changeNotNumbers = function(){
    // Tu código aca:
    //Number[('hola')] === NaN -> ! isNaN(value) => true // false
    //Number('hola') ->> NaN
    //Number('1')->> 1
    let count = 0;
    let current = this.head;
    while (current) {
        if (isNaN(Number(current.value))) {
            count++;
            current.value = 'Kiricocho';
        }
        current = current.next;
    }
    return count;

};


// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function(queueOne, queueTwo) {
    // Tu código aca:
    let queue = new Queue();//{array: []}
    //array1 = []
    //array2 = []
    //firstElement = 5
    //secondElement = undefined
    // queue = [1,6,2,7,3,8,4,9,5]
    while (queueOne.size() || queueTwo.size()) {
        let firstElement = queueOne.dequeue();//me devuelve el primer elemnto de array 1
        let secondElement = queueTwo.dequeue();//me devuelve el primer elemento del array 2
        if(firstElement)queue.enqueue(firstElement);//firstElement && queue.
        if(secondElement)queue.enqueue(secondElement);
    }
    return queue;
};


// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function(multiplier) {
    // Tu código aca:
    return function(num){
        return num*multiplier;
    }

};

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function() {
    // Tu código aca:
    if(!this.right && !this.left) return this.value;
    if(!this.right && this.left) return this.value + this.left.sum();
    if(!this.left && this.right) return this.value + this.right.sum();
    if(this.left && this.right) return this.value + this.left.sum() + this.right.sum();





};

module.exports = {
    countArray,
    countProps,
    mergeQueues,
    closureMult
};