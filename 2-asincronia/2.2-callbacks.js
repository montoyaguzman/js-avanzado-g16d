/**
 * BLOQUE 3: Solucion 1 - Uso de callbacks (no es la buena practica debido
 * a que el anidamiento se puede extender sin fin - callbackhell)
 */
 console.log('============== BLOQUE 3 ==============');
 const validandoPago = (showSuccesBuy) => {
     // Este setTimeout representa una operacion que depende de otra entidad
    // en este caso simulas esa dependencia con tiempo
    setTimeout(() => {
        console.log('2 Revisando con el banco y mostrando un loader...');
        showSuccesBuy(othercallback);
    }, 0);
};

const showSuccesBuy = () => {
    console.log('3 Tu paquete sera enviado :) ');
}

console.log('1 Presiona el boton comprar'); 
validandoPago(showSuccesBuy);

