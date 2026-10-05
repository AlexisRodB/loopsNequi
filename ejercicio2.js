const prompt = require("prompt-sync")();

const pinCOrrecto = "1234";
let intento = prompt("ingrese su pin: ");

while (intento !== pinCOrrecto) {
    console.log("pin incorrecto");
    intento = prompt("ingrese su pin de nuevo: ");
}
console.log("pin correcto, bienvenido a nequi");