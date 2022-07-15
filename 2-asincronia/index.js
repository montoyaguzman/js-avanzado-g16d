/**
 * BLOQUE 1
 * Código sincrono: Una linea se jecuta inmediatamente despues de la otra
 * no hay codigo dependiente o bloqueante.
 */
// console.log('Primero'); 
// console.log('Segundo');
// console.log('Tercero');

/**
 * BLOQUE 2: Problema de la asincronia
 */
// const validandoPago = () => {
//     // Este setTimeout representa una operacion que depende de otra entidad
//     // en este caso simulas esa dependencia con tiempo
//     setTimeout(() => {
//         console.log('Revisando con el banco y mostrando un loader...');
//     }, 0);
// };

// console.log('Presiona el boton comprar'); 
// validandoPago();
// console.log('Tu paquete sera enviado :) ');

/**
 * BLOQUE 3: Solucion 1 - Uso de callbacks (no es la buena practica debido
 * a que el anidamiento se puede extender sin fin - callbackhell)
 */
//  const validandoPago = (showSuccesBuy) => {
//      // Este setTimeout representa una operacion que depende de otra entidad
//     // en este caso simulas esa dependencia con tiempo
//     setTimeout(() => {
//         console.log('Revisando con el banco y mostrando un loader...');
//         showSuccesBuy();
//     }, 0);
// };

// const showSuccesBuy = () => {
//     console.log('Tu paquete sera enviado :) ');
// }

// console.log('Presiona el boton comprar'); 
// validandoPago(showSuccesBuy);

/**
 * BLOQUE 4: Promesas (pending, resolve, reject)
 */
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
promiseValidandoPagoc().then(response => console.log('Tu paquete sera enviado :)') )
    .then(/*doOtherThing*/)
    .then(/*doOtherThing2*/)

// https://medium.com/laboratoria-how-to/programacion-asincrona-cea3bad7c3c6#:~:text=S%C3%ADncrono%20vs%20As%C3%ADncrono&text=Un%20c%C3%B3digo%20s%C3%ADncrono%20es%20aquel,y%20contin%C3%BAa%20con%20su%20ejecuci%C3%B3n.