const colors = require('colors');

const fs = require('fs');
const crearArchivo = async (base = 5,listar=false,multiplos) => {
    
        try{
            let salida = ''; 
            let consola = '';
            for(let i = 1; i<= multiplos;i++){
                salida +=  `${base} x ${i} = ${i*base}\n`;
                consola +=  `${base} ${ 'x'.yellow} ${i} ${'='.green} ${i*base}\n`;
            }
            if(listar){
            console.log('======================'.green);
            console.log(`   tabla del: `.green,colors.blue(base));
            console.log('======================');
            console.log(consola);
            }
            
            
            fs.writeFileSync(`./salida/tabla-${base}.txt`,salida );
            return `tabla-${base}.txt creado` ;
         
    }
    catch(err){
        throw err;
    } 

    
    
}

module.exports = {
    crearArchivo
}