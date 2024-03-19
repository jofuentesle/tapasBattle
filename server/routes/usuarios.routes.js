/*
ruta:/api/usuarios
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { getUsuarios, createUsuarios, updateUsuarios } = require('../controllers/usuarios.controller');
const { validarCampos } = require('../middelware/validar-campos');
const validarJWT = require('../middelware/validar-jwt');
const router = Router();

router.get( '/',validarJWT ,getUsuarios );

router.post( '/',
        [
            check('nombre','El nombre es obligatorio').notEmpty(),
            check('password','El password es obligatorio').notEmpty(),
            check('email','El email no es correcto').isEmail(),
            validarCampos
        ], 
    createUsuarios );


router.put( '/:id', 
        [
            validarJWT,
            //check('nombre','El nombre es obligatorio para actualizar').notEmpty(),
            //check('email','El email no es correcto').isEmail(),
            validarCampos
            
        ], 
    updateUsuarios );

module.exports =  router;