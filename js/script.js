const cosmetico1 = new Cosmetico("01", "Labial Watermelon", "R.E.M Beauty", 3000);
const cosmetico2 = new Cosmetico("02", "Labial Gloss", "R.E.M Beauty", 2000);
const cosmetico3 = new Cosmetico("03", "Rubor", "KKW Beauty", 6000);
const cosmetico4 = new Cosmetico("04", "Delineador Negro", "Jefree Star", 6000);
const cosmetico5 = new Cosmetico("05", "Bronzer Warm Temp", "Rare Beauty", 7500);

const mercancia = [cosmetico1, cosmetico2, cosmetico3, cosmetico4, cosmetico5];

const cards = document.getElementById("cards");
const boton = document.getElementsByClassName("boton");
const carrito = document.getElementById("carrito");
const div = document.getElementById("add${cosmetico.numero");

mercancia.forEach(cosmetico => {
    cards.innerHTML += `
        <div id="add${cosmetico.numero}">
            <div>
                <input id="fav" type = "checkbox">
                <label> Agregar a favorito! </label>
            </div>

            <h4> PRODUCTO: ${cosmetico.producto} </h4>
            <p> COLECCIÓN: ${cosmetico.coleccion} </p>
            <p> PRECIO: $ ${cosmetico.precio} </p>
            <button class="boton" type="submit">Comprar</button>
        
        </div>

    `
})

mercancia.forEach(elementos => {
    carrito.innerHTML = `
        <div id="add${elementos.numero}">
            <h4> PRODUCTO: ${elementos.producto} </h4>
            <p> COLECCIÓN: ${elementos.coleccion} </p>
            <p> PRECIO: $ ${elementos.precio} </p>
    
        </div>

    `
});

boton.addEventListener("click", () => {
    carrito.push()
})