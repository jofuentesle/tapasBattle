const fs = require('fs');

const Usuario = require('../models/usuario.model');
const Events  = require('../models/events.model');
const Recipe  = require('../models/recipe.model'); 

const borrarImg = ( path ) => {

    if ( fs.existsSync( path )) {
        //borrar imagen anterior
        fs.unlinkSync( path );
    }

}

const actualiarImg = async ( tipo, id, nombreArchivo ) => {

    let patViejo = '';

    switch( tipo ) {

        case 'usuarios':
            const usuario = await Usuario.findById(id);
            console.log(usuario.img);
            if( !usuario ) {
                console.log('No se encontró el usuario')
                return false
            }  

            pathViejo = `./upload/usuarios/${ usuario.img}`;
            borrarImg(pathViejo);
            console.log(pathViejoU);

            usuario.img = nombreArchivo;
            
            //Guardamos archivo
            await usuario.save();
            return true;
            break;


        case 'recetas':
            const receta = await Recipe.findById(id);
            if( !receta ) {
                console.log('No se encontró la receta')
                return false
            }  

            pathViejo = `./upload/recetas/${ receta.img}`;
            borrarImg(pathViejo);

            receta.img = nombreArchivo;
            
            //Guardamos archivo
            await receta.save();
            return true;
            break;

        case 'eventos':
        
        const evento = await Events.findById(id);
            if( !evento ) {
                console.log('No se econtró médico')
                return false
            }  

            const pathViejo = `./upload/eventos/${ evento.img}`;
            borrarImg(pathViejo);

            evento.img = nombreArchivo;
            
            //Guardamos archivo
            await evento.save();
            return true;

        break;
            

    }


    console.log("imagen actualizada");

}

module.exports = {
    actualiarImg
}