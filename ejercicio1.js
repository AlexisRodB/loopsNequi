const movimientos = [50000, -20000, 100000, -15000, -5000, 30000]
let total = 0;
let cantidadRetiros = 0 ;

for (let i = 0; i < movimientos.length; i++) {
    total += movimientos [i];

    if(movimientos[i] < 0){
        cantidadRetiros++;
    }
}

console.log("total de dinero en la cuenta", total);
console.log("cantidad total de retiros", cantidadRetiros)
