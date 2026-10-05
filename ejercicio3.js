const prompt = require('prompt-sync')();

let opcion;

do{
    console.log('\n--- MENU NEQUI ---');
    console.log('1) ver saldo');
    console.log('2) enviar dinero');
    console.log('3) recargar');
    console.log('4) salir');

    opcion = prompt ('selecciona una opcion: ');

    if (opcion === '1') {
        console.log('tu saldo disponible es $1.000.');
    } else if (opcion === '2') {
        console.log('redirigiendo a la seccion de transferencias...');
    } else if (opcion === '3') {
        console.log('redirigiendo a recargas...');
    } else if (opcion === '4') {
        console.log('saliendo de la aplicacion. chau');
    } else {
        console.log('opcion invalida, intenta de nuevo.');
    }
} while (opcion !== '4');