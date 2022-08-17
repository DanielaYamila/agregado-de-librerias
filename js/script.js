const cosmetico1 = new Cosmetico(01, "https://d3ugyf2ht6aenh.cloudfront.net/stores/944/405/products/2e64f39e-8c94-4ab4-977a-038abbc6bed9-0f7b4fa5c6e5d965e416394407673817-1024-1024.jpeg", "REM BEAUTY PLUMPING LIP GLOSS JELLY SANDALS", "R.E.M Beauty", 3000);
const cosmetico2 = new Cosmetico(02, "https://cdn.shopify.com/s/files/1/0581/3849/3094/products/REM_OnYourCollar_LipOil_PDP_Open_LavendarKiss_left_530x.png?v=1655397026", "ESSENTIAL DRIP LIP OIL", "R.E.M Beauty", 3500);
const cosmetico3 = new Cosmetico(03, "https://cdn.shopify.com/s/files/1/0612/9893/3944/products/see7ckzacnusrnmfsdmw_720x960.jpg?v=1658772142", "CLEANSER", "KKW Beauty", 6000);
const cosmetico4 = new Cosmetico(04, "https://cdn.shopify.com/s/files/1/0673/2291/products/01-2F_ckProofMascara-BananaFetish-Wand_Open_Accessory-Web.jpg?v=1651195047", "F*CK PROOF MASCARA PALE YELLOW", "Jefree Star Cosmetics", 6000);
const cosmetico5 = new Cosmetico(05, "https://cdn.shopify.com/s/files/1/0314/1143/7703/products/Bronzer-Stick-True-Warmth-SKU.jpg?v=1638297308", "Warm Wishes Effortless Bronzer Stick", "Rare Beauty", 7500);
const cosmetico6 = new Cosmetico(06, "https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB_FALL2021_T2PRODUCT_CONCRETE_MINI_SOFT_MATTE_FOUNDATION_CLOSED_340_1200x1500_388d0665-8c29-45ff-8995-fd512f6cb7d1.jpg?v=1629834991", "Base facial", "Fenty Rihana", 7000);
const cosmetico7 = new Cosmetico(07, "https://coty.scene7.com/is/image/cotyemea/KC-Kylighter-CottonCandyCream-EPI?$SQUARE-575x575-2X$", "CANDY CREAM KYLIGHTER ILLUMINATING POWDER", "Kylie", 4000);
const cosmetico8 = new Cosmetico(08, "https://coty.scene7.com/is/image/cotyemea/KC-GelPencil-MatteBrown-EPI-1?$SQUARE-575x575-2X$", "MATTE BROWN GEL EYELINER PENCIL", "Kylie", 5500);

const mercancia = [cosmetico1, cosmetico2, cosmetico3, cosmetico5, cosmetico6, cosmetico7, cosmetico8];

const estilo = document.getElementById("estilo");
let modoOscuro = false;

estilo.addEventListener("click", () => {
    if (modoOscuro === false) {
        document.body.classList.remove("claro");
        document.body.classList.add("oscuro");
        modoOscuro = true;
        sessionStorage.setItem('modo', "oscuro")
        Toastify({
            text: "Activaste el modo oscuro.",
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "left",
            style: {
                background: "#da7055",
                border: "1px solid",
            },
        }).showToast();
    } else {
        document.body.classList.remove("oscuro");
        document.body.classList.add("claro");
        modoOscuro = false;
        sessionStorage.setItem('modo', "claro")
        Toastify({
            text: "Activaste el modo claro.",
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "left",
            style: {
                background: "#460707",
                border: "1px solid",
            },
        }).showToast();
    }
})

const cards = document.getElementById("cards");

mercancia.forEach((cosmetico, i) => {
    cards.innerHTML += `
        <div class="tarjeta" id="add${cosmetico.numero}">
            <div>
                <input id="fav" type="checkbox">
                <label> Agregar a favorito! </label>
            </div>

            <img class="imagenesCard" src="${cosmetico.imagen}" alt="">

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

for (let i = 0; i < mercancia.length; i++) {
    let cosmeticos = mercancia[i]
    let boton = document.getElementById(`boton${i}`);

    boton.addEventListener("click", () => {
        carrito.innerHTML += `
            <div class="borde">
                <h4> PRODUCTO: ${cosmeticos.producto} </h4>
                <img class="imagenesBorde" src="${cosmeticos.imagen}" alt="">
                <p> COLECCIÓN: ${cosmeticos.coleccion} </p>
                <p> PRECIO: $ ${cosmeticos.precio} </p>
                <button class="removerElemento">Eliminar</button>
                
            </div>
        `
        mensaje.innerHTML = ""
        carritoArray.push()
        // Avisara al usuario que su producto se añadio al carrito. Como reemplazo al contador que voy a agregar en el carrito.
        Toastify({
            text: "Producto añadido al carrito.",
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "left",
            style: {
                background: "#460707",
                border: "1px solid",
            },
        }).showToast();
    })
}





