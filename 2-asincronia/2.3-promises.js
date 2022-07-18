/**
 * BLOQUE 4: Promesas (pending, resolve, reject)
 */
console.log('============== BLOQUE 4 ==============');

 const promiseValidandoPago = () => {
    return new Promise((resolve, reject) => {
        // El codigo asincrono de validandoPago debe quedar dentro de la promise
        setTimeout(() => {
            // Este setTimeout representa una operacion que depende de otra entidad
            // en este caso simulas esa dependencia con tiempo
            console.log('Revisando con el banco y mostrando un loader...');
            resolve();
            // if (validandoPago()) {
            //     resolve();
            // } else {
            //     reject();
            // }
        }, 0);
    })
};
console.log('Presiona el boton comprar'); 
promiseValidandoPago().then(response => console.log('Tu paquete sera enviado :)') )
    .then(/*doOtherThing*/)
    .then(/*doOtherThing2*/)