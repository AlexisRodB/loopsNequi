const usuarios = [
    {
        nombre: 'alexis',
        movimientos: [50000, -10000, -5000]
    },
    {
        nombre: 'alexander',
        movimientos: [-20000, -30000, 100000]
    },
    {
        nombre: 'alexa',
        movimientos: [15000, -5000]
    }
];

for (let i = 0; i < usuarios.length; i++) {
    const usuarioActual = usuarios[i];

    let totalUsuario = 0;

    for (let j = 0; j < usuarioActual.movimientos.length; j++) {
        totalUsuario += usuarioActual.movimientos[j];
    }

    console.log(`usuario: ${usuarioActual.nombre} - balance total movimientos: ${totalUsuario}`);
}