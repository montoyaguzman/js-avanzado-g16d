import { sum, substract } from './modules/sum-substract.js';
import * as operations from './modules/multiply-divide.js';

function main() {
    let numero1 = 10;
    let numero2 = 40;

    const resultSum = sum(numero1, numero2);
    const resultSubs = substract(numero1, numero2);
    const resultMult = operations.multiply(numero1, numero2);
    const resultDiv = operations.divide(numero1, numero2);

    console.log('suma: ', resultSum);
    console.log('resta: ', resultSubs);
    console.log('multiplicacion: ', resultMult);
    console.log('division: ', resultDiv);

}

/** 
 * Este seria el quickresolve en html de un import de tipo ES6
 * <script type="module" src="./script.js"></script> 
*/

main();