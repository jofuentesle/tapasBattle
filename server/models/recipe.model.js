const { Schema, model } = require('mongoose');

const RecipeSchema = new Schema ({
    nombre: {
        type: String,
        require: true,
        unique: true
    },
    tasteVote: {
        type: Array
    },
    presVote: {
        type: Array
    },
    originVote: {
        type: Array
    },
    img: {
        type: String
    },
    uidChef: {
        type: String
    },
    uidEvent: {
        type: String
    }
});

RecipeSchema.method('toJSON', function() {
    const {_v, _id, ...object } = this.toObject();

    object.uid = _id;
    return object;
})

module.exports = model( 'Recipe', RecipeSchema );