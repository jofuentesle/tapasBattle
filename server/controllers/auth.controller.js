
const generarJWT = require('../helpers/jwt');
const Usuario = require('../models/usuario.model');
const bcryptjs = require('bcryptjs');


const loginUsuarios = async (req, res) => {

    const { password, email } = req.body;

    try {
        //validar email
        const usuarioDB = await Usuario.findOne({ email });
        console.log(usuarioDB);

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
            token
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok:false,
            msg:"error login"
        })
        
    }

}
module.exports = {
    loginUsuarios
} 