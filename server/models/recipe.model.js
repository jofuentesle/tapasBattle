const { Schema, model } = require('mongoose');

const RecipeSchema = new Schema ({
    nombre: {
        type: String,
        require: true,
        unique: true
    },
    ingredient: {
        type: String
    },
    taste: {
        type: Number
    },
    presentation: {
        type: Number
    },
    img: {
        type: String

    },
    uidChef: {
        type: String
    }

});

RecipeSchema.method('toJSON', function() {
    const {_v, _id, ...object } = this.toObject();

    object.uid = _id;
    return object;
})

module.exports = model( 'Recipe', RecipeSchema );