
const jwt = require('jsonwebtoken');

const generarJWT = ( uid ) => {

    return new Promise((resolve, reject) => {

        const playload = {
            uid
        }
    
        jwt.sign( playload, process.env.JWT_SECRET, {
            expiresIn: '48h'
        }, (err, token) => {
            if(err) {
                console.log(err);
                reject('No se pudo generar JWT')
            } else {
                resolve( token ); 
            }
        })
    });
}

module.exports = generarJWT