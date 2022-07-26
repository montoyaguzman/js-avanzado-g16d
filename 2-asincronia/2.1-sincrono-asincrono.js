/**
 * Código sincrono: Una linea se jecuta inmediatamente despues de la otra
 * no hay codigo dependiente o bloqueante.
 */
 console.log('============== BLOQUE 1 ==============');
 console.log('Primero'); 
 console.log('Segundo');
 console.log('Tercero');
 
 /**
  * BLOQUE 2: Problema de la asincronia
  */
  console.log('============== BLOQUE 2 ==============');
 const validandoPago = () => {
     // Este setTimeout representa una operacion que depende de otra entidad
     // en este caso simulas esa dependencia con tiempo
     setTimeout(() => {
         console.log('2 Revisando con el banco y mostrando un loader...');
     }, 0);
 };
 
 console.log('1 Presiona el boton comprar'); 
 validandoPago();
 console.log('3 Tu paquete sera enviado :) ');