const { Schema, model } = require('mongoose');

const VoteSchema = new Schema ({
    gusto: {
        type: Number,
        require: true
    },
    presentacion: {
        type: Number,
        require: true
    },
    creatividad: {
        type: Number,
        require: true
    },
    recipeId: {
        type: String,
    },
    guestId: {
        type: String
    }
});

VoteSchema.method('toJSON', function() {
    const {_v, _id, ...object } = this.toObject();

    object.uid = _id;
    return object;
})

module.exports = model( 'Vote', VoteSchema );