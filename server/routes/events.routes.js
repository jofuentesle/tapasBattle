/*
ruta:/api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middelware/validar-campos');
const validarJWT = require('../middelware/validar-jwt');

const { getEvents, createEvents, updateEvent } = require('../controllers/events.controller');


const router = Router();
//obtener eventos
router.get( '/', validarJWT ,getEvents );

//generar eventos
router.post('/',validarJWT, createEvents );

//actualizar evento
router.put( '/:id', updateEvent     );    



module.exports =  router;