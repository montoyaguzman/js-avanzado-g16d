/**
 * BLOQUE 3: Solucion 1 - Uso de callbacks (no es la buena practica debido
 * a que el anidamiento se puede extender sin fin - callbackhell)
 */
 console.log('============== BLOQUE 3 ==============');
 const validandoPago = (showSuccesBuy) => {
     // Este setTimeout representa una operacion que depende de otra entidad
    // en este caso simulas esa dependencia con tiempo
    setTimeout(() => {
        console.log('Revisando con el banco y mostrando un loader...');
        showSuccesBuy();
    }, 0);
};

const showSuccesBuy = () => {
    console.log('Tu paquete sera enviado :) ');
}

console.log('Presiona el boton comprar'); 
validandoPago(showSuccesBuy);

