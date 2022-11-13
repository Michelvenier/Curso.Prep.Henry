// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Michel Venier";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 8 ;

// Crea una variable booleana:
const nuevoBool = false ;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return str
  
}

function suma(x, y) {
  var suma= x + y
  return suma;
  
}

function resta(x, y) {
  var resta= x - y
  return resta
  
}

function multiplica(x, y) {
  
  return x * y
  
}

function divide(x, y) {
  
  return x / y
  
}

function sonIguales(x, y) {
  if (x===y){return true}
  else; {return false}

}

function tienenMismaLongitud(str1, str2) {
  
  if (str1.length == str2.length)
    {return true}
  else {return false;}
  
}

function menosQueNoventa(num) {
  if (num<90) 
    {return true}
  else 
    {return false}
  
}

function mayorQueCincuenta(num) {
  if (num>50)
    {return true}
  else
    {return false}
  
}

function obtenerResto(x, y) {
  var obtenerResto= x % y
  return obtenerResto
  
}

function esPar(num) {
if (num % 2 == 0)
  {return true}
  else 
    {return false}
  
}

function esImpar(num) {
if (num % 2 == 0)
  {return false}
  else 
    {return true}
  
}

function elevarAlCuadrado(num) {
return Math.pow(num, 2)
  
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return Math.pow(num, 3)
}

function elevar(num, exponent) {
 return Math.pow (num, exponent);
  
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round(num);
  
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num);
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random ();
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero === 0)
    {return false;}
   
  else if (numero <0)
    {return"Es negativo";} 
 
  else
    {return "Es positivo";}
}


function agregarSimboloExclamacion(str) {
return (str + "!")
}

function combinarNombres(nombre, apellido) {
return (nombre + " " + apellido)
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
return "Hola " + nombre + "!" ;

}

function obtenerAreaRectangulo(alto, ancho) {
return alto * ancho
}


function retornarPerimetro(lado){
return lado * 4
  
}


function areaDelTriangulo(base, altura){
return (base * altura)/2

}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
return euro * 1.2
  
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
if (letra.length > 1)
  {return "Dato incorrecto"}
if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u")
{return "Es vocal"}

{return "Dato incorrecto"}
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
