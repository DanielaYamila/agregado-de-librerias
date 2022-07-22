let saludo = "!Hola ";
let nombre, apellido;

do {
    nombre = prompt("Bienvenido, ingrese su nombre").toLowerCase();
    apellido = prompt("Ingrese su apellido").toLowerCase();
} while (parseFloat(nombre) && (apellido));

console.log(`${saludo} ${nombre} ${apellido}!`);

let number1;
let number2 = 150;

do {
    number1 = parseFloat(prompt("Ingrese un valor en dolares para pasarlo a pesos argentinos."));
} while (isNaN(number1))

alert(`El numero ingresado es ${number1}`);
console.log(number1 * number2);
alert(`El resultado es ${number1 * number2}`);
let confirmacion = prompt("¿Desea ingresar mas valores?").toLowerCase();

if (confirmacion == "no") {
    repetir = false;
}