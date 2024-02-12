const { Schema, model } = require('mongoose');
const User = require('./usuario.model');
const Recipe = require('./recipe.model');

const EventsSchema = new Schema ({
    nombre: {
        type: String,
        require: true
    },
    eventPlanerId: {
        type: String,
        require: true
    },
    fecha: {
        type: Date,
    },
    guests: {
        type: Object,
    },
    chefs: {
        type: Object
    },
    recipe: {
        type: Object,
    },
    img: {
        type: String

    }

});

EventsSchema.method('toJSON', function() {
    const {_v, _id, ...object } = this.toObject();

    object.uid = _id;
    return object;
})

module.exports = model( 'Events', EventsSchema );