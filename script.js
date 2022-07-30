let respuesta;

do {
    function veResultados(peso, altura) {
        console.log(peso / (altura * altura));
    }

    let peso, altura;

    do {
        peso = parseFloat(prompt("Ingrese su peso."));
        altura = parseInt(prompt("Ingrese su altura."));
    } while (isNaN(peso) || isNaN(altura));
       
    if(isNaN(peso) || isNaN(altura)) {
        console.log("Los valores no son validos.");
    }
    
    veResultados(peso, altura);
    alert(`Su indice de masa corporal es ` + peso / (altura * altura));
    
    respuesta = prompt("¿Desea calcula de nuevo su IMC?").toLowerCase();
    
} while(respuesta != "no");