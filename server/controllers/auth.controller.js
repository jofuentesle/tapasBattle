
const generarJWT = require('../helpers/jwt');
const Usuario = require('../models/usuario.model');
const bcryptjs = require('bcryptjs');


const loginUsuarios = async (req, res) => {

    const { password, email } = req.body;

    try {
        //validar email
        const usuarioDB = await Usuario.findOne({ email });

        if(!usuarioDB) {
            return res.status(404).json({

                ok: false,
                msg: "Email no válido"
            })
    
        }
        //validar contraseña
        const validarPw = bcryptjs.compareSync(password, usuarioDB.password);
        
        if ( !validarPw ) {
            return res.status(404).json({
                ok:false,
                msg:"Contraseña no válida"
            })
        }

        //generar JWT
        const token = await generarJWT( usuarioDB.id);
        
        res.status(200).json({
            ok:true,
            token,
            usuarioDB
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok:false,
            msg:"error login"
        })
        
    }

}

const renewToken = async (req, res ) => {

    const uid = req.uid;

    //Genereamos token
    const token = await generarJWT( uid);

    //obtener usuarioDB

    const usuarioDB = await Usuario.findById(uid);

    try {

        res.status(200).json({
            ok: true,
            msg:'Token renovado!!!',
            usuarioDB
        })
        
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok: false,
            msg:"Token no renovado"
        })
        
    }

} 
module.exports = {
    loginUsuarios,
    renewToken
} 