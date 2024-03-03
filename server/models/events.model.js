const { Schema, model } = require('mongoose');

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
        type: Date
    },
    guests: {
        type: Array
    },
    chefs: {
        type: Array
    },
    recipe: {
        type: Array
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