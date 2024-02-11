
const generarJWT = require('../helpers/jwt');
const { response } = require('express');
const bcryptjs = require('bcryptjs')

const Usuario = require('../models/usuario.model');

//obtener usuarios
const getUsuarios = async (req, res) => {

    const usuarios = await Usuario.find();

    res.status(200).json({
        ok:true,
        usuarios,
        uid: req.uid
    })
}

//crear usuario
const createUsuarios = async (req, res=response) => {

    const { email, password } = req.body;

    try {

        const existeEmail = await Usuario.findOne({ email });

        if( existeEmail ) {

            return res.status(400).json({
                ok:false,
                msg:"correo registrado"
            })
        }
        
         //Creamos usuario
            const usuario = new Usuario( req.body );
            
            //Encriptar contraseña
            const salt = bcryptjs.genSaltSync();
            usuario.password = bcryptjs.hashSync('password', salt);
            
            //Guardamos usuario
            await usuario.save();

             //generar JWT
            const token = await generarJWT( usuario.id);

            res.status(200).json({
                ok:true,
                token
            })
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:"Error"
        })
    }

}

const updateUsuarios = async (req, res) => {

    const uid = req.params.id

    try {

        const usuarioDB = await Usuario.findById( uid); 

        if (!usuarioDB) {
            return req.status( 404 ).json({

                ok:false,
                msg: "Usuarios no encontrado"
            });   
        }
            //Actualizamos usuario
            const campos = req.body;
        if ( usuarioDB.email === req.body.email) {
            delete campos.email;

        } else {
            const existeEmail = await Usuario.findOne( { email: req.body.email });
            if( existeEmail ) {
                return res.status(404).json({
                    ok: false,
                    msg:"email duplicado"
                })
            }
        }

    
        delete campos.password

        const userUpdate = await Usuario.findByIdAndUpdate( uid, campos,{ new: true});

        res.status(200).json({
            ok: true, 
            uid
        })
        
    } catch (error) {

        res.status(500).json({
            ok:false,
            msg:"Error"
        })
        
    }

}
module.exports = {
    getUsuarios,
    createUsuarios,
    updateUsuarios
}