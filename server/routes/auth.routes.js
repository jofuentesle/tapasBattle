/*
ruta:/api/login
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { loginUsuarios } = require('../controllers/auth.controller');
const { validarCampos } = require('../middelware/validar-campos');

const router = Router();

router.post( '/',
    [
        check('password','El password es obligatorio').notEmpty(),
        check('email','El email no es correcto').isEmail(),
        validarCampos

    ], 
    loginUsuarios );

module.exports =  router ;