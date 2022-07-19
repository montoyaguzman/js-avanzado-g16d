/**
 * BLOQUE 5: Async await (ES8 - 2017)
 */

// async function promiseValidandoPago() {
//     return 44;
// }

const promiseValidandoPago = () => {
    return new Promise((resolve, reject) => {
        // El codigo asincrono de validandoPago debe quedar dentro de la promise
        setTimeout(() => {
            // Este setTimeout representa una operacion que depende de otra entidad
            // en este caso simulas esa dependencia con tiempo
            console.log('2 Revisando con el banco y mostrando un loader...');
            resolve();
            // if (status === 200) {
            //     resolve();
            // } else {
            //     reject(new Error('Este es mi custom error'));
            // }
        }, 0);
    })
};

async function main() {
    console.log('1 Presiona el boton comprar');     
    try {
        // lineas donde el codigo puede fallar
        await promiseValidandoPago();
        // const response = await promiseValidandoPago2();
        // await promiseValidandoPago3();
        // await promiseValidandoPago4();
    } catch (error) {
        console.log('error:', error);
    }
    console.log('3 Tu paquete sera enviado :)');
}

main();