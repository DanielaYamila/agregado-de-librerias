const cosmetico1 = new Cosmeticos("Labial", "R.E.M Beauty", 3500);
const cosmetico2 = new Cosmeticos("Rubor", "KK", 5000);
cosmetico1.categoria();
console.table(cosmetico1);
console.table(cosmetico2);

let useResponde;

const cosmetics = [];

do {
    cosmetics.push(prompt("Ingrese una marca de cosmeticos que te gustaria ver en nuestra tienda.").toLowerCase());
    cosmetics.push(prompt("Ingrese otra marca de cosmeticos que te gustaria ver en nuestra tienda.").toLowerCase());
    cosmetics.push(prompt("Ingrese otra marca de cosmeticos que te gustaria ver en nuestra tienda.").toLowerCase());
    
    if (parseFloat(cosmetics)) {
        console.log("Los valores no son validos.");
    }

    useResponde = prompt("¿Se encuentra seguro de su respuesta o desea ingresar nuevos valores?").toLowerCase();

} while (useResponde != "si");

console.log(cosmetics);