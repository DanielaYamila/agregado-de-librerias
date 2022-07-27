let saludo = "!Hola ";
let nombre, apellido;

do {
    nombre = prompt("Bienvenido, ingrese su nombre").toLowerCase();
    apellido = prompt("Ingrese su apellido").toLowerCase();
} while (parseFloat(nombre) && parseFloat(apellido));

console.log(`${saludo} ${nombre} ${apellido}!`);

let respuesta;

do {
    let banca, number1, number2;

    do {
        number1 = parseFloat(prompt("Ingrese el valor de su producto."));
        number2 = parseFloat(prompt("Ingrese el valor del envio."));
        banca = prompt("Ingrese el nombre de su Banco.").toLowerCase();
        
        if(isNaN(number2) || isNaN(number2)) {
            console.log("Los valores no son validos.");
        }
    }while (isNaN(number1) || isNaN(number2));
    
    switch(banca) {
    case "provincia":
        console.log(number1 + number2 / 50)
        alert(`El resultado es ${number1 + number2 / 15}`)
        break
    case "nacion":
        console.log(number1 + number2 / 50)
        alert(`El resultado es ${number1 + number2 / 10}`)
        break
    case "bbvba":
        console.log(number1 + number2 / 50)
        alert(`El resultado es ${number1 + number2 / 20}`)
        break
    case "santander rio":
        console.log(number1 + number2 / 50)
        alert(`El resultado es ${number1 + number2 / 5}`)
        break
    case "itau":
        console.log(number1 + number2 / 50)
        alert(`El resultado es ${number1 + number2 / 2}`)
        break
    default:
        console.log("Operacion no valida.")
    }

    respuesta = prompt("¿Desea ingresar mas valores?").toLowerCase();
} while(respuesta != "no");