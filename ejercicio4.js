const movimientos = [
    { valor: 0, tipo: 'vacio' },
    { valor: 40000, tipo: 'recarga' },
    { valor: 0, tipo: 'vacio' },
    { valor: -25000, tipo: 'pago_comercio' },
    { valor: -10000, tipo: 'retiro' },
    { valor: -15000, tipo: 'pago_comercio' }
];

let posicionEncontrada = -1;

for (let i = 0; i < movimientos.length; i++) {
    if (movimientos[i].valor === 0) {
        continue;
    }

    if (movimientos[i].tipo === 'pago_comercio') {
        posicionEncontrada = i;
        console.log(`pago encontrado en la posicion: ${posicionEncontrada}!`);
        break; 
    }
}