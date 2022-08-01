class Cosmeticos {
    constructor(producto = "", coleccion = "", precio = 1, descuento = 1) {
        this.producto = producto;
        this.coleccion = coleccion;
        this.precio = precio;
    }

    categoria(){
        console.log(`${this.producto} de ${this.coleccion} es vegano`);
    }
}