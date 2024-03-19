/*
ruta:/api/upload
*/

const { Router } = require('express');
const { check } = require('express-validator');

const expressfileUpload = require('express-fileupload');
const { fileUpload, getFile } = require('../controllers/upload.controller')
const { validarCampos } = require('../middelware/validar-campos');

const validarJWT = require('../middelware/validar-jwt');

const router = Router();

//validamos 
router.use(expressfileUpload());

//Guardar img
router.put( '/:tipo/:id',validarJWT, fileUpload);

//Obtener img url
router.get('/:tipo/:foto', getFile);



//Exportamos router
module.exports =  router ;