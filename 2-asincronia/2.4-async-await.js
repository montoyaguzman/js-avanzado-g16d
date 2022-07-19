/**
 * BLOQUE 5: Async await (ES8 - 2017)
 */

// async function promiseValidandoPago() {
//     return 44;
// }

const promiseValidandoPago = async () => {
    // El codigo asincrono de validandoPago debe quedar dentro de la promise
    // setTimeout(() => {
    //     // Este setTimeout representa una operacion que depende de otra entidad
    //     // en este caso simulas esa dependencia con tiempo
    //     console.log('2 Revisando con el banco y mostrando un loader...');
    //     // if (status === 200) {
    //     //     resolve();
    //     // } else {
    //     //     reject(new Error('Este es mi custom error'));
    //     // }
    // })
    await console.log('2 Revisando con el banco y mostrando un loader...');
}

console.log('1 Presiona el boton comprar'); 
promiseValidandoPago().then(() => console.log('3 Tu paquete sera enviado :)') )
    .then(() => console.log('4 Gracias por tu compra'))
    .then(() => console.log('5 Avisando al proveedor'))
    .catch((error) => {
        console.log('Mostrando un modal con el error: ', error);
    })
    .finally(() => console.log('==== FINAL (cerrando loader) ===='))