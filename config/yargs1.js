const argv = require('yargs')
    .option('b',
    {
        alias: 'base',
        demand: true,
        desc: 'Base de la tabla',
        type: 'number',
        default:5,
        demandOption: true
    })
    .option('l',
    {
        alias: 'listar',
        demand:false,
        desc: 'Listar tabla',
        type: 'boolean',
        default: true
    })
    .option('h',
    {
        alias: 'hasta',
        demand:false,
        desc: 'Multiplicar del 1 hasta',
        type: 'number',
        default: 10
    })    
    .check((argv, options) => {

        if( isNaN(argv.b) )
        {
            throw new Error('La base de la tabla debe ser un numero');
        }
        if( isNaN(argv.h) )
        {
            throw new Error('El limite debe ser un numero');
        }
        else if( argv.h < 2 )
        {
            throw new Error('El limite debe ser mayor a 1');
        }

        return true;
    }).argv;

    module.exports = argv;