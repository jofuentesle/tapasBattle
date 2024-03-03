/*
ruta:/api/upload
*/

const { Router } = require('express');
const { check } = require('express-validator');

const expressfileUpload = require('express-fileupload');
const { fileUpload } = require('../controllers/upload.controller')
const { validarCampos } = require('../middelware/validar-campos');

const validarJWT = require('../middelware/validar-jwt');

const router = Router();

//validamos 
router.use(expressfileUpload());


router.put( '/:tipo/:id', fileUpload);


//Exportamos router
module.exports =  router ;