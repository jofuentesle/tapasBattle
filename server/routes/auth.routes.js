/*
ruta:/api/login
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { loginUsuarios, renewToken } = require('../controllers/auth.controller');
const { validarCampos } = require('../middelware/validar-campos');

const validarJWT = require('../middelware/validar-jwt');

const router = Router();

router.post( '/',
    [
        check('password','El password es obligatorio').notEmpty(),
        check('email','El email no es correcto').isEmail(),
        validarCampos

    ], 
    loginUsuarios );

//Renovar token para validar rutas
router.get('/renew', validarJWT, renewToken)    

module.exports =  router ;