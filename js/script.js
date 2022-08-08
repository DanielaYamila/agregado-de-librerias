const cosmetico1 = new Cosmetico("01", "Labial Watermelon", "R.E.M Beauty", 3000);
const cosmetico2 = new Cosmetico("02", "Labial Gloss", "R.E.M Beauty", 2000);
const cosmetico3 = new Cosmetico("03", "Rubor", "KKW Beauty", 6000);
const cosmetico4 = new Cosmetico("04", "Delineador Negro", "Jefree Star", 6000);
const cosmetico5 = new Cosmetico("05", "Bronzer Warm Temp", "Rare Beauty", 7500);

const mercancia = [cosmetico1, cosmetico2, cosmetico3, cosmetico4, cosmetico5];

const cards = document.getElementById("cards");

mercancia.forEach(cosmetico => {
    cards.innerHTML += `
        <div>
            <div>
                <input id="fav" type = "checkbox">
                <label> Agregar a favorito! </label>
            </div>

            <h4> PRODUCTO: ${cosmetico.producto} </h4>
            <p> COLECCIÓN: ${cosmetico.coleccion} </p>
            <p> PRECIO: $ ${cosmetico.precio} </p>
            <button id="add${cosmetico.numero}">Comprar</button>
        
        </div>

    `
})

let user = document.getElementById("user");
let nameUser;

do {
    nameUser = prompt("Ingrese su nombre").toLowerCase();

} while (parseFloat(nameUser));

user.innerText = nameUser;

const quizz = document.getElementById("quizz");

const pregunta = [];
const pregunta2 = [];

quizz.addEventListener("click", () => {
    pregunta.push(prompt("¿Le gustan nuestros productos?").toLowerCase());
    pregunta2.push(prompt("Ayudenos a traer sus productos favoritos, ¿Cual marca de cosmeticos quiere ver en nuestra tienda?").toLowerCase());

});

console.log(pregunta);
console.log(pregunta2);