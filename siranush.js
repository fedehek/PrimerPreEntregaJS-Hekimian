alert("¡Bienvenido a Siranush Caseros! ");

alert(
  "Ingrese la opcion del producto que desea llevar. Al finalizar, ingrese 0"
);
let seleccionarProductos = Number(
  prompt(
    "1-Mermelada de frutilla $800 2-Lemoncello $1200 3-Berenjenas en escabeche $1500 "
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
  let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo");
  if (metodo == "tarjeta") {
    console.log(total);
    alert("el total es:" + total);
  } else if (metodo == "efectivo") {
    total -= 500;
    alert("tenes un descuento de 500, el total es: " + total);
  }
};

metodoDePago();
