let nombre, apellido;

do {
    nombre = prompt("Bienvenido, ingrese su nombre").toLowerCase();
    apellido = prompt("Ingrese su apellido").toLowerCase();
} while (parseFloat(nombre) && parseFloat(apellido));

console.log(`¡Hola ${nombre} ${apellido}!`);

let respuesta;

do {
    function veResultados(num1, num2, bank) {
        console.log(num1);
        console.log(num2);
        console.log(bank);
    }

    let banca, number1, number2;

    do {
        number1 = parseFloat(prompt("Ingrese el valor de su producto."));
        number2 = parseFloat(prompt("Ingrese el valor del envio."));
        banca = prompt("Ingrese el nombre de su Banco.").toLowerCase();
        
        if(isNaN(number2) || isNaN(number2)) {
            console.log("Los valores no son validos.");
        }
    }while (isNaN(number1) || isNaN(number2));

    veResultados(number1, number2, banca);
    
    switch(banca) {
    case "provincia":
        console.log(number1 + number2 / 6);
        alert(`El valor total de la compra es ${number1 + number2 / 6}`);
        break;
    case "nacion":
        console.log(number1 + number2 / 4);
        alert(`El valor total de la compra es ${number1 + number2 / 4}`);
        break;
    case "bbvba":
        console.log(number1 + number2 / 5);
        alert(`El valor total de la compra es ${number1 + number2 / 5}`);
        break;
    case "santander rio":
        console.log(number1 + number2 / 3);
        alert(`El valor total de la compra es ${number1 + number2 / 3}`);
        break;
    case "itau":
        console.log(number1 + number2 / 2);
        alert(`El valor total de la compra es ${number1 + number2 / 2}`);
        break;
    default:
        console.log("Operacion no valida.");
    }

    respuesta = prompt("¿Desea ingresar mas valores?").toLowerCase();
    
} while(respuesta != "no");