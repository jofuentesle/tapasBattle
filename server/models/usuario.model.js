const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema ({
    nombre: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    img: {
        type: String

    },
    role: {
        type: String,
        require: true,
        default: 'USER_ROLE'
    },
    chefGuest: {
        type: Boolean,
        default: false
    }

});

UsuarioSchema.method('toJSON', function() {
    const {_v, _id, password, ...object } = this.toObject();

    object.uid = _id;
    return object;
})

module.exports = model( 'Usuario', UsuarioSchema );