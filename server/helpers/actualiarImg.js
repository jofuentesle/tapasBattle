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


    switch( tipo ) {

        case 'usuarios':
            
            const usuario = await Usuario.findById(id);
            
            if( !usuario ) {
                console.log('No se encontró el usuario')
                return false
            }

            const pathViejoU = `./upload/usuarios/${ usuario.img}`;

            
            if ( fs.existsSync( pathViejoU )) {
                //borrar imagen anterior
                fs.unlinkSync( pathViejoU );
            }

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

            const pathViejoR = `./upload/recetas/${ receta.img}`;
            if ( fs.existsSync( pathViejoR )) {
                //borrar imagen anterior
                fs.unlinkSync( pathViejoR );
            }

            receta.img = nombreArchivo;
            
            //Guardamos archivo
            await receta.save();
            return true;
            break;

        case 'eventos':
        
        const evento = await Events.findById(id);
            if( !evento ) {
                console.log('No se econtró evento')
                return false
            }  

            const pathViejo = `./upload/eventos/${ evento.img}`;
            if ( fs.existsSync( pathViejo )) {
                //borrar imagen anterior
                fs.unlinkSync( pathViejo );
            }

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