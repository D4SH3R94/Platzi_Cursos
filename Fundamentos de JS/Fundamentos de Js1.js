let AndyBox = 'Blury';
console.log(AndyBox);

//Tipos de datos
//PRIMITIVOSS
let string = 'Hola soy un string'; //Texto
let number = 1000; //Numero
let boolean = true; //Booleano (true, false)
let numberFloat = 10.5; //Numero con decimales
let nulo = null; //Nulo
let indefinido = undefined; //Indefinido
let symbol = Symbol('mi simbolo'); //Simbolo
let bigInt = 9007199254741991n; //BigInt

//COMPLEJOS
let array = [1, 2, 3, 4, 5]; //Arreglo o Array
let object = { nombre: 'Andy', edad: 25 }; //Objeto
let funcion = function() {
    console.log('Hola soy una funcion');
}; //Funcion

//String (Propiedades y Metodos)
let texto = 'Hola, soy Andy';
let texto1 = 'Bienvenido a JS';
let texto3 = texto + ' ' + texto1; //Concatenacion
let texto4 = `${texto} ${texto1}`; //Template Literals
console.log(texto4);
console.log(texto.length); //Propiedad length tamaño del string
console.log(texto.toUpperCase()); //Metodo toUpperCase Mayusculas
console.log(texto.toLowerCase()); //Metodo toLowerCase minusculas
console.log(texto.substring(0, 4)); //Metodo substring extrae parte del string

//Number (Propiedades y Metodos)
let numero = 1500.5678;
let numero2 = 2000;
console.log(typeof numero, typeof numero2); //Tipo de dato y se ve que en Js los numeros son todos del mismo tipo

//Notacion cientifica
let numeroCientifico = 1.5e3; //1500
   
//Infinitos y Nan
let numeroInfinito = Infinity;
let noEsUnNumero = NaN; //Not a Number

//Operaciones con aritmeticas
//Suma, Resta, Multiplicacion, Division, Modulo, exponente
let suma = 10 + 5;
let resta = 10 - 5;
let multiplicacion = 10 * 5;
let division = 10 / 5;
let modulo = 10 % 3; //Resto de una division
let exponente = 10 ** 2; //10 elevado a la 2

//Precision de los numeros decimales
let numeroDecimal1 = 0.1;
let numeroDecimal2 = 0.2;
let sumaDecimal = numeroDecimal1 + numeroDecimal2;
console.log(sumaDecimal); //0.30000000000000004

//Solucion a la precision
let sumaDecimalCorregida = parseFloat(sumaDecimal.toFixed(2)); //Redondea a 2 decimales y convierte a numero
console.log(sumaDecimalCorregida); //0.3

//Operaciones avanzadas con numeros
const PI = Math.PI; //Constante PI
let raizCuadrada = Math.sqrt(16); //Raiz cuadrada
let numeroAleatorio = Math.random(); //Numero aleatorio entre 0 y 1
const valorAbsoluto = Math.abs(-10); //Valor absoluto
console.log(PI, raizCuadrada, numeroAleatorio, valorAbsoluto);

//Conversion de tipos
//Explicit Type Casting
const stringValue = '42';
const integer = parseInt(stringValue); //Convierte a entero
console.log(integer); //42
console.log(typeof integer); //number

const floatString = '3.14';
const floatNumber = parseFloat(floatString); //Convierte a numero decimal
console.log(floatNumber); //3.14
console.log(typeof floatNumber); //number