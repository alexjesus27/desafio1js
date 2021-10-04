//variable

let vHelado = 3000;

// Mensaje de prueba en consola

console.log("Mensaje de prueba");

// Saludo y operaciones 

let nombreCliente = prompt ("Ingrese nombre:");
alert("Bienvenido" + " " + nombreCliente + " " + "a nuestra pagina");
let cantHelados = parseInt(prompt("¿Cuantos helados vas a querer hoy?"));
let totalPagar = cantHelados * vHelado;
alert("El monto a pagar sera:" + " " + totalPagar);