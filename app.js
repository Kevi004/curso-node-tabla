
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv  = require('./config/yargs');


console.clear();


// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');
// console.log(process.argv);
// console.log(argv);




// const base = 3;




crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow))
    .catch(err => console.log(err));

