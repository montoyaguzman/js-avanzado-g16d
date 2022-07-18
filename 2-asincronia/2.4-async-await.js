/**
 * BLOQUE 4: Promesas (pending, resolve, reject)
 */
console.log('============== BLOQUE 4 ==============');
const validandoPago = () => {
    setTimeout(() => {
        console.log('Revisando con el banco y mostrando un loader...');
    }, 0);
}

 const promiseValidandoPago = () => {
    return new Promise((resolve, reject) => {
        // Este setTimeout representa una operacion que depende de otra entidad
        // en este caso simulas esa dependencia con tiempo
        validandoPago();
        resolve();
        // if (validandoPago()) {
        //     resolve();
        // } else {
        //     reject();
        // }
    })
};
console.log('Presiona el boton comprar'); 
promiseValidandoPago().then(response => console.log('Tu paquete sera enviado :)') )
    .then(/*doOtherThing*/)
    .then(/*doOtherThing2*/)