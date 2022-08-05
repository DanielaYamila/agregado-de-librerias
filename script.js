const cosmetico1 = new Cosmetico("Labial Watermelon", "R.E.M Beauty", 3000);
const cosmetico2 = new Cosmetico("Labial Gloss", "R.E.M Beauty", 2000);
const cosmetico3 = new Cosmetico("Rubor", "KKW Beauty", 6000);
const cosmetico4 = new Cosmetico("Delineador Negro", "Jefree Star", 6000);
const cosmetico5 = new Cosmetico("Bronzer Warm Temp", "Rare Beauty", 7500);

cosmetico1.categoria();
cosmetico1.envio(500);
cosmetico2.envio(1000);
cosmetico3.envio(1500);
cosmetico4.envio(500);
cosmetico5.envio(1700);

const mercancia = [cosmetico1, cosmetico2, cosmetico3, cosmetico4, cosmetico5];

const maquillaje = document.getElementById("maquillaje");

mercancia.forEach(cosmetico => {
    maquillaje.innerHTML += `
        <div>
            <div>
                <input type = "checkbox">
                <label> Agregar a favorito! </label>
            </div>

            <h6> PRODUCTO: ${cosmetico.producto} </h6>
            <p> COLECCIÓN: ${cosmetico.coleccion} </p>
            <p> PRECIO: $ ${cosmetico.precio} </p>
        
        </div>

    `
})

console.log(mercancia.filter(filtMarca => filtMarca.coleccion == "R.E.M Beauty"));

let user = document.getElementById("user");
let nameUser;

do {
    nameUser = prompt("Ingrese su nombre").toLowerCase();

} while (parseFloat(nameUser));

user.innerText = nameUser;