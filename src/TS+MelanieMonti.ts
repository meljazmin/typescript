async function operaciones() {
    console.info(await operacion(1, 2, 'suma'));
    console.info(await operacion(1, 2, 'resta'));
}


async function operacion(nro1: number, nro2: number, operacion: string) {
    const modulo = await import(`./operaciones/${operacion}`);
    let instancia = new modulo['default'](nro1, nro2);
    return instancia.operar(nro1, nro2);
}


operaciones();