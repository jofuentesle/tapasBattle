const path = require('path');
const fs = require('fs');

const { response } = require('express');
const { v4: uuidv4 } = require('uuid');
const { actualiarImg } = require('../helpers/actualiarImg');

    //subir imagenes
    const fileUpload = (req, res = response, next ) => {

        const tipo = req.params.tipo;
        const id = req.params.id;

        //Validar tipo
        const tiposValidos = ['usuarios', 'recetas', 'eventos'];

        if( !tiposValidos.includes(tipo)) {

            return res.status(400).json({
                ok:false,
                msg:"tipo no permitodo"
            })
        }

        //Validamos que tengamos un archivo
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({
                ok: false,
                msg:"Archivo no encontrado"
            })
        }

        //Procesar imagen
        const file = req.files.imagen;

        const nombreCortado = file.name.split('.');
        const extension = nombreCortado[ nombreCortado.length - 1 ];

        //Validar extension
        const extensionesValidas = ['png','jpg','jpeg', 'gif'];
        if( !extensionesValidas.includes(extension)) {

            return res.status(400).json({
                ok: false,
                msg:"Extensión imagen no permitida"
            })
        }

        //Generar nombre
        const nombreArchivo = `${uuidv4()}.${ extension }`;

        //Path para guarda imagen
        const path = `./upload/${tipo}/${ nombreArchivo }`;

        // Mover imagen
        file.mv(path, (err) => {
            if (err) {
            return res.status(500).json({
                ok: false,
                msg:"Error al subir la imagen"
            })}

            //Actualizar BBDD
            actualiarImg(tipo, id, nombreArchivo );


            res.status(200).json({
                ok: true,
                nombreArchivo
            })
        });
    } 

    //Obtener imagenes
    const getFile = (req, res = response, next ) => {

        const tipo = req.params.tipo;
        const foto = req.params.foto;

        const pathImg = path.join(__dirname, `../upload/${ tipo }/${ foto }` );

        if ( fs.existsSync( pathImg) ) {

            res.sendFile( pathImg );

        } else {

            const pathImg = path.join(__dirname, `../upload/no-image.png` );
            res.sendFile( pathImg );
        }
         
        
    
    }

module.exports = {

    fileUpload,
    getFile
} 