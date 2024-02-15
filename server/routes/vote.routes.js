/*
ruta:/api/vote
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middelware/validar-campos');
const validarJWT = require('../middelware/validar-jwt');
const { toVote } = require('../controllers/vote.controller');

const router = Router();

router.post( '/',
        [
            validarJWT,
            validarCampos
        ], 
    toVote );



module.exports =  router;