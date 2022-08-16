const cosmetico1 = new Cosmetico(01, "Labial Watermelon", "R.E.M Beauty", 3000);
const cosmetico2 = new Cosmetico(02, "Labial Gloss", "R.E.M Beauty", 3500);
const cosmetico3 = new Cosmetico(03, "Rubor", "KKW Beauty", 6000);
const cosmetico4 = new Cosmetico(04, "Delineador Negro", "Jefree Star", 6000);
const cosmetico5 = new Cosmetico(05, "Bronzer Warm Temp", "Rare Beauty", 7500);
const cosmetico6 = new Cosmetico(06, "Base facial", "Fenty Rihana", 7000);
const cosmetico7 = new Cosmetico(07, "Pestañas", "Kylie", 4000);
const cosmetico8 = new Cosmetico(08, "Labial mate", "Kylie", 5500);

const mercancia = [cosmetico1, cosmetico2, cosmetico3, cosmetico5, cosmetico6, cosmetico7, cosmetico8];

const estilo = document.getElementById("estilo");
let modoOscuro = false;

estilo.addEventListener("click", () => {
    if(modoOscuro === false) {
        document.body.classList.remove("claro");
        document.body.classList.add("oscuro");
        modoOscuro = true;
        sessionStorage.setItem('modo', "oscuro")
    } else {
        document.body.classList.remove("oscuro");
        document.body.classList.add("claro");
        modoOscuro = false;
        sessionStorage.setItem('modo', "claro")
    }
})

const cards = document.getElementById("cards");

mercancia.forEach((cosmetico, i) => {
    cards.innerHTML += `
        <div id="add${cosmetico.numero}">
            <div>
                <input id="fav" type = "checkbox">
                <label> Agregar a favorito! </label>
            </div>

            <img src="#" alt="">

            <h4> PRODUCTO: ${cosmetico.producto} </h4>
            <p> COLECCIÓN: ${cosmetico.coleccion} </p>
            <p> PRECIO: $ ${cosmetico.precio} </p>
            <button id="boton${i}">Comprar</button>
        
        </div>

    `

})

const carrito = document.getElementById("carrito");
let mensaje = document.getElementById("noHayProductos");

const carritoArray = []

for(let i=0; i<mercancia.length; i++) {

    let cosmeticos = mercancia[i]

    let boton = document.getElementById(`boton${i}`);
    boton.addEventListener("click", () => {

        carrito.innerHTML += `
            <div class="borde">
                <img src="#" alt="">
        
                <h4> PRODUCTO: ${cosmeticos.producto} </h4>
                <p> COLECCIÓN: ${cosmeticos.coleccion} </p>
                <p> PRECIO: $ ${cosmeticos.precio} </p>
                
            </div>
        `
        mensaje.innerHTML = ""
        carritoArray.push()
    })
}