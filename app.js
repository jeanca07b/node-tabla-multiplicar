
const {crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();




/* Anterior:
const [, , arg3 = 'base=5' ] = process.argv;
const [, base] = arg3.split('=');
console.log(base);

console.log(process.argv);

crearArchivo( base )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch(err => console.log(err));

*/

/*
console.log(argv);

console.log('base: yargs ', argv.base );
*/



//const base = 4;


crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.blue, 'creado en carpeta salida'.green) )
    .catch(err => console.log(err));
