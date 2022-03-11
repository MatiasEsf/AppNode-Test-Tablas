
const { demandOption } = require('yargs');
const { CrearTablaFuncion } = require('./MisFunciones/CrearTabla');
const argv  = require('./config/yargs1'); //!Creamos la config aparte para no tener tantas cosas en el app principal.
const colores = require('colors');
const fs = require('fs');

const {dir} = require('./MisFunciones/CrearTabla');

if( !fs.opendirSync(dir )){
    fs.mkdirSync(dir);
    console.log("Directorio tablas creado".green);
}


CrearTablaFuncion( argv.base, argv.l, argv.h) 
    .then( (archivo) => {
        console.log(archivo, "Fue creado");
    })
    .catch( (error) => { 
        console.log(colores.red(error + " MSG .catch"));
    });
