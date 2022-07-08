const operations = require('./module.exports/functions');

function main() {
    let numero1 = 10;
    let numero2 = 40;
    console.log('suma: ', operations.sum(numero1, numero2));
    console.log('division: ', operations.divide(numero1, numero2));
}

main();