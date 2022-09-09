// Variable y función del cambio de fondo a oscuro y claro

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
                background: "#bba6ef",
                border: "1px solid",
                color: "#000000",
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
                background: "#808080",
                border: "1px solid",
                color: "#000000",
            },
        }).showToast();
    }
})

//Consulto al DOM y genero array del carrito

const cards = document.getElementById("cards");
const carrito = document.getElementById("carrito");
const mensaje = document.getElementById("noHayProductos");
const botonCompra = document.getElementById("compraTotal");
let carritoArray = JSON.parse(localStorage.getItem('carrito')) ?? []

//Visualizar productos del json

fetch("./json/productos.json")
.then(response => response.json())
.then(productos => {
    productos.forEach((cosmetico, i) => {
        cards.innerHTML += `
        <div class="tarjeta" id="num${i}">
            <img class="imagenesCard" src="${cosmetico.img}" alt="">
            <h4> ${cosmetico.producto} </h4>
            <p> ${cosmetico.marca} </p>
            <p>  $ ${cosmetico.precio} </p>
            <button class="botonCompra">Comprar</button>
        
        </div>`
    })

    for (let i = 0; i < productos.length; i++) {
        let cosmeticos = productos[i]
        const tarjeta = document.getElementById(`num${i}`);

        tarjeta.children[4].addEventListener("click", () => {
            carrito.innerHTML += `
            <div id="cardCompra${cosmeticos.id}">
                <h4> ${cosmeticos.producto} </h4>
                <img class="imagenesBorde" src="${cosmeticos.img}" alt="">
                <p> ${cosmeticos.marca} </p>
                <button onclick="eliminar(${cosmeticos.id})">Eliminar</button>
                        
            </div>`

            mensaje.innerText = `TOTAL: $ ${cosmeticos.precio}`
            carritoArray.push(carrito);

            Toastify({
                text: "Producto añadido al carrito.",
                duration: 3000,
                close: true,
                gravity: "bottom",
                position: "left",
                style: {
                    background: "#bba6ef",
                    border: "1px solid",
                    color: "#000000",
                },
            }).showToast();
        })
    } 

    compraTotal.addEventListener("click", () => {
        carrito.innerHTML = ""
        mensaje.innerText = "NO HA REALIZADO COMPRAS"

        Toastify({
            text: "Compra realizada con exito.",
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "left",
            style: {
                background: "#bba6ef",
                border: "1px solid",
                color: "#000000",
            },
        }).showToast();
    })
})