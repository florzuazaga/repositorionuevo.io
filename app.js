//tienda
let products = [];
let total = 0;

function add(product, price) {
  console.log(product, price);
  products.push(product);
  total = total + price;
  document.getElementById("checkout").innerHTML = `Pagar $${total}`;
}
function pay() {
  window.alert(products.join(",\n"));
}
//formulario
function validar() {
  var nombre, apellidos, correo, usuario, clave, telefono, expresion;
  nombre = document.getElementById("nombre").value;
  apellidos = document.getElementById("apellidos").value;
  correo = document.getElementById("correo").value;
  usuario = document.getElementById("usuario").value;
  clave = document.getElementById("clave").value;
  telefono = document.getElementById("telefono").value;
  expresion = /\w+@\w+\.[a-z]/;
  if (
    nombre === "" ||
    apellidos === "" ||
    correo === "" ||
    usuario === "" ||
    clave === "" ||
    telefono === ""
  ) {
    alert("Todos los campos son obligatorios");
    return false;
  } else if (nombre.length > 30) {
    alert("El nombre es muy largo");
    return false;
  } else if (apellidos.length > 80) {
    alert("Los apellidos son muy largos");
    return false;
  } else if (correo.length > 100) {
    alert("El correo es muy largo");
    return false;
  } else if (!expresion.test(correo)) {
    alert("El correo no es válido");
    return false;
  } else if (usuario.length > 20 || clave.length > 20) {
    alert("El usuario y la clave solo debe tener como máximo 20 caracteres");
    return false;
  } else if (telefono.length > 10) {
    alert("El teléfono es muy largo");
    return false;
  } else if (isNaN(telefono)) {
    alert("El teléfono ingresado no es un número");
    return false;
  }
}
