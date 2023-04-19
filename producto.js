class nuevoProducto {
  nombre;
  precio;
  cantidad;

  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  //Metodos
  subTotal = () => {
    return this.precio * this.cantidad;
  };
}

let mermeladaDeFrutilla = new nuevoProducto("Mermelada de frutilla", 800, 0);
let lemoncello = new nuevoProducto("Lemoncello", 1200, 0);
let berenjenasEnEscabeche = new nuevoProducto(
  "Berenjenas en escabeche",
  1500,
  0
);
