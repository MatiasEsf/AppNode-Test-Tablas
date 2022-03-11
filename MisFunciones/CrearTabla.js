
const fs = require('fs');
const colors = require('colors');
const dir = 'APP-TablasMultiplicar/Tablas';

const CrearTablaFuncion = ( base = 5, listar = true, limite = 10 ) => {

    return new Promise(( resolve, reject) => 
    {

        try{

            let salida ='Archivo creado con MiEjercicioFS.js  \n\nTabla del ' + base + '\n====================\n\n\n';

            for( let i = 1; i <= limite ; i++)
            {
                salida += i + " X " + base + " = " + i * base + '\n';
            }

            if( fs.existsSync(`${dir}/Tabla-${base}.txt`) )
            {
                throw new Error(`El archivo Tabla-${base}.txt ya existe`);
            }

            else{
                fs.writeFile(`${dir}//Tabla-${base}.txt`, salida, (err) => {
                    if(err) throw err;
                    console.log('Archivo creado'.yellow);
                });
            }

            if( listar ){
                console.log(salida.green);
            }
            
            resolve(colors.magenta(`${base}.txt`));

        }

        catch(error){
            reject(colors.red("ERROR TRY: " + error +  "\n REJECT: Error Creando el archivo de la tabla"));
        }
    });

}



module.exports = {
    CrearTablaFuncion,
    dir
}


