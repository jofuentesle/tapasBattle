const Recipe = require('../models/recipe.model');

const getRecipe = async (req, res, next) => {

    const recipies = await Recipe.find();

    res.status(200).json({
        ok:true,
        recipies
    })
}

const createRecipe = async (req, res, next) => {

    try {

        //Creamos usuario
        const recipe = new Recipe( req.body, req.uid );
        recipe.uidChef = req.uid

        //Guardamos receta
        await recipe.save();

        res.status(200).json({
            ok: true,
            recipe
        })
        
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            ok: false,
            msg:"Error al crear la receta"
        })
        
    }
}

const updateRecipe = async (req, res,rext) => {

    const uid = req.params.id

    try {

        const recipeDB = await Recipe.findById( uid );

        //verificamos receta
        if (!recipeDB) {
            return req.status( 404 ).json({
                ok:false,
                msg: "Receta no encontrado"
            }); 
        }
        //verificamos q tenga privilegios
        const chefUid = recipeDB.uidChef;
        
        if( chefUid !== req.uid ) {
            return res.status(401).json({
                ok: false,
                msg:'No tienes privilegios para modificar'
            })
        }

        //Actualizamos receta
        const campos = req.body;

        const recipeUpdate = await Recipe.findByIdAndUpdate( uid, campos,{ new: true});
        res.status(200).json({
            ok: true,
            msg:"update recipe",
            uid: req.uid
        })

        
    } catch (error) {
        console.log(error);

        return res.status(401).json({
            ok:false,
            msg:"Error al actualizar la receta"
        })
        
    }
}

const deleteRecipe = async (req, res, next ) => {

    const uid = req.params.id

    try {
        const recipeDB = await Recipe.findById(uid);
        
        if( !recipeDB ) {
            return res.status(401).json({
                ok: false,
                msg:"Error, la receta no existe"
            });
        }

        //verificamos q tenga privilegios
        const chefUid = recipeDB.uidChef;
    
        if( chefUid !== req.uid ) {
            return res.status(401).json({
                ok: false,
                msg:'No tienes privilegios para borrar la receta'
            })
        }

        const deleteRecipe = await Recipe.findOneAndDelete(recipeDB._id)

        res.status(200).json({
            ok: true,
            msg:"Receta borrada"
        })

        
    } catch (error) {

        console.log(error);
        return res.status(404).json({
            ok: false,
            msg:"Error al borrar la receta"
        })
        
    }


}

module.exports = {
    getRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe
}