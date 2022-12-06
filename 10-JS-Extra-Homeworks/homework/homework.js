// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz = []
  for (prop in objeto){
    matriz.push([prop, objeto[prop]])
  };
  return matriz
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var pares = {}
  for (var i = 0; i < string.length; i++){
    if (!pares [string[i]]){
      (pares[string[i]]) = 1
    } else {
      (pares[string[i]]) ++
    }
  }
  return pares
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayuscula = '';
var minuscula = '';
for (var i =0; i < s.length; i ++){
  if (s[i] === s[i].toUpperCase()){
    mayuscula = mayuscula + s[i]
  } else {
    minuscula = minuscula + s[i]
  }
}
return mayuscula + minuscula
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var fraseArray = str.split (' ')
  for (var i=0; i < fraseArray.length; i++){
    var palabraArray = fraseArray[i].split('')
    var reversePalabra = palabraArray.reverse()
    fraseArray[i] = reversePalabra.join('')
  }
  return fraseArray.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var cadena = numero.toString();
  var cadenaInvertida = '';
  cadenaInvertida = cadena.split('').reverse().join('')
  if (cadena === cadenaInvertida){
    return 'Es capicua'
  }
  return 'No es capicua'
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadenaSinAbc = ''
  for (element of cadena){
    if (element != 'a' && element != 'b' && element != 'c'){
      cadenaSinAbc += element
}
  }
return cadenaSinAbc
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function(a, b){
    if (a.length > b.length){
      return 1
    }
      if (a.length < b.length){
        return -1
      }
      if (a.length === b.length){
        return 0
      }
    })
    return arr
  }
               


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevoArray = []
  for (var i=0; i < arreglo1.length; i++){
    for (var h=0; h < arreglo2.length; h++){
      if (arreglo1[i] === arreglo2[h]){
        nuevoArray.push(arreglo2[h])
      }
  }
  }
return nuevoArray
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

