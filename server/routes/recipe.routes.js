/*
ruta:/api/recipes
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middelware/validar-campos');
const validarJWT = require('../middelware/validar-jwt');

const { getRecipe, getRecipeById, createRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipe.controller')

const router = Router();

router.get( '/',validarJWT ,getRecipe );

//crear receta
router.post( '/',validarJWT, createRecipe );

//buscar receta por id
router.get('/:id', 
            [
                validarJWT,
                check('El id es obligatorio').notEmpty()
            ],
            getRecipeById );

//actualizar receta
router.put( '/:id', 
        [
            validarJWT,
            check('nombre','El nombre es obligatorio').notEmpty(),
            check('ingredient','Los ingredientes son obligatorios').notEmpty(),
        ],
        updateRecipe
);    

//actualizar receta
router.delete( '/:id', deleteRecipe);    

module.exports =  router;