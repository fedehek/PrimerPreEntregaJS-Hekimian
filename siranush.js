let carrito = [];
let hayProductos = false;
alert("¡Bienvenido a Siranush Caseros! ");
let total = 0;
let empieza = prompt("¿Quieres realizar un pedido?").toLowerCase();

if (empieza === "si") {
  seleccionarProducto();
} else {
  alert("Gracias, vuelva pronto");
}

function seleccionarProducto() {
  let seleccionProductos = Number(
    prompt(
      "Selecciona el producto que deseas agregar al carrito:\n1-Mermelada de frutilla $800\n2-Lemoncello $1200\n3-Berenjenas en escabeche $1500\n4-Agregue un nuevo producto\n5-Para finalizar, escribe 0"
    )
  );
  while (seleccionProductos >= 0) {
    switch (seleccionProductos) {
      case 0:
        alert("Gracias, vuelva pronto");
        seleccionProductos = -1;
        break;
      case 1:
        mermeladaDeFrutilla = Number(
          prompt(
            `el producto seleccionado es ${mermeladaDeFrutilla.nombre}, indique la cantidad: `
          )
        );
        console.log("ESTOY EN EL CASE 1");
        total += cantidad(mermeladaDeFrutilla.cantidad, 800);
        seleccionProductos = -1;
        hayProductos = true;
        envio();
        metodoDePago();
        carrito.push(mermeladaDeFrutilla);
        break;
      case 2:
        hayProductos = true;
        valvulas.cantidad = Number(
          prompt(
            `el producto seleccionado es ${lemoncello.nombre}, indique la cantidad: `
          )
        );
        total += cantidad(lemoncello.cantidad, 1200);
        seleccionProductos = -1;
        envio();
        metodoDePago();
        carrito.push(lemoncello);
        break;
      case 3:
        hayProductos = true;
        berenjenasEnEscabeche.cantidad = Number(
          prompt(
            `el producto seleccionado es ${berenjenasEnEscabeche.nombre}, indique la cantidad: `
          )
        );
        total += cantidad(berenjenasEnEscabeche.cantidad, 1500);
        seleccionProductos = -1;
        envio();
        metodoDePago();
        carrito.push(berenjenasEnEscabeche);
        break;
      case 4:
        alert("Agrega un nuevo producto");
        nuevoProducto = new nuevoProducto();
        nuevoProducto.nombre = prompt("Nombre: ");
        nuevoProducto.precio = Number(prompt("Precio: "));
        nuevoProducto.cantidad = Number(prompt("Cantidad: "));
        total += cantidad(nuevoProducto.cantidad, nuevoProducto.precio);
        seleccionProductos = -1;
        hayProductos = true;
        envio();
        metodoDePago();
        carrito.push(productoNuevo);
        break;
      default:
        seleccionProductos = alert(
          "No seleccionaste un numero que corresponda a las opciones, por favor vuelve a intentar"
        );
    }
  }
}

alert("¡GRACIAS POR CONFIAR EN NUESTROS PRODUCTOS!");

/* alert(
  "Ingrese la opcion del producto que desea llevar. Al finalizar, ingrese 0"
);

let seleccionarProductos = Number(
  prompt(
    "1-Mermelada de frutilla $800 \n 2-Lemoncello $1200 \n 3-Berenjenas en escabeche $1500 "
  )
);
let seleccionarCantidad;
let total = 0;

const cantidad = (cant, precio) => {
  return cant * precio;
};

while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad = Number(
        prompt(
          "el producto seleccionado es Mermelada de frutilla, indique la cantidad"
        )
      );
      total += cantidad(seleccionarCantidad, 800);
      break;
    case 2:
      seleccionarCantidad = Number(
        prompt("el producto seleccionado es Lemoncello, indique la cantidad")
      );
      total += cantidad(seleccionarCantidad, 1200);
      break;
    case 3:
      seleccionarCantidad = Number(
        prompt(
          "el producto seleccionado es Berenjenas en escabeche, indique la cantidad"
        )
      );
      total += cantidad(seleccionarCantidad, 1500);
      break;

    default:
      break;
  }
  seleccionarProductos = Number(
    prompt(
      "1-Mermelada de frutilla $800 2-Lemoncello $1200 3-Berenjenas en escabeche $1500 "
    )
  );
}

alert("el total de la compra es de: " + total);

const envio = () => {
  if (total >= 5000) {
    alert("El envio es gratuito");
  } else {
    total += 500;
    alert("el costo de envio es de 500, el total es: " + total);
  }
};

envio();

const metodoDePago = () => {
  let metodo = prompt("ingrese el metodo de pago: tarjeta o efectivo");
  if (metodo == "tarjeta") {
    console.log(total);
    alert("el total es:" + total);
  } else if (metodo == "efectivo") {
    total -= 500;
    alert("tenes un descuento de 500, el total es: " + total);
  }
};

metodoDePago(); */
