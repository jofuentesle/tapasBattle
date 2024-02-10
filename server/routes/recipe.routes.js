/*
ruta:/api/recipe
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middelware/validar-campos');
const validarJWT = require('../middelware/validar-jwt');

const { getRecipe, createRecipe, updateRecipe } = require('../controllers/recipe.controller')

const router = Router();

router.get( '/',validarJWT ,getRecipe );

//crear receta
router.post( '/',validarJWT, createRecipe );

//actualizar receta
router.put( '/:id', 
        [
            validarJWT,
            check('nombre','El nombre es obligatorio').notEmpty(),
            check('ingredient','Los ingredientes son obligatorios').notEmpty(),
        ],
        updateRecipe
);    

module.exports =  router;